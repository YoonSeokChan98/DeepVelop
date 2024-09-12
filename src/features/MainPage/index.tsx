import MainPageStyled from './styled';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { jobOpeningData } from '@/utils/data';
import JobOpening from '@/components/JobOpening';
import WiseSaying from '@/components/WiseSaying';
import PostList from '@/components/PostList';
import MainPost from '@/components/MainPost';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);
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
                    <div className="wiseSaying">
                        <WiseSaying />
                    </div>

                    <Swiper
                        className="swiperWrap"
                 
                        loop={true}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        spaceBetween={0}
                        slidesPerView={1}
                    >
                       {jobOpeningData ?
                          jobOpeningData?.map((x: JobOpeningData, i: number) => {
                            return (
                                <SwiperSlide key={`${i}-job`}>
                                    <JobOpening item={x} />
                                </SwiperSlide>
                            );
                        })
                        :
                        <div>현재 공고가 없습니다!</div>
                    }
                    </Swiper>

                    <div className="mainPostWrap">
                        <MainPost />
                    </div>
                    <div onClick={handleOpenExplain} style={{ color: '#ccc', cursor: 'pointer' }}>
                        test용 / 다시보기
                    </div>
                </div>
            </MainPageStyled>
        </>
    );
};

export default MainPage;
