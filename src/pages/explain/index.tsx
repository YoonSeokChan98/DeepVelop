import ExplainPage from '@/features/Explain';

interface DataProps {
    handleCloseExplain: () => void;
    showModal: boolean;
}

const Explain = ({ handleCloseExplain, showModal }: DataProps) => {
    return (
        <>
            <ExplainPage handleCloseExplain={handleCloseExplain} showModal={showModal} />
        </>
    );
};
export default Explain;
