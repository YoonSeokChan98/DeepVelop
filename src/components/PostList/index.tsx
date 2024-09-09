import React from 'react';
import PostListStyled from './styled';
import { useRouter } from 'next/router';
// import PostListStyled from './PostListStyled';

interface PostListProps {
    item?: {
        id: string;
        date: string;
        title: string;
        tag: string;
        content: string;
    };
}

const PostList = ({ item }: PostListProps) => {
    if (!item) {
        return <div>게시물이 없습니다.</div>;
    }
    const { id, title, tag, date } = item;

    const router = useRouter();

    const handleClick = () => {
        router.push(`/myblog/postdetail/${id}`);
    };

    return (
        <PostListStyled>
            <div onClick={handleClick}>
                <div className="postListWrap">
                    <div className="date">{date}</div>
                    <div className="title">{title}</div>
                    <div className="tag">{tag}</div>
                </div>
            </div>
        </PostListStyled>
    );
};

export default PostList;
