import styled from 'styled-components';

const JobOpeningStyled = styled.div`
    width: 100%;
    height: 100%;

    .imgBox {
        cursor: pointer;
        width: 100%;
        height: 100%;
        position: relative;
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
        .content {
            color: white;
            padding: 10px;
            text-align: center;
            z-index: 10;
            position: absolute;
            top: 50%;
            left: 50%;
            border-radius: 5px;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.1); /* 투명한 배경 */
            backdrop-filter: blur(2px) contrast(0.4); /* 블러 및 대비 조정 */
            filter: url(#mosaic);
            font-size: 18px;
            font-weight: bolder;
            line-height: 40px;
        }
    }
`;

export default JobOpeningStyled;
