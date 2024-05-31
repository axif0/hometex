import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import styles from './style/PromoBanner.module.css'; // Import CSS module

const PromoBanner = () => {
  return (
    <div className={styles.promoBannerContainer}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
        className={styles.promoSwiper}
      >
        {/* <SwiperSlide>
          <a href="#">
            <img
              src="https://www.edrawsoft.com/templates/images/horizontal-promotion-banner.png"
              alt="Promo Animation"
              className={styles.bannerImage}
            />
            <div className={`${styles.bannerText} ${styles.animateFadeIn}`}>Special Offer 1</div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img
              src="https://customlytics.com/wp-content/uploads/2020/09/March19SaleExtended.gif"
              alt="Promo Image 2"
              className={styles.bannerImage}
            />
            <div className={styles.bannerText}>Exclusive Deal</div>
          </a>
        </SwiperSlide> */}
        <SwiperSlide>
          <a href="#">
            <img
              src="https://sanfe.in/cdn/shop/collections/Sanfe-b1g1-banner.gif?v=1662710970"
              alt="Promo Image 2"
              className={styles.bannerImage}
            />
            <div className={styles.bannerText}>Exclusive Deal</div>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PromoBanner;
