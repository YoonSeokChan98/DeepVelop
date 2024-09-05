import MainPage from '@/features/MainPage';
import { useRouter } from 'next/router';

interface DataProps {
    handleOpenExplain: () => void;
}
// interface JobOpeningData {
//     item: { id: number; name: string; title: string; info: string };
// }

const DeepVelop = ({ handleOpenExplain }: DataProps) => {
    return (
        <>
            <div>
                <MainPage handleOpenExplain={handleOpenExplain} />
            </div>
        </>
    );
};

export default DeepVelop;
