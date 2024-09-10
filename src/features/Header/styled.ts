import styled from 'styled-components';
const HeaderStyled = styled.div`
    .headerWrap {
        width: 100%;
        /* position: fixed;
        top: 0; */
        padding: 10px;
        border-bottom: 1px solid black;
        /* -webkit-text-stroke: 1px white; */
        /* background-color: white;
        position: relative;
        transition: border-bottom-color 0.3s ease-in-out; */
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
    /* .headerWrap:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #004d00;
        transform: scaleX(0);
        transition: transform 0.3s ease-in-out;
    }
    .headerWrap:hover {
        border-bottom-color: #004d00;
    }
    .headerWrap:hover::after {
        transform: scaleX(1);
    } */
`;

export default HeaderStyled;
