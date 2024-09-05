import styled from 'styled-components';

const MyBlogPageStyled = styled.div`
    .myBlogWrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        .postWrap {
            display: flex;
            flex-direction: column;
            justify-content: center;
            .postList {
                display: flex;
            }
        }
        .writePostBtn {
            /* border: 1px solid; */
            display: flex;
            justify-content: center;
            width: 10rem;
            div {
                font-size: large;
                background-image: linear-gradient(transparent calc(100% - 3px), #000 3px);
                background-repeat: no-repeat;
                background-size: 0% 100%;
                transition: background-size 0.5s;
                cursor: pointer;
                margin: 10px 10px;
                background-image: linear-gradient(transparent 95%, #000 80%);
            }
            div:hover {
                background-size: 100% 100%;
            }
        }
    }
`;

export default MyBlogPageStyled;
