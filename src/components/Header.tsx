import Image from 'next/image';
import logo from '@/public/logo.svg';

const Header = () => {
	return (
		<header className='w-full'>
			<div className='flex items-center space-x-2 '>
				<h1>
					<Image src={logo} alt='netflix' width={100} height={100} className='cursor-pointer' />
				</h1>

				{/* tailwind: 반응형 (mobile first) */}
				<ul className='space-x-r2 hidden md:flex'>
					<li className='headerLink'>menu</li>
					<li className='headerLink'>menu</li>
					<li className='headerLink'>menu</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
