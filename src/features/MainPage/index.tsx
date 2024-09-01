import MainPageStyled from './styled';
interface DataProps {
    handleOpenExplain: () => void;
}

const MainPage = ({ handleOpenExplain }: DataProps) => {
    return (
        <>
            <MainPageStyled>
                <div className="mainPageWrap">
                    <div onClick={handleOpenExplain}>test용 / 다시보기</div>
                    <div>메인입니다~~~~</div>
                </div>
            </MainPageStyled>
        </>
    );
};

export default MainPage;
