import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import WritePostStyled from './styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import ReactEditor from '../ReactEditor';

interface Post {
    id: string;
    title: string;
    tag: string;
    content: string;
}

const WritePost = () => {
    const router = useRouter();
    const [savedPost, setSavedPost] = useState<Post[]>([]);

    useEffect(() => {
        // 로컬스토리지를 만들어줌
        const savedPost = JSON.parse(localStorage.getItem('posts') || '[]') as Post[];
        setSavedPost(savedPost);
    }, []);

    const validationSchema = Yup.object({
        title: Yup.string().required('제목을 입력해주세요.'),
        tag: Yup.string().required('태그를 입력해주세요.'),
        content: Yup.string().required('내용을 입력해주세요.'),
    });

    const postFormik = useFormik({
        initialValues: {
            id: Date.now() + Math.random().toString(36).substr(2, 9),
            title: '',
            tag: '',
            content: '',
        },
        validationSchema,
        onSubmit: (values) => {
            const newPost: Post = {
                id: values.id,
                title: values.title,
                tag: values.tag,
                content: values.content,
            };
            const updatedPosts = [...savedPost, newPost];
            localStorage.setItem('posts', JSON.stringify(updatedPosts));
            // 폼 초기화
            postFormik.resetForm();
            router.push('/myblog');
        },
    });

    return (
        <>
            <WritePostStyled>
                <form onSubmit={postFormik.handleSubmit} className="pageWrap">
                    <div className="postWrap">
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
                        <div className="content">
                            <ReactEditor/>
                            {/* <textarea
                                name="content"
                                onChange={postFormik.handleChange}
                                onBlur={postFormik.handleBlur}
                                value={postFormik.values.content}
                                placeholder="당신의 이야기를 작성해 주세요"
                            ></textarea> */}
                            {postFormik.touched.content && postFormik.errors.content ? (
                                <div style={{ color: 'red' }}>{postFormik.errors.content}</div>
                            ) : null}
                        </div>
                    </div>
                    <button type="submit">작성</button>
                </form>
            </WritePostStyled>
        </>
    );
};
export default WritePost;
