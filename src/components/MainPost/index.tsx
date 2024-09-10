import { useState, useEffect } from 'react';
import MainPostStyled from './styled';

interface Post {
    date: string;
    title: string;
    tag: string;
    content: string;
}

const MainPost = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const storedPosts = localStorage.getItem('posts');
        if (storedPosts) {
            setPosts(JSON.parse(storedPosts));
        }
    }, []);

    return (
        <MainPostStyled>
            <div className="MainPostBox">
                {posts.length > 0 ? (
                    posts.map((post, index) => (
                        <div key={index} className="postBox">
                            <div className="postHeader">
                                <div className="date">{post.date}</div>
                                <div className="title">{post.title}</div>
                                <div className="tag">{post.tag}</div>
                            </div>
                            <div className="postContent">
                                {post.content && <div className="content" dangerouslySetInnerHTML={{ __html: post.content }} />}
                            </div>
                            {/* content를 HTML로 렌더링 */}
                            {/* <div className="content" dangerouslySetInnerHTML={{ __html: post.content }} /> */}
                        </div>
                    ))
                ) : (
                    <div>저장된 게시글이 없습니다.</div>
                )}
            </div>
        </MainPostStyled>
    );
};

export default MainPost;
