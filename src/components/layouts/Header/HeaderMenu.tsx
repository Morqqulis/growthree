'use client'
import { headerNavigation } from '#static/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const HeaderMenu = ({ active }: { active: boolean }) => {
	const path = usePathname()

	return (
		<ul
			className={`absolute top-[110px] z-10 flex h-[calc(100vh-110px)] w-[70vw] flex-col items-end gap-1 overflow-y-auto rounded-[8em] rounded-tl-none border-[.2667vw] border-cgreen bg-[rgba(24,27,22,0.2)] px-[2%] pb-10 pt-[5%] transition-all duration-[.8s] ease-in will-change-auto sm:w-1/2 md:static md:h-auto md:flex-row md:items-center md:justify-end md:overflow-visible md:rounded-none md:border-none md:bg-transparent md:p-0 md:text-center ${active ? 'right-0' : '-right-full'}`}>
			{headerNavigation.map(item => (
				<li className={`block w-full text-center md:w-auto`} key={item.id}>
					<Link
						className={`headerLink block w-full py-10 md:py-0 ${path === item.link ? 'text-white before:scale-100 after:scale-100' : 'before:scale-0 after:scale-0'}`}
						href={{ pathname: item.link }}>
						{item.title}
					</Link>
				</li>
			))}
			<li className={`mt-5 w-full md:hidden`}>
				<button className={`button button_top w-full py-10`}>Plant Now</button>
			</li>
		</ul>
	)
}

export default HeaderMenu
