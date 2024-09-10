import styled from 'styled-components';

const PostListStyled = styled.div`
    .post {
        margin-top: 50px;
        border: 1px;
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
                overflow: hidden;
                /* text-overflow: ellipsis; */
                img {
                    border-radius: 5px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    backface-visibility: hidden;
                }
                .title {
                    position: absolute;
                    z-index: 2;
                    color: white;
                    font-size: x-large;
                    /* overflow: hidden;
                    text-overflow: ellipsis; */
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
`;

export default PostListStyled;
