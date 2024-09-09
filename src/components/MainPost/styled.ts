import styled from 'styled-components';

const MainPostStyled = styled.div`
    .MainPostBox {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .postBox {
            border: 1px solid;
            border-radius: 5px;
            padding: 10px;
            width: 15rem;
            height: 20rem;
            margin: 10px;
            .date {
                font-size: small;
                color: gray;
            }
            .title {
                font-size: xx-large;
                overflow: hidden;
            }
            .tag {
                font-size: x-large;
                overflow: hidden;
            }
            .content {
            }
        }
    }
`;

export default MainPostStyled;
