import { useRouter } from 'next/router';
import HeaderStyled from './styled';
import { useState } from 'react';

const Header = () => {
    const router = useRouter();
    const [deepvelopText, setDeepvelop] = useState('DeepVelop');
    const [mainText, setMainText] = useState('Main');
    const [explainText, setExplainText] = useState('Explain');
    const [myBlogText, setMyBlogText] = useState('My Blog');

    return (
        <>
            <HeaderStyled>
                <div className="headerWrap">
                    <div className="headerBox">
                        <div className="logo">
                            <div
                                onClick={() => {
                                    router.push('/');
                                }}
                                onMouseEnter={()=> setDeepvelop('딥벨롭')}
                                onMouseLeave={() => setDeepvelop('DeepVelop')}
                            >
                                {deepvelopText}
                            </div>
                        </div>
                        <div className="nav">
                            <div
                                className='mainText'
                                onClick={() => {
                                    router.push('/deepvelop');
                                }}
                                onMouseEnter={()=> setMainText('메인')}
                                onMouseLeave={() => setMainText('Main')}
                            >
                                {mainText}
                            </div>
                            <div
                                className='explainText'
                                onClick={() => {
                                    router.push('/explain');
                                }}
                                onMouseEnter={()=> setExplainText('설명')}
                                onMouseLeave={() => setExplainText('Explain')}
                            >
                                {explainText}
                            </div>
                            <div
                                onClick={() => {
                                    router.push('/myblog');
                                }}
                                onMouseEnter={()=> setMyBlogText('내 블로그')}
                                onMouseLeave={() => setMyBlogText('My Blog')}
                            >
                                {myBlogText}
                            </div>
                        </div>
                    </div>
                </div>
            </HeaderStyled>
        </>
    );
};

export default Header;
