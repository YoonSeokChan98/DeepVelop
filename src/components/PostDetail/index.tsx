import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import PostDetailStyled from './styled';

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

const PostDetail = () => {
    const router = useRouter();
    const { id } = router.query; // query에서 id를 가져옵니다.
    const [post, setPost] = useState<{ date: String; title: string; tag: string; content: string } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (typeof window !== 'undefined' && id) {
            const fetchPosts = () => {
                const posts = localStorage.getItem('posts');
                if (posts) {
                    const postsArray = JSON.parse(posts);
                    const currentPost = postsArray.find((post: { id: string }) => post.id === id);
                    if (currentPost) {
                        setPost({
                            date: currentPost.date,
                            title: currentPost.title,
                            tag: currentPost.tag,
                            content: currentPost.content,
                        });
                    }
                }
                setLoading(false);
            };
            fetchPosts();
        }
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!post) return <div>No post found</div>;

    return (
        <PostDetailStyled>
            <div className="pageBox">
                <div className="postBox">
                    <div className="date">{post.date}</div>
                    <div className="title">{post.title}</div>
                    <div className="tag">{post.tag}</div>
                    <div className="content">
                        <PostContent dangerouslySetInnerHTML={{ __html: post.content }}></PostContent>
                    </div>
                </div>
            </div>
        </PostDetailStyled>
    );
};

export default PostDetail;
