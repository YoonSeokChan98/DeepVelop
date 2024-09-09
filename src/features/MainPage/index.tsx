import MainPageStyled from './styled';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { jobOpeningData } from '@/utils/data';
import JobOpening from '@/components/JobOpening';
import WiseSaying from '@/components/WiseSaying';
import PostList from '@/components/PostList';
import MainPost from '@/components/MainPost';

interface DataProps {
    handleOpenExplain: () => void;
}
interface JobOpeningData {
    name: string;
    title: string;
    info: string;
    img: { src?: string };
    link?: string;
}

const MainPage = ({ handleOpenExplain }: DataProps, { name, title, info, img, link }: JobOpeningData) => {
    // console.log(jobOpeningData);
    const jobOpeningSwiper = jobOpeningData ? (
        jobOpeningData?.map((x: JobOpeningData, i: number) => {
            return (
                <SwiperSlide key={`${i}-job`}>
                    <JobOpening item={x} />
                </SwiperSlide>
            );
        })
    ) : (
        <>
            <div>현재 공고가 없습니다!</div>
        </>
    );

    return (
        <>
            <MainPageStyled>
                <div className="mainPageWrap">
                    {/* <div onClick={handleOpenExplain}>test용 / 다시보기</div>
                    <div>메인입니다~~~~</div> */}
                    <div className="wiseSaying">
                        <WiseSaying />
                    </div>
                    <div>
                        <Swiper
                            className="swiperWrap"
                            centeredSlides={true}
                            loop={true}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={0}
                            slidesPerView={1}
                        >
                            {jobOpeningSwiper}
                        </Swiper>
                    </div>
                    <div className='mainPostWrap'>
                        <MainPost />
                    </div>
                </div>
            </MainPageStyled>
        </>
    );
};

export default MainPage;
