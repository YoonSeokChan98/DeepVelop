import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

// 스타일 정의
const Container = styled.div`
    padding: 2rem;
    padding-bottom: 100px;
    margin: 0 auto;
    max-width: 800px;
    overflow-x: hidden;
`;

const TopSection = styled.div`
    text-align: center;
    padding: 4rem 0;
    max-width: 600px;
    margin: 0 auto;
`;

const TimelineWrapper = styled.div`
    position: relative;
    min-height: 150px;
`;

const Line = styled.div`
    position: absolute;
    z-index: 2;
    left: calc(50% - 1px);
    width: 2px;
    top: -50px;
    bottom: -50px;
    background-color: #000;
    display: none;

    &:before,
    &:after {
        position: absolute;
        display: block;
        content: '';
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        background-color: #000;
        left: 50%;
        transform: translateX(-50%);
    }

    &:after {
        bottom: 0;
    }
`;

const Section = styled.div`
    display: flex;
    opacity: 0;
    transform: translateX(-100%);
    transition: 600ms ease;
    position: relative;
    z-index: 1;
    margin: 50px 0;
    padding: 1rem;
    border-radius: 1rem;
    align-items: center;
    min-height: 300px;

    &:nth-child(odd) {
        flex-direction: row-reverse;
        transform: translateX(100%);
    }

    &.show-me {
        transform: none;
        opacity: 1;
    }
`;

const Bead = styled.div`
    position: absolute;
    display: block;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background-color: #000;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
`;

const Content = styled.div`
    width: calc(50% - 2rem);
`;

// 이벤트 데이터 타입 정의
interface Event {
    number: string;
    content: string;
}

const ScrollExplain: React.FC = () => {
    const ScrollEExplainRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const sectionsRef = useRef<HTMLDivElement[]>([]);
    const prevScrollY = useRef<number>(0);
    let up = false;
    let down = false;
    let full = false;
    let set = 0;
    const targetY = typeof window !== 'undefined' ? window.innerHeight * 0.8 : 0;

    // 이벤트 데이터 배열
    const events: Event[] = [
        { number: '"Vision"', content: '여러분의 상상력을 통해서 무엇이 목표인지 고민해 보세요' },
        { number: '"Design"', content: '목표가 정해지면 어떻게 해낼 것인지 설계를 해보세요' },
        { number: '"Story"', content: '당신의 이야기를 직접 작성하여 저에게 들려주세요' },
        { number: '"Hero"', content: '이야기의 주인공이 되어 모험을 떠나보세요!' },
        { number: 'Deepvlop', content: '저희가 여러분의 이야기를 보관하겠습니다.' },
    ];

    const scrollHandler = () => {
        if (typeof window === 'undefined') return;

        const scrollY = window.scrollY;
        up = scrollY < prevScrollY.current;
        down = !up;

        if (ScrollEExplainRef.current && lineRef.current) {
            const timelineRect = ScrollEExplainRef.current.getBoundingClientRect();
            const dist = targetY - timelineRect.top;

            if (down && !full) {
                set = Math.max(set, dist);
                lineRef.current.style.bottom = `calc(100% - ${set}px)`;
            }

            if (dist > (ScrollEExplainRef.current?.offsetHeight || 0) + 50 && !full) {
                full = true;
                lineRef.current.style.bottom = '-50px';
            }

            sectionsRef.current.forEach((item) => {
                if (item) {
                    const rect = item.getBoundingClientRect();
                    if (rect.top + item.offsetHeight / 5 < targetY) {
                        item.classList.add('show-me');
                    }
                }
            });
        }

        prevScrollY.current = scrollY;
    };

    useEffect(() => {
        if (typeof window === 'undefined') return;

        scrollHandler();
        if (lineRef.current) {
            lineRef.current.style.display = 'block';
        }
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <Container>
            <TopSection>
                <h1>DeepVelop</h1>
                <p>
                    
                </p>
            </TopSection>
            <TimelineWrapper ref={ScrollEExplainRef}>
                <Line ref={lineRef} />
                {events.map((event, index) => (
                    <Section
                        key={index}
                        ref={(el: HTMLDivElement | null) => {
                            if (el) {
                                sectionsRef.current[index] = el;
                            }
                        }}
                    >
                        <Bead />
                        <Content>
                            <h2>{event.number}</h2>
                            <p>{event.content}</p>
                        </Content>
                    </Section>
                ))}
            </TimelineWrapper>
                <div style={{textAlign:'center', fontWeight:'bolder', paddingTop:'50px', fontSize:'3rem'}}>" The End. "</div>
        </Container>
    );
};

export default ScrollExplain;
