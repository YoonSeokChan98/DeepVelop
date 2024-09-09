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
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 80%;

            .postTitle {
                font-size: 3rem;
            }

            .postList {
                /* border: 1px solid; */
                display: flex;
                /* align-items: center; */
                justify-content: center;
                overflow-x: auto; /* 가로 스크롤을 자동으로 생성 */
                padding: 3rem;
                /* max-width: 100%; 최대 너비를 100%로 설정 */
                /* box-sizing: border-box; 패딩을 너비에 포함시킴 */
                width: 120%;


                &::-webkit-scrollbar {
                    display: none;
                }
                -ms-overflow-style: none;
                scrollbar-width: none;

                .card {
                    display: flex;
                    position: relative;
                    flex-direction: column;
                    height: 350px;
                    width: 400px;
                    min-width: 250px;
                    padding: 1.5rem;
                    border-radius: 16px;
                    background: #fff;
                    border: 1px solid #ccc;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    margin-right: 20px; /* 오른쪽 마진 수정 */
                    /* margin-right: 0;  <-- 만약 카드가 오른쪽으로 넘어간다면 마진을 0으로 설정할 수 있음 */
                    
                    &:hover {
                        cursor: pointer;
                        transform: translateY(-1rem);
                        z-index: 1;
                        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
                    }

                    &:hover ~ .card {
                        transform: translateX(130px);
                    }

                    &:not(:first-child) {
                        margin-left: 0;
                    }

                    .card-author {
                        position: relative;
                        display: grid;
                        grid-template-columns: 75px 1fr;
                        align-items: center;
                        margin: 3rem 0 0;
                    }

                    .author-avatar img {
                        display: block;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        filter: grayscale(100%);
                        margin: 16px 10px;
                        overflow: hidden;
                    }

                    .half-circle {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 60px;
                        height: 48px;
                        fill: none;
                        stroke: #ff8a00;
                        stroke-width: 8;
                        stroke-linecap: round;
                    }

                    .author-name-prefix {
                        font-style: normal;
                        font-weight: 700;
                        color: #7a7a8c;
                    }

                    .card-header h2:hover {
                        background: linear-gradient(90deg, #ff8a00, #e52e71);
                        text-shadow: none;
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }
            }
        }

        .writePostBtn {
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
