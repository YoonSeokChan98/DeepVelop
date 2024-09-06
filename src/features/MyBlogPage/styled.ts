import styled from 'styled-components';

const MyBlogPageStyled = styled.div`
    .myBlogWrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        .userName {
            font-size: 1.5rem;
            border-bottom: 1px solid;
            margin-bottom: 10px;
        }
        .postWrap {
            /* border-top: 1px solid; */
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 80%;
            .postTitle {
                /* border-bottom: 1px solid; */
                font-size: 3rem;
            }
            .postList {
                max-width: 1000px;
                width: 100%;
                padding: 10px;
                align-items: center;
                /* font-size: 2em; */
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
        .topBtn {
            a {
                text-decoration: none;
                color: #000;
                font-size: 2rem;
                background-image: linear-gradient(transparent calc(100% - 3px), #000 3px);
                background-repeat: no-repeat;
                background-size: 0% 100%;
                transition: background-size 0.5s;
                cursor: pointer;
                margin: 10px 20px;
                background-image: linear-gradient(transparent 95%, #000 80%);
            }
            a:hover {
                background-size: 100% 100%;
            }
        }
    }
`;

export default MyBlogPageStyled;
