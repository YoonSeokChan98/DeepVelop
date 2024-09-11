import React, { useEffect, useState } from 'react';
import WritePostStyled from './styled';
import { useRouter } from 'next/router';
import 'react-quill/dist/quill.snow.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { imgArray } from '@/utils/data';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const WritePost = () => {
    const router = useRouter();
    const [savedPost, setSavedPost] = useState<any>([]);
    const [content, setContent] = useState('');

    useEffect(() => {
        const savedPost = JSON.parse(localStorage.getItem('posts') || '[]') as [];
        setSavedPost(savedPost);
    }, []);

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')} ${String(
        hours
    ).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    const postFormik: any = useFormik({
        initialValues: {
            id: Date.now() + Math.random().toString(36).substr(2, 9),
            date: formattedDate,
            title: '',
            tag: '',
            content: '', // content 추가
        },
        validationSchema: Yup.object({
            title: Yup.string().required('제목을 입력해주세요'),
            tag: Yup.string().required('태그를 입력해주세요'),
            content: Yup.string().test('is-not-empty', '내용을 입력해주세요', (value: any) => {
                const plainText = value ? value.replace(/<[^>]*>?/gm, '').trim() : '';
                return plainText !== ''; // 빈 문자열이면 에러 발생
            }),
        }),
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

            postFormik.resetForm();
            router.push('/myblog');
        },
    });

    const modules = {
        toolbar: [
            [{ font: [] }],
            [{ size: ['small', false, 'large', 'huge'] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
            ['image'],
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
                                    value={postFormik.values.tag}
                                    placeholder="부제목"
                                />
                                {postFormik.touched.tag && postFormik.errors.tag ? (
                                    <div style={{ color: 'red' }}>{postFormik.errors.tag}</div>
                                ) : null}
                            </div>
                            <div className="contentBox">
                                <ReactQuill
                                    onChange={(value: string) => {
                                        setContent(value);
                                        postFormik.setFieldValue('content', value); // formik content에 값 설정
                                    }}
                                    theme="snow"
                                    formats={formats}
                                    modules={modules}
                                    placeholder="당신은 어떤 이야기를 가지고 있나요?"
                                />
                                {postFormik.touched.content && postFormik.errors.content ? (
                                    <div style={{ color: 'red' }}>{postFormik.errors.content}</div>
                                ) : null}
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
