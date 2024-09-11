import styled from 'styled-components';

const ExplainPageStyled = styled.div`
    .explainPageWrap {
        height: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        .Deep {
            writing-mode: vertical-rl;
            margin-top: 2rem;
        }
        .explainBox {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            .WelcomeText {
                font-size: x-large;
                font-weight: bold;
                background-image: linear-gradient(transparent calc(100% - 3px), #000 3px);
                background-repeat: no-repeat;
                background-size: 0% 100%;
                transition: background-size 0.8s;
                color: #000;
                /* cursor: pointer; */
                background-image: linear-gradient(transparent 60%, #f8cd07 40%);
            }
            .WelcomeText:hover {
                background-size: 100% 100%;
            }
            .smallText {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                margin-right: 10px;
                font-size: xx-small;
            }
            /* .explain1 {
                background-image: linear-gradient(transparent calc(100% - 3px), #000 3px);
                background-repeat: no-repeat;
                background-size: 0% 100%;
                transition: background-size 0.8s;
                color: #000;
                cursor: pointer;
                background-image: linear-gradient(transparent 60%, #f8cd07 40%);
            }
            .explain1:hover {
                background-size: 100% 100%;
            } */
            /* .explain2 {
                background-image: linear-gradient(transparent calc(100% - 3px), #000 3px);
                background-repeat: no-repeat;
                background-size: 0% 100%;
                transition: background-size 0.8s;
                color: #000;
                cursor: pointer;
                background-image: linear-gradient(transparent 60%, #f8cd07 40%);
            }
            .explain2:hover {
                background-size: 100% 100%;
            } */
        }
        .explainBox:hover {
            .WelcomeText {
                font-size: x-large;
                font-weight: bold;
                background-image: linear-gradient(transparent calc(100% - 3px), #000 3px);
                background-repeat: no-repeat;
                background-size: 0% 100%;
                transition: background-size 0.8s;
                color: #000;
                /* cursor: pointer; */
                background-image: linear-gradient(transparent 60%, #f8cd07 40%);
                background-size: 100% 100%;
            }
        }

        .Velop {
            writing-mode: vertical-rl;
        }
    }
`;

export default ExplainPageStyled;
