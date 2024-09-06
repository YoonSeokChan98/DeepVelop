import styled from 'styled-components';
import PostListStyled from './styled';
import { useRouter } from 'next/router';
import { useState } from 'react';

const PostContent = styled.div`
    margin-top: 20px;
    width: 100%;
    img,
    figure,
    div,
    article,
    picture,
    iframe,
    p {
        width: 100% !important;
    }
    div {
        max-width: 100% !important;
    }
    img {
        object-fit: cover;
    }
`;

interface PostListPsops {
    item: {
        id: any;
        title: string;
        tag: string;
        content: string;
    };
}

const PostList = ({ item }: PostListPsops) => {
    const { id, title, tag, content } = item;
    // console.log('item', item);
    const [isHovering, setIsHovering] = useState(false);

    const router = useRouter();
    const clickDetailPost = () => {
        router.push(`/myblog/postdetail/${id}`);
    };

    const handleMouseOver =()=>{
        setIsHovering(true)
    }
    const handleMouseOut =()=>{
        setIsHovering(false)
    }

    return (
        <PostListStyled>
            <div onClick={clickDetailPost}>
                <div className={isHovering ? "postListWrapGrow" : 'postListWrap'}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}>
                    {/* <div>{id}</div> */}
                    <div className='title'>{title}</div>
                    <div className='tag'>{tag}</div>
                    {/* <PostContent dangerouslySetInnerHTML={{ __html: content }}></PostContent> */}
                </div>
            </div>
        </PostListStyled>
    );
};

export default PostList;
