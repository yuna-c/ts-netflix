import Image from 'next/image';
import { Movie } from '../../types';
import { useState, useEffect } from 'react';
import { baseURL } from '@/url';
import type { NextPage } from 'next';

interface Props {
	original: Movie[];
}

const Banner: NextPage<Props> = ({ original }: Props) => {
	const [Movie, setMovie] = useState<Movie | null>(null);
	console.log(Movie);

	useEffect(() => {
		const randomNum = Math.floor(Math.random() * original.length);
		setMovie(original[randomNum]);
	}, [original]);

	return (
		<section className='h-screen px-4 pb-20 pt-40 flex flex-col space-y-4'>
			{Movie && (
				<>
					{/* pic Frame */}
					<div className='absolute top-0 left-0 z-[1] w-full h-full'>
						<Image
							src={`${baseURL}original${Movie.backdrop_path}`}
							alt={`${Movie.name || Movie.original_title}`}
							fill
							priority
							quality={70}
							sizes='(max-width:768px) 100vw, (max-width:1200) 70vw, 100vw'
							className='object-cover'
						/>
					</div>

					{/* gradient layer */}
					<div className='absolute top-0 left-0 w-full h-full z-[2] bg-gradient1'></div>

					{/* title */}
					<h1 className='relative z-[3] text-2xl font-bold md:text-4xl lg:text-7xl'>{Movie?.title || Movie?.name}</h1>

					{/* overview */}
					<p className='relative z-[3] text-xs md:text-lg lg:text-2xl'>{Movie?.overview}</p>
				</>
			)}
		</section>
	);
};

export default Banner;
