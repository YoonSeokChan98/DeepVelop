import JobOpeningStyled from './styled';

interface JobOpeningData {
    item: { name: string; title: string; info: string; img: { src?: string }; link?: string };
}
const JobOpening = ({ item }: JobOpeningData) => {
    // console.log('JobOpeningData',item);
    const name = item.name;
    const title = item.title;
    const info = item.info;
    const img = item.img.src;
    // console.log(img);
    const link = item.link;
    // console.log(link);

    return (
        <>
            <JobOpeningStyled>
                <div className="JobOpeningBox">
                    <a href={link} target="_blank">
                        <div className="imgBox">
                            <img className="sibar" src={img} />
                        </div>
                        <div>
                            <div>회사명: {name}</div>
                            <div>제목: {title}</div>
                            <div>내용: {info}</div>
                        </div>
                    </a>
                </div>
            </JobOpeningStyled>
        </>
    );
};

export default JobOpening;
