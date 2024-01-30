import Head from 'next/head';
import type { NextPage } from 'next';
import Header from '@/components/Header';
import requests from '@/utils/request';
import { Movie } from '../../types';
import Banner from '@/components/Banner';
import List from '@/components/List';
import getData from '@/hooks/useAuth';
import Modal from '@/components/Modal';
import { useRecoilValue } from 'recoil';
import { modalState } from '@/recoil/globalAtom';

interface Props {
	original: Movie[];
	top: Movie[];
	sf: Movie[];
	drama: Movie[];
	fantasy: Movie[];
	comedy: Movie[];
	action: Movie[];
}

const Home: NextPage<Props> = props => {
	const { InitialLoading } = getData();
	const showModal = useRecoilValue(modalState);

	return (
		<div className='relative w-full h-screen overflow-x-hidden scrollbar-thin scrollbar-thumb-[red] scrollbar-track-[transparent]'>
			<Head>
				<title>NETFLIX</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='relative'>
				<Header />
				{InitialLoading.current && <Banner original={props.original} />}
				{Object.values(props).map((category, idx) => (
					<List key={idx} movies={category} title={Object.keys(props)[idx]} />
				))}
			</main>
			{showModal && <Modal />}
		</div>
	);
};

export const getServerSideProps = async () => {
	const [original, top, sf, drama, fantasy, comedy, action] = await Promise.all([
		fetch(requests.original).then(res => res.json()),
		fetch(requests.top).then(res => res.json()),
		fetch(requests.sf).then(res => res.json()),
		fetch(requests.drama).then(res => res.json()),
		fetch(requests.fantasy).then(res => res.json()),
		fetch(requests.comedy).then(res => res.json()),
		fetch(requests.action).then(res => res.json())
	]);
	return {
		props: {
			original: original.results,
			top_rated: top.results,
			sf: sf.results,
			drama: drama.results,
			fantasy: fantasy.results,
			comedy: comedy.results,
			action: action.results
		}
	};
};

export default Home;
