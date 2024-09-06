import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import WritePostStyled from './styled';

import * as Yup from 'yup';
import { useRouter } from 'next/router';
// import ReactEditor from '../ReactEditor';
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { Button } from 'antd';
import { useFormik } from 'formik';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface Post {
    id: string;
    title: string;
    tag: string;
    content: string;
}

const WritePost = () => {
    const router = useRouter();
    const [savedPost, setSavedPost] = useState<Post[]>([]);
    const [content, setContent] = useState('');

    useEffect(() => {
        // 로컬스토리지를 만들어줌
        const savedPost = JSON.parse(localStorage.getItem('posts') || '[]') as Post[];
        setSavedPost(savedPost);
    }, []);

    const postFormik = useFormik({
        initialValues: {
            id: Date.now() + Math.random().toString(36).substr(2, 9),
            title: '',
            tag: '',
        },
        onSubmit: (values) => {
            const newPost: Post = {
                id: values.id,
                title: values.title,
                tag: values.tag,
                content: content,
            };
            const updatedPosts = [...savedPost, newPost];
            localStorage.setItem('posts', JSON.stringify(updatedPosts));
            // 폼 초기화
            postFormik.resetForm();
            router.push('/myblog');
        },
    });

    const modules = {
        toolbar: {
            container: [['image'], [{ header: [1, 2, 3, 4, 5, false] }], ['bold', 'underline']],
        },
    };

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
                                    onBlur={postFormik.handleBlur}
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
                                    onBlur={postFormik.handleBlur}
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
                                    modules={modules}
                                />
                            </div>
                            <div className="btn">
                                <Button htmlType="submit">저장하기</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </WritePostStyled>
        </>
    );
};
export default WritePost;
