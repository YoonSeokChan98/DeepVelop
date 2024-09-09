import styled from 'styled-components';
const HeaderStyled = styled.div`
    .headerWrap {
        width: 100%;
        /* position: fixed;
        top: 0; */
        padding: 10px;
        border-bottom: 1px solid black;
        .headerBox {
            display: flex;
            justify-content: space-between;
            .logo {
                div {
                    width: 90px;
                    text-align: center;
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
            .nav {
                display: flex;
                div {
                    /* border: 1px solid; */
                    width: 90px;
                    text-align: center;
                    /* margin: 0 10px; */
                    /* padding-right: 10px; */
                    font-size: large;
                    background-image: linear-gradient(transparent calc(100% - 3px), #000 3px);
                    background-repeat: no-repeat;
                    background-size: 0% 100%;
                    transition: background-size 0.5s;
                    cursor: pointer;
                    margin: 10px 20px;
                    background-image: linear-gradient(transparent 95%, #000 80%);
                }
                div:hover {
                    background-size: 100% 100%;
                }
            }
        }
    }
`;

export default HeaderStyled;
