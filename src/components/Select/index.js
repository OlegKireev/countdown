import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import styles from './Select.module.scss';
import PropTypes from 'prop-types';

const Select = ({items, onChange}) => {

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
			onSlideChangeTransitionEnd={(swiper) => onChange(swiper.realIndex)}
		>
			<div className={styles.target}></div>
			{items.map((second) => <SwiperSlide className={styles.Slide} key={second}>{second < 10 ? `0${second}` : second}</SwiperSlide>)}
		</Swiper>  
	);
};

Select.propTypes = {
	items: PropTypes.array,
	onChange: PropTypes.func,
};

export default Select;