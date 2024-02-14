"use client";
import Image from "next/image";

import 'swiper/css';
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';



export default function TaskkiteShowcase() {
	return <Swiper effect="coverflow" coverflowEffect={{ rotate: 30, slideShadows: false }} modules={[Autoplay, EffectCoverflow]} autoplay={true} slidesPerView={1}>
		{[1, 2, 3, 4, 5].map((n) => <SwiperSlide key={n}><Image width={1920 / 4} height={955 / 4} src={"/taskkite/" + n + ".png"} alt={"Taskkite image #" + n} /></SwiperSlide>)}
	</Swiper>
}

