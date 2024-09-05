import styled from 'styled-components';

const WritePostStyled = styled.div`
    .pageWrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        .postWrap {
            border: 1px solid #ccc;
            display: flex;
            flex-direction: column;
            align-items: center;
            /* justify-content: space-between; */
            width: 80%;
            height: 30rem;
            /* justify-content: center; */
            .title {
                /* border: 1px solid #ccc; */
                input {
                    /* border: none; */
                    border-width: 0px 0px 1px 0px;
                }
                input:focus {
                    outline: none;
                }
            }
            .tag {
                /* border: 1px solid #ccc; */
                input {
                    /* border: none; */
                    border-width: 0px 0px 1px 0px;
                }
                input:focus {
                    outline: none;
                }
            }
            .content {
                /* border: 1px solid #ccc; */
                width: 90%;
                height: 100%;
                textarea {
                    border: none;
                    width: 100%;
                    height: 100%;
                    outline: none;
                }
            }
        }
    }
`;

export default WritePostStyled;
