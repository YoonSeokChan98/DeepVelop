import styled from 'styled-components';

const PostListStyled = styled.div`
    .postListWrap {
        display: flex;
        position: relative;
        flex-direction: column;
        height: 350px;
        width: 200px;
        min-width: 250px;
        padding: 1.5rem;
        border-radius: 16px;
        background: #fff;
        border: 1px solid #ccc;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        margin-right: -130px;

        &:hover {
            cursor: pointer;
            transform: translateY(-3rem);
            z-index: 1;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            color: red;
        }

        &:hover ~ .postListWrap {
            transform: translateX(130px);
        }

        &:not(:first-child) {
            margin-left: 0;
        }

        .date {
            font-size: 0.5rem;
            color: gray;
        }

        .title {
            font-size: 2rem;
        }
        .title,
        .tag {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
`;

export default PostListStyled;
