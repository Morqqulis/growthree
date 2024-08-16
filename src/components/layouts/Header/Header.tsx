'use client'
import { headerNavigation } from '#static/data'
import Image from 'next/image'
import Link from 'next/link'
import HeaderMenu from './HeaderMenu'
import { useEffect, useState } from 'react'

const Header = () => {
	const [menuActive, setMenuActive] = useState(false)

	useEffect(() => {
		if (menuActive) {
			document.documentElement.classList.add('menu-open')
		} else {
			document.documentElement.classList.remove('menu-open')
		}

		return () => {
			document.documentElement.classList.remove('menu-open')
		}
	}, [menuActive])

	return (
		<header className={`fixed left-0 top-0 z-50 w-full py-[1.5em] sm:py-[2.2em] lg:py-[3.2em]`}>
			<div className='container'>
				<nav className={`flex items-center justify-between gap-2 lg:gap-10`}>
					<Link className={'block w-[15.5em] duration-[1.3s] hover:scale-125'} href={'/'}>
						<Image
							className={`h-auto min-w-[11.5em] lg:min-w-[15.5em]`}
							src={'/logo.svg'}
							alt={'logo'}
							width={0}
							height={0}
                            priority
						/>
					</Link>
					<div className={`flex flex-1 items-center justify-end gap-2`}>
						<HeaderMenu active={menuActive} />
						<button className={`button button_top hidden sm:block`} type={'button'} aria-label={'button'}>
							Plant Now
						</button>
					</div>
					<button
						className={`relative ml-2 flex h-[30px] min-w-[2em] flex-col justify-center gap-[.4em] md:hidden`}
						type={'button'}
						aria-label={'Hamburger menu button'}
						onClick={() => setMenuActive(!menuActive)}>
						<span
							className={`h-[2px] w-full rounded-[10em] bg-cgray duration-300 ${menuActive && 'absolute top-1/2 -translate-y-1/2 rotate-45'}`}></span>
						<span
							className={`h-[2px] w-full rounded-[10em] bg-cgray duration-300 ${menuActive && 'absolute scale-0'}`}></span>
						<span
							className={`h-[2px] w-full rounded-[10em] bg-cgray duration-300 ${menuActive && 'absolute bottom-[45%] -translate-y-1/2 -rotate-45'}`}></span>
					</button>
				</nav>
			</div>
		</header>
	)
}

export default Header
