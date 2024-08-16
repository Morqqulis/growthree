// const sliderItemsData = {
//    items: [
//       {
//          id: 1,
//          title: 'GROW',
//          description:
//             "As an enviropment charity, we're on a mission to make it simple for everyone to help the enviropment by planting each one tree!",
//          images: [``]
//       },
//       {
//          id: 2,
//          title: 'LIVE',
//          description:
//             "As an enviropment charity, we're on a mission to make it simple for everyone to help the enviropment by planting each one tree!",
//          images: []
//       },
//       {
//          id: 3,
//          title: 'WOOD',
//          description:
//             "As an enviropment charity, we're on a mission to make it simple for everyone to help the enviropment by planting each one tree!",
//         //  imagePath: `/slides/`
//       }
//    ],
//    itemStyles: ['swiper-slide !ease-linear duration-200 overflow-hidden'],
//    childrenStyles: [`slider__layer absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform`]
// }

export const headerNavigation = [
	{
		id: 1,
		title: 'Home',
		link: '/',
	},
	{
		id: 2,
		title: 'Info',
		link: '/info',
	},
	{
		id: 3,
		title: 'Contact',
		link: '/contact',
	},
]

export const sliderData = {
	items: [
		{
			id: 1,
			title: ['G', 'R', 'O', 'W'],
			description:
				"As an enviropment charity, we're on a mission to make it simple for everyone to help the enviropment by planting each one tree!",
			images: [
				{
					id: 1,
					path: '/slides/slide-1-layer-back.jpg',
					parallaxValue: '35%',
				},
				{
					id: 2,
					path: '/slides/slide-1-layer-middle.png',
					parallaxValue: '25%',
				},
				{
					id: 3,
					path: '/slides/slide-1-layer-front.png',
					parallaxValue: '14%',
				},
			],
		},
		{
			id: 2,
			title: ['L', 'I', 'V', 'E'],
			description:
				"As an enviropment charity, we're on a mission to make it simple for everyone to help the enviropment by planting each one tree!",
			images: [
				{
					id: 1,
					path: '/slides/slide-2-layer-back.jpg',
					parallaxValue: '35%',
				},
				{
					id: 2,
					path: '/slides/slide-2-layer-middle.png',
					parallaxValue: '25%',
				},
				{
					id: 3,
					path: '/slides/slide-2-layer-front.png',
					parallaxValue: '15%',
				},
			],
		},
		{
			id: 3,
			title: ['W', 'O', 'O', 'D'],
			description:
				"As an enviropment charity, we're on a mission to make it simple for everyone to help the enviropment by planting each one tree!",
			images: [
				{
					id: 1,
					path: '/slides/slide-3-layer-back.jpg',
					parallaxValue: '35%',
				},
				{
					id: 2,
					path: '/slides/slide-3-layer-middle.png',
					parallaxValue: '25%',
				},
				{
					id: 3,
					path: '/slides/slide-3-layer-front.png',
					parallaxValue: '15%',
				},
			],
		},
	],
}
