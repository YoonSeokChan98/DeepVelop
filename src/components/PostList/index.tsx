import PostListStyled from './styled';

interface PostListPsops {
    item: {
        title: string;
        tag: string;
        content: string;
    };
}

const PostList = ({ item }: PostListPsops) => {
    const { title, tag, content } = item;
    console.log('item', item);

    return (
        <PostListStyled>
            <div className='postListWrap'>
                <div>제목: {title}</div>
                <div>태그: {tag}</div>
                <div>내용: {content}</div>
            </div>
        </PostListStyled>
    );
};

export default PostList;
