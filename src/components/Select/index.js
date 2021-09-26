import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import styles from './Select.module.scss';

const Select = () => {
	const seconds = new Array(60).fill('').map((_,i) => i);

	return (
		<Swiper
			className={styles.Swiper}
			direction='vertical'
			slidesPerView={5}
			spaceBetween={15}
			loop
			loopAdditionalSlides={60}
			centeredSlides
			freeMode
			freeModeSticky
			freeModeMomentumBounceRatio={5}
			freeModeMomentumRatio={0.75}
			// slideActiveClass={styles.SlideActive}
			onSlideChange={(swiper) => console.log(swiper.realIndex)}
			// onSwiper={(swiper) => console.log(swiper)}
		>
			<div className={styles.target}></div>
			{seconds.map((second) => <SwiperSlide className={styles.Slide} key={second}>{second < 10 ? `0${second}` : second}</SwiperSlide>)}
		</Swiper>
    
	);
};

export default Select;