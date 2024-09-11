import styled from 'styled-components';

const MyBlogPageStyled = styled.div`
    /* width: 100%; */
    .myBlogWrap {
        padding: 0%;
        max-width: 1200px;
        width: 100%;
        margin: 0px auto;
        .userNameBox {
            width: 100%;
            display: flex;
            justify-content: center;
            .userName {
                text-align: center;
                font-size: 1.5rem;
                border-bottom: 1px solid;
                margin-bottom: 10px;
            }
        }
        .postWrap {
            .postTitleBox {
                /* border: 1px solid; */
                text-align: center;
                .postTitle {
                    /* border: 1px solid; */
                    width: 15rem;
                    margin: 0 auto;
                    font-size: 3rem;
                }
            }
            .postList {
                display: flex;
                justify-content: center;
                .postGrid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 5px;
                }
            }
        }

        .writeWrap {
            margin-top: 20px;
            width: 100%;
            text-align: center;
        }
        .writePostBtn {
            div {
                display: inline-block;
                font-size: x-large;
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
                /* font-size: 2rem; */
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
    /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/
    @media screen and (min-width: 480px) {
        //스타일 입력
    }

    /* 테블릿 가로 (해상도 768px ~ 1023px)*/
    @media screen and (min-width: 768px) {
        .myBlogWrap {
            .postWrap {
                .postList {
                    .postGrid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
            }
        }
    }

    /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/
    @media screen and (min-width: 1024px) {
        .myBlogWrap {
            .postWrap {
                .postList {
                    .postGrid {
                        grid-template-columns: repeat(4, 1fr);
                    }
                }
            }
        }
    }
`;

export default MyBlogPageStyled;
