import styled from 'styled-components';

const PostDetailStyled = styled.div`
    .pageBox {
        width: 100%;
        height: 100%;
        padding: 30px 10px;
        .postBox {
            position: relative;
            width: 90%;
            max-width: 1000px;
            margin: 0 auto;
            padding: 10px;
            .cover {
                z-index: -1;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 100%;
                height: 100%;
                img {
                    border-radius: 5px;
                    width: 100%;
                    height: 100%;
                }
            }
            .contentBox {
                background-color: white;
                border-radius: 5px;
                padding: 10px;
                width: 95%;
                margin: 0 auto;

                .date {
                    color: gray;
                }
                .title {
                    font-size: 3rem;
                    border-bottom: 1px solid;
                }
                .tag {
                    margin-top: 10px;
                    font-size: 1.5rem;
                    border-bottom: 1px solid;
                }
                .content {
                    height: 35rem;
                    /* overflow-y: auto; */
                    overflow: auto;
                    padding-bottom: 10px;
                    /* border-top: 1px solid; */
                    border-bottom: 1px solid;
                }
            }
        }
    }
`;

export default PostDetailStyled;
