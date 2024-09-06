import styled from 'styled-components';

const WritePostStyled = styled.div`
    .pageBox {
        width: 100%;
        height: 100%;
        padding: 30px 10px;
        .postBox {
            border: 1px solid #ccc;
            width: 100%;
            max-width: 1000px;
            margin: 0px auto;
            text-align: center;
            padding: 10px;
            .title {
                input {
                    border-width: 0px 0px 1px 0px;
                }
                input:focus {
                    outline: none;
                }
            }
            .tag {
                margin-bottom: 30px;
                input {
                    border-width: 0px 0px 1px 0px;
                }
                input:focus {
                    outline: none;
                }
            }
            .contentBox {
                height: 600px;
                .quill {
                    height: 90%;
                }
            }
        }
        .btn {
            margin-top: 0px;
            width: 100%;
            text-align: center;
        }
    }
`;

export default WritePostStyled;
