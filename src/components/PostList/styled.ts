import styled from 'styled-components';

const PostListStyled = styled.div`
    .post {
        margin-top: 50px;
        border: 1px;
        /* background-color: #dfdddd; */
        /* display: flex;
        justify-content: center;
        align-items: center; */
        /* display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5px; */

        .card {
            margin: 10px;
            padding: 100px;
            width: 200px;
            height: 300px;
            background-color: #fff;
            border-radius: 5px;
            cursor: pointer;
            box-shadow: 10px 0 20px rgba(0, 0, 0, 0.4), inset 300px 0 50px rgba(0, 0, 0, 0.4);
            transform: perspective(2000px) rotateZ(0);
            transform-style: preserve-3d;
            transition: all 1s ease;
            .cover {
                border-radius: 5px;
                position: absolute;
                padding: 10px;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: white;
                transform-origin: left;
                transform-style: preserve-3d;
                transition: all 1s ease;
                /* z-index: 1; */
                img {
                    border-radius: 5px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    backface-visibility: hidden;
                    /* z-index: 1; */
                }
                .title {
                    position: absolute;
                    z-index: 2;
                    color: white;
                    font-size: x-large;
                }
                .date {
                    position: absolute;
                    bottom: 10px;
                    z-index: 2;
                    color: white;
                    font-size: small;
                }
            }
            .contentBox {
                width: 100%;
                height: 100%;
                overflow: hidden;
                z-index: -1;
                padding: 10px;
                position: absolute;
                top: 0;
                left: 0;
                font-size: 12px;
                .tag {
                    text-align: center;
                    font-size: 20px;
                }
            }
        }
        .card:hover {
            transform: perspective(2000px) rotateZ(-10deg);
            box-shadow: 10px 0 20px rgba(0, 0, 0, 0.4), inset 20px 0 50px rgba(0, 0, 0, 0.4);
        }
        .card:hover .cover {
            transform: rotateY(-135deg);
            box-shadow: 10px 0 20px rgba(0, 0, 0, 0.4);
        }
    }

    /* .postListWrap {
        display: flex;
        position: relative;
        flex-direction: column;
        height: 350px;
        width: 200px;
        min-width: 250px;
        padding: 1.5rem;
        border-radius: 16px;
        background: #fff;
        border: 1px solid #ccc;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        margin-right: -130px;

        &:hover {
            cursor: pointer;
            transform: translateY(-3rem);
            z-index: 1;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            color: red;
        }

        &:hover ~ .postListWrap {
            transform: translateX(130px);
        }

        &:not(:first-child) {
            margin-left: 0;
        }

        .date {
            font-size: 0.5rem;
            color: gray;
        }

        .title {
            font-size: 2rem;
        }
        .title,
        .tag {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    } */
`;

export default PostListStyled;
