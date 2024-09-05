import MainPageStyled from './styled';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { jobOpeningData } from '@/utils/data';
import JobOpening from '@/components/JobOpening';

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
                    <div onClick={handleOpenExplain}>test용 / 다시보기</div>
                    <div>메인입니다~~~~</div>
                    {/* swiper */}
                    <div>
                        <Swiper
                            className="swiperWrap"
                            centeredSlides={true}
                            loop={true}
                            // speed={100}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={0}
                            slidesPerView={1}
                            // navigation
                            // pagination={{ clickable: true }}
                            // scrollbar={{ draggable: true }}
                        >
                            {jobOpeningSwiper}
                        </Swiper>
                    </div>
                    {/* 인기 포트폴리오 */}
                    <div></div>
                    {/* 인기 블로그 */}
                    <div></div>
                </div>
            </MainPageStyled>
        </>
    );
};

export default MainPage;
