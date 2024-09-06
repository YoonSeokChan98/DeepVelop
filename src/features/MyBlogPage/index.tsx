import PostList from '@/components/PostList';
import MyBlogPageStyled from './styled';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Post {
    id: any
    title: string;
    tag: string;
    content: string;
}

const MyBlogPage = () => {
    // 게시글 목록을 관리할 상태변수
    const [posts, setPosts] = useState<Post[]>([]);
    const router = useRouter();

    // 디버깅용
    useEffect(() => {
        console.log('posts', posts);
    }, [posts]);

    // 마운트시 로컬스토리지에서 게시글 데이터 가져옴
    useEffect(() => {
        // posts 라는 로컬스토리지를 가져옴
        const savedPosts = localStorage.getItem('posts');
        console.log(savedPosts, 'savedPosts');
        if (savedPosts) {
            // JSON 문자열을 js 객체로 파싱함
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
    const postList = posts?.map((post)=>(
        <PostList key={post.id} item={post}/>
    ));

    return (
        <>
            <MyBlogPageStyled>
                <div className='myBlogWrap'>
                    <div className='userName'>"유저이름" Blog</div>
                    <div className="postWrap">
                        <div className='postTitle'>Post List</div>
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
                    <div className='topBtn'><a href='#'>Top</a></div>
                    <br/>
                    <div
                        // style={{display:'none'}}
                        onClick={() => {
                            console.log('removeLocal');
                            onClickRemoveLocal();
                        }}
                    >
                        로컬스토리지 비우기
                    </div>
                </div>
            </MyBlogPageStyled>
        </>
    );
};
export default MyBlogPage;
