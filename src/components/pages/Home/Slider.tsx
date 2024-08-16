'use client'

import { sliderData } from '#static/data'
import Image from 'next/image'
import { Mousewheel, Parallax } from 'swiper/modules'
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/mousewheel'
import 'swiper/scss/parallax'
import { SwiperOptions } from 'swiper/types'

const Slider = () => {
	const slide = useSwiperSlide()

	const swiperOptions: SwiperOptions = {
		modules: [Mousewheel, Parallax],
		slidesPerView: 1,
		parallax: true,
		direction: 'vertical',
		mousewheel: true,
		speed: 2000,
		loop: true,
		observer: true,
		observeParents: true,
	}

	return (
		<section className={`h-full bg-transparent`}>
			<Swiper className={`h-full`} {...swiperOptions}>
				{sliderData.items.map(item => (
					<SwiperSlide className={`relative h-screen overflow-hidden py-20`} key={item.id}>
						{({ isActive }) => (
							<div
								className={`absolute inset-0 duration-[2000ms] ease-linear ${isActive ? 'scale-125' : 'scale-100'}`}>
								{item.images.map(image => (
									<Image
										className={`object-cover will-change-transform`}
										key={image.id}
										src={image.path}
										data-swiper-parallax={image.parallaxValue}
										alt={'slide'}
										fill
									/>
								))}

								<div
									className={`pointer-events-none relative z-10 flex h-full flex-col items-center justify-center gap-5 text-center leading-[1]`}>
									<h2 className={`relative flex text-[18vw] font-black uppercase`}>
										{item.title.map((char, i: any) => (
											<span
												className={`relative right-[calc(var(--index)*-1.65)] ml-[calc(var(--index)*-1.65)] opacity-100 transition-[transform,opacity] will-change-transform md:right-[calc(var(--index)*-2.65)] md:ml-[calc(var(--index)*-2.65)] ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-[2.5em] opacity-0'}`}
												key={i}
												style={{
													textShadow: '2.6667vw 0 4.6667vw rgba(0 0 0 / .5)',
													// marginLeft: `calc(var(--index)*-2.65)`,
													// right: `calc(var(--index)*-2.65)`,
													zIndex: -i,
													transitionDuration: `${1 + i * 0.4}s`,
												}}>
												{char}
											</span>
										))}
									</h2>
									<p
										className={`relative -mt-2.5 inline-block max-w-[35vw] text-xs font-semibold leading-[1.4] opacity-0 transition-[transform,opacity] duration-[1.2s] will-change-[transform,opacity] sm:text-sm md:text-base ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-[2.5em] opacity-0'}`}>
										{item.description}
									</p>
									<button
										className={`button pointer-events-auto relative top-0 border-cgreen px-[3.5em] py-[1.6em] text-[.5em] hover:scale-125 hover:border-[1.5px] hover:bg-transparent`}
										type={'button'}
										aria-label={'Getting started button'}>
										Plant a tree now
									</button>
								</div>
							</div>
						)}
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default Slider
