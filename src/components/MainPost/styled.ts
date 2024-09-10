import styled from 'styled-components';

const MainPostStyled = styled.div`
    .MainPostBox {
        display: flex;
        padding: 3rem;
        overflow-x: auto; /* 가로 스크롤을 가능하게 */
        overflow-y: hidden; /* 세로 스크롤을 숨기기 */
        /* 스크롤바 숨기기 */
        &::-webkit-scrollbar {
            display: none;
        }
        -ms-overflow-style: none; /* IE와 Edge에서 스크롤바 숨기기 */
        scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */
        white-space: nowrap; /* 텍스트가 한 줄로 유지되도록 */

        .postBox {
            display: flex;
            flex-direction: column;
            height: 300px;
            width: 250px;
            min-width: 250px;
            padding: 1.5rem;
            border-radius: 16px;
            background: #fff;
            border: 1px solid #ccc;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            margin-right: 1rem; /* 카드 간 여백을 충분히 설정 */
            overflow: hidden;
            margin-right: -130px;
            position: relative; /* 자식 요소의 절대 위치 설정을 위해 추가 */
            
            .postHeader {
                .date {
                    font-size: small;
                    color: gray;
                }
                .title {
                    font-size: xx-large;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                .tag {
                    font-size: x-large;
                    overflow: hidden;
                }
            }
            .postContent {
                opacity: 0;
                visibility: hidden;
                max-height: 0;
                overflow: hidden;
                transition: opacity 0.5s ease, visibility 0.5s ease, max-height 0.5s ease;
            }
        }

        .postBox:hover {
            cursor: pointer;
            z-index: 1;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
            transform: translateY(-40px); /* 카드가 위로 이동하는 애니메이션 */
            
            .postHeader {
                background: linear-gradient(90deg, #ff8a00, #e52e71);
                text-shadow: none;
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            .postContent {
                opacity: 1;
                visibility: visible;
                max-height: 150px;
            }
        }

        .postBox:hover ~ .postBox {
            transform: translateX(130px); /* 카드가 옆으로 이동하는 애니메이션 */
        }

        .postBox:not(:first-child) {
            margin-left: 0;
        }
    }
`;

export default MainPostStyled;
