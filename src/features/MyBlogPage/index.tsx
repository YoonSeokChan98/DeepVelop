import PostList from '@/components/PostList';
import MyBlogPageStyled from './styled';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import WiseSaying from '@/components/WiseSaying';
import coverImg from '../../assets/images/leather.jpg';

interface Post {
    id: string;
    date: string;
    title: string;
    tag: string;
    content: string;
    image: any;
}

const MyBlogPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [titleText, setTitleText] = useState('Post List');
    const [writeText, setWriteText] = useState('Go to writing');
    const [topText, setTopText] = useState('Go up!');
    const router = useRouter();

    useEffect(() => {
        // console.log('posts', posts);
    }, [posts]);

    useEffect(() => {
        const savedPosts = localStorage.getItem('posts');
        // console.log(savedPosts, 'savedPosts');
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
                <div className="userNameBox">
                    <div className="userName">"유저이름" Blog</div>
                </div>
                <div className="postWrap">
                    <div className="postTitleBox">
                        <div
                            className="postTitle"
                            onMouseEnter={() => setTitleText('게시글')}
                            onMouseLeave={() => setTitleText('Post List')}
                        >
                            {titleText}
                        </div>
                    </div>
                    <div className="postList">
                        <div className="postGrid">{postList}</div>
                    </div>
                </div>
                <div className="writeWrap">
                    <div className="writePostBtn">
                        <div
                            onClick={() => {
                                onClickPost();
                            }}
                            onMouseEnter={() => setWriteText('글 쓰러가기')}
                            onMouseLeave={() => setWriteText('Go to writing')}
                        >
                            {writeText}
                        </div>
                    </div>
                    <div className="topBtn">
                        <a
                            href="#"
                            onMouseEnter={() => setTopText('위로 올라기')}
                            onMouseLeave={() => setTopText('Go up!')}
                        >
                            {topText}
                        </a>
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
            </div>
        </MyBlogPageStyled>
    );
};

export default MyBlogPage;
