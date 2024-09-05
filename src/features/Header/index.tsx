import { useRouter } from 'next/router';
import HeaderStyled from './styled';

const Header = () => {
    const router = useRouter();

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
                            >
                                DeepVelop
                            </div>
                        </div>
                        <div className="nav">
                            <div
                                onClick={() => {
                                    router.push('/deepvelop');
                                }}
                            >
                                main
                            </div>
                            <div
                                onClick={() => {
                                    router.push('/explain');
                                }}
                            >
                                explain
                            </div>
                            <div
                                onClick={() => {
                                    router.push('/myblog');
                                }}
                            >
                                my blog
                            </div>
                        </div>
                    </div>
                </div>
            </HeaderStyled>
        </>
    );
};

export default Header;
