import styled from 'styled-components';

const PostDetailStyled = styled.div`
    .pageBox {
        width: 100%;
        height: 100%;
        padding: 30px 10px;
        .postBox {
            width: 90%;
            max-width: 1000px;
            margin: 0 auto;
            padding: 10px;
            /* text-align: center; */
            .title {
                font-size: 3rem;
                border-bottom: 1px solid;
            }
            .tag {
                margin-top: 10px;
                font-size: 1.5rem;
                border-bottom: 1px solid;
            }
            .content {
                padding-bottom: 10px;
                /* border-top: 1px solid; */
                border-bottom: 1px solid;
            }
        }
    }
`;

export default PostDetailStyled;
