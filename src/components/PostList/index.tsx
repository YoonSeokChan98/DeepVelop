import React from 'react';
import PostListStyled from './styled';
import { useRouter } from 'next/router';
// import coverImg from '../../assets/images/leather.jpg';
// import PostListStyled from './PostListStyled';

interface PostListProps {
    item?: {
        id: string;
        date: string;
        title: string;
        tag: string;
        content: string;
        image: any
    };
}

const PostList = ({ item }: PostListProps) => {
    // console.log(coverImg);

    if (!item) {
        return <div>게시물이 없습니다.</div>;
    }
    const { id, title, tag, date, content ,image} = item;

    const router = useRouter();

    const handleClick = () => {
        router.push(`/myblog/postdetail/${id}`);
    };

    return (
        <PostListStyled>
            <div className="WrapBox" onClick={handleClick}>
                <div className="post">
                    <div className="card">
                        <div className="cover">
                            <div>
                                <img src={image.src} />
                            </div>
                            <div className="title">{title}</div>
                            <div className="date">{date}</div>
                        </div>
                        <div className="contentBox">
                            <div className="tag">{tag}</div>
                            {/* content가 HTML 형식일 경우 */}
                            {content && <div className="content" dangerouslySetInnerHTML={{ __html: content }} />}
                        </div>
                    </div>
                </div>
            </div>
        </PostListStyled>
    );
};

export default PostList;
