import JobOpeningStyled from './styled';

interface JobOpeningData {
    item: { name: string; title: string; info: string; img: { src?: string }; link?: string };
}
const JobOpening = ({ item }: JobOpeningData) => {
    const name = item.name;
    const title = item.title;
    const info = item.info;
    const img = item.img.src;
    const link = item.link;

    return (
        <>
            <JobOpeningStyled>
                <div
                    className="imgBox"
                    onClick={() => {
                        window.open(link, '_blank');
                    }}
                >
                    <img src={img} alt="" />
                    <div className="content">
                        <div>{name}</div>
                        <div>{title}</div>
                        <div>{info}</div>
                    </div>
                </div>
            </JobOpeningStyled>
        </>
    );
};

export default JobOpening;
