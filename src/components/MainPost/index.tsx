import { useState, useEffect } from 'react';
import MainPostStyled from './styled';

interface Post {
    date: string;
    title: string;
    tag: string;
    content: string; // 이 content에 HTML 태그가 포함되어 있을 것으로 가정
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
                        <div key={index} className='postBox'>
                            <div className="date">{post.date}</div>
                            <div className="title">{post.title}</div>
                            <div className="tag">{post.tag}</div>
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
