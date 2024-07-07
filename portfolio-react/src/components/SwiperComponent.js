// import Swiper core and required modules
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slides({ data = [] }) {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {data.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className='flex justify-center p-5'>
                        {/* {item.img && <img src={item.img} alt={item.title} />} */}
                        {item.title && <h3 className='p-5'>{item.title}</h3>}
                        {item.desc && <p className='p-5'>{item.desc}</p>}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
      );
};

export default Slides;
