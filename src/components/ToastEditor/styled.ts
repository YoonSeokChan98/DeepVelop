import styled from 'styled-components';

const ToastEditorStyled = styled.div`
    .postBox {
        /* border: 1px solid red; */
        width: 100%;
        margin: 0 auto;
        .toastui-editor {
            width: 100% !important;
            box-sizing: border-box;
        }
        .btnBox {
            display: flex;
            justify-content: center;
            margin-bottom: 2rem;
            .postBtn {
                border: 1px solid;
                border-radius: 5px;
                display: flex;
                justify-content: center;
                width: 5rem;
            }
            .postBtn:hover {
                color: red;
            }
            .darkBtn {
                border: 1px solid;
                border-radius: 5px;
                display: flex;
                justify-content: center;
                width: 5rem;
            }
            .darkBtn:hover {
                color: red;
            }
        }
    }
`;

export default ToastEditorStyled;
