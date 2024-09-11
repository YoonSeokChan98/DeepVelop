import ScrollExplain from '@/components/ScrollExplain';
import ExplainPageStyled from './styled';
import WiseSaying from '@/components/WiseSaying';

interface DataProps {
    handleCloseExplain: () => void;
    showModal: boolean;
}

const ExplainPage = ({ handleCloseExplain, showModal }: DataProps) => {
    return (
        <>
            <ExplainPageStyled>
                <div className="explainPageWrap">
                <WiseSaying />
                    <div className="Deep">Deep</div>
                    <div className="explainBox">
                        <div>
                            <div className="WelcomeText">&quot;Welcome to DeepVelop&quot;</div>
                            <div className="smallText">deep + develop</div>
                        </div>
                        <div className="explain1">deep의 깊은과 devlop의 합성어</div>
                        <div className="explain2">자기개발을 깊게 하고 싶은 여러분을 위해 준비했습니다</div>
                    </div>
                    <div className="Velop">Velop</div>
                    <ScrollExplain />
                    <div>{showModal ? <div onClick={handleCloseExplain} style={{color:'#ccc', cursor:'pointer'}}>오늘 하루 보지 않기</div> : <></>}</div>
                </div>
            </ExplainPageStyled>
        </>
    );
};
export default ExplainPage;
