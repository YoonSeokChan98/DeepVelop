import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import WiseSayingStyled from './styled';

const wiseData = [
    '세상에서 가장 어려운 일은 자신을 아는 일이다. - 공자',
    '성공하는 사람은 자기 자신을 믿는 사람이다. - 소크라테스',
    '희망은 인생의 별이다. - 스페인 속담',
    '가장 큰 적은 나 자신이다. - 리처드 바크',
    '지금의 나를 만들기 위해서는 과거의 나를 받아들여야 한다. - 마크 트웨인',
    '어려움이 클수록 더 큰 기회가 찾아온다. - 네이선 마이어',
    '자신을 믿는 것이 가장 중요한 일이다. - 제프 베조스',
    '노력은 배신하지 않는다. - 마하트마 간디',
    '작은 성취도 큰 꿈의 시작이다. - 헨리 포드',
    '하늘이 무너져도 솟아날 구멍은 있다. - 한국 속담',
];

const WiseSaying = () => {
    const [wise, setWise] = useState<string>('');

    useEffect(() => {
        const newWise = getRandomWiseData();
        setWise(newWise);
    }, []);

    return (
        <WiseSayingStyled>
            <div className="wiseBox">
                {wise && (
                    <TypeAnimation
                        sequence={[
                            wise,
                            1000, // 대기 시간
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                )}
            </div>
        </WiseSayingStyled>
    );
};

const getRandomWiseData = () => {
    const randomIndex = Math.floor(Math.random() * wiseData.length);
    return wiseData[randomIndex];
};

export default WiseSaying;
