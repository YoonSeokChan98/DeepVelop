import PostList from '@/components/PostList';
import MyBlogPageStyled from './styled';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import WiseSaying from '@/components/WiseSaying';

interface Post {
    id: string;
    date: string;
    title: string;
    tag: string;
    content: string;
}

const MyBlogPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const router = useRouter();

    useEffect(() => {
        console.log('posts', posts);
    }, [posts]);

    useEffect(() => {
        const savedPosts = localStorage.getItem('posts');
        console.log(savedPosts, 'savedPosts');
        if (savedPosts) {
            const parsedPosts = JSON.parse(savedPosts);
            setPosts(parsedPosts);
        }
    }, []);

    const onClickPost = () => {
        router.push('/myblog/writepost');
    };

    const onClickRemoveLocal = () => {
        localStorage.removeItem('posts');
        setPosts([]);
    };

    const postList = posts.map((post) => <PostList key={post.id} item={post} />);

    return (
        <MyBlogPageStyled>
            <div className="myBlogWrap">
                <WiseSaying />
                <div className="userName">"유저이름" Blog</div>
                <div className="postWrap">
                    <div className="postTitle">Post List</div>
                    <div className="postList">{postList}</div>
                </div>
                <div className="writePostBtn">
                    <div
                        onClick={() => {
                            onClickPost();
                        }}
                    >
                        글 작성하러가기
                    </div>
                </div>
                <div className="topBtn">
                    <a href="#">Top</a>
                </div>
                <br />
                <div
                    onClick={() => {
                        console.log('removeLocal');
                        onClickRemoveLocal();
                    }}
                >
                    로컬스토리지 비우기
                </div>
            </div>
        </MyBlogPageStyled>
    );
};

export default MyBlogPage;
