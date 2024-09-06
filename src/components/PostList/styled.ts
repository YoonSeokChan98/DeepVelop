import styled from 'styled-components';

const PostListStyled = styled.div`
    .postListWrapGrow {
        margin-top: 20px;
        width: 100%;
        max-height: 300px;
        overflow: auto;
        padding: 15px;
        border: 1px solid gray;
        border-radius: 10px;
        transition-property: width, height;
        transition-duration: 1s, 1s;
        /* width: 150%; */
        height: 150%;
        .title {
            font-size: 2rem;
        }
        .tag {
        }
    }

    .postListWrap {
        margin-top: 20px;
        width: 100%;
        max-height: 300px;
        overflow: auto;
        padding: 15px;
        border: 1px solid gray;
        border-radius: 10px;
        transition-property: width, height;
        transition-duration: 1s, 1s;
        .title {
            font-size: 2rem;
        }
        .tag {
        }
    }
    /* .postListWrap:hover{
        color: red;
    } */
`;
export default PostListStyled;
