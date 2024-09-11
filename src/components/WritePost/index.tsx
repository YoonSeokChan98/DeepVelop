import React, { useEffect, useState } from 'react';
import WritePostStyled from './styled';
import { useRouter } from 'next/router';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { Button } from 'antd';
import { useFormik } from 'formik';
import { imgArray } from '@/utils/data';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// interface Post {
//     id: string;
//     date: string;
//     title: string;
//     tag: string;
//     content: string;
//     image: any;
// }

const WritePost = () => {
    const router = useRouter();
    const [savedPost, setSavedPost] = useState<any>([]);
    const [content, setContent] = useState('');

    useEffect(() => {
        // 로컬스토리지를 만들어줌
        const savedPost = JSON.parse(localStorage.getItem('posts') || '[]') as [];
        setSavedPost(savedPost);
    }, []);

    // 현재 날짜와 시간을 가져오기
    const currentDate = new Date();

    // 각 구성 요소를 가져오기
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    // 날짜와 시간을 문자열로 포맷팅
    const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')} ${String(
        hours
    ).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    const postFormik:any = useFormik({
        initialValues: {
            id: Date.now() + Math.random().toString(36).substr(2, 9),
            date: formattedDate,
            title: '',
            tag: '',
        },
        onSubmit: (values) => {
            const ran = Math.random() * 5;
            const randomN = Math.floor(ran);

            const newPost = {
                id: values.id,
                date: values.date,
                title: values.title,
                tag: values.tag,
                content: content,
                image: imgArray[randomN],
            };

            const updatedPosts = [...savedPost, newPost];

            localStorage.setItem('posts', JSON.stringify(updatedPosts));
            // 폼 초기화

            postFormik.resetForm();
            router.push('/myblog');
        },
    });

    const modules = {
        toolbar: [
            [{ font: [] }],
            [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
            ['link', 'image'],
            ['clean'],
        ],
    };

    const formats = [
        'font',
        'size',
        'header',
        'color',
        'background',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
    ];

    return (
        <>
            <WritePostStyled>
                <div className="pageBox">
                    <div className="postBox">
                        <form onSubmit={postFormik.handleSubmit}>
                            <div className="title">
                                <input
                                    name="title"
                                    onChange={postFormik.handleChange}
                                    // onBlur={postFormik.handleBlur}
                                    value={postFormik.values.title}
                                    placeholder="제목"
                                />
                                {postFormik.touched.title && postFormik.errors.title ? (
                                    <div style={{ color: 'red' }}>{postFormik.errors.title}</div>
                                ) : null}
                            </div>
                            <div className="tag">
                                <input
                                    name="tag"
                                    onChange={postFormik.handleChange}
                                    // onBlur={postFormik.handleBlur}
                                    value={postFormik.values.tag}
                                    placeholder="태그"
                                />
                                {postFormik.touched.tag && postFormik.errors.tag ? (
                                    <div style={{ color: 'red' }}>{postFormik.errors.tag}</div>
                                ) : null}
                            </div>
                            <div className="contentBox">
                                <ReactQuill
                                    onChange={(value: string) => {
                                        setContent(value);
                                    }}
                                    theme="snow"
                                    formats={formats}
                                    modules={modules}
                                    placeholder='당신은 어떤 이야기를 가지고 있나요?'
                                />
                            </div>
                            <div className="btn">
                                <button type="submit">저장하기</button>
                            </div>
                        </form>
                    </div>
                </div>
            </WritePostStyled>
        </>
    );
};
export default WritePost;
