import styled from 'styled-components';

const MainPageStyled = styled.div`
    .mainPageWrap {
        /* height: 100%;
        flex: 1; */

        .swiperWrap {
            width: 100%;
            height: 300px;
            overflow: hidden;
            .swiper-wrapper {
                display: -webkit-inline-box;
            }
        }
        /* .swiper {
            border: 1px solid #ccc;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            .swiper-wrapper {
                .swiper-slide {
                }
            }
        } */
        .mainPostWrap {
            width: 100%;
        }
    }
`;

export default MainPageStyled;
