import ExplainPage from '@/features/Explain';
import MainPage from '@/features/MainPage';
import { useEffect, useState } from 'react';

export default function Home() {
    const [showModal, setShowModal] = useState<boolean>(true);

    useEffect(() => {
        let explainModal = localStorage.getItem('explainModal');
        if (explainModal) {
            const now = new Date().getTime();
            if (now > parseInt(explainModal)) {
                localStorage.removeItem('explainModal');
                setShowModal(true);
            } else {
                setShowModal(false);
            }
        }
    }, []);

    const handleCloseExplain = () => {
        const now = new Date().getTime();
        const expireTime = now + 24 * 60 * 60 * 1000;
        localStorage.setItem('explainModal', expireTime.toString());
        setShowModal(false);
    };

    const handleOpenExplain = () => {
        // const now = new Date().getTime();
        // const expireTime = now + 24 * 60 * 60 * 1000; // 24시간을 밀리초로 계산
        // localStorage.setItem('explainModal', expireTime.toString());
        localStorage.removeItem('explainModal');
        setShowModal(true);
    };

    return (
        <>
            <div>
                {showModal ? (
                <ExplainPage handleCloseExplain={handleCloseExplain} showModal={showModal} />
                ) : (
                    <MainPage handleOpenExplain={handleOpenExplain} />
                )}
            </div>
        </>
    );
}
