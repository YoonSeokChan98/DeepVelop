import styled from 'styled-components';

const MyBlogStyled = styled.div`
    .myBlogWrap {
        display: flex;
        justify-content: center;
        .postBox {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 90%;
            .writeBtnBox {
                display: flex;
                justify-content: center;
                .writeBtn {
                    display: flex;
                    justify-content: center;
                    border: 1px solid;
                    border-radius: 5px;
                    width: 10rem;
                }
                .writeBtn:hover {
                    color: red;
                }
            }
        }
    }
`;

export default MyBlogStyled;
