import styled from 'styled-components';

const JobOpeningStyled = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
    }

    .imgBox {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        &:hover img {
            transform: scale(1.1);
        }

        .content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            opacity: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            text-align: center;
            padding: 20px;
            transition: opacity 0.3s ease, backdrop-filter 0.3s ease;
            backdrop-filter: blur(4px);

            &:hover {
                opacity: 1;
            }

            .name {
                font-size: 22px;
                font-weight: bold;
                margin-bottom: 10px;
            }

            .title {
                font-size: 18px;
                font-weight: 600;
                margin-bottom: 8px;
            }

            .info {
                font-size: 16px;
                line-height: 1.5;
                font-weight: 400;
            }
        }
    }
`;

export default JobOpeningStyled;
