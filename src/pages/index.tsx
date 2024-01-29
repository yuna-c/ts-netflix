import Head from 'next/head';
import type { NextPage } from 'next';
import Header from '@/components/Header';
import requests from '@/utils/request';
import { Movie } from '../../types';
import Banner from '@/components/Banner';

interface Props {
	original: Movie[];
	top: Movie[];
	sf: Movie[];
	drama: Movie[];
	fantasy: Movie[];
	comedy: Movie[];
	action: Movie[];
}

//기존 Nexp Page 컴포넌트에 적용할 타입을 Next에 자체제공되고 있는 NextPage을 가져와서 페이지 타입 지정
//해당 pageType을 우리가 만든것이 아니기 때문에 해당페이지에 전달되는 props의 type을 제네릭으로 지정
const Home: NextPage<Props> = (props: Props) => {
	return (
		<div className='relative h-screen'>
			<Head>
				<title>NETFLIX</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
			<main className='relative'>
				<Banner original={props.original} />
			</main>
		</div>
	);
};

export const getServerSideProps = async () => {
	//Promie.all([promise, promise]).then(()=> 배열에 인수로 전달된 모든 promise객체의 상태가 fullfiled, rejected가 되야지만 이곳 then구문이 동기적으로 실행됨)
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
//SSR(Server Side Rendering) (페이지 접속할때마다 서버쪽에서 매번새로운 데이터를 prerender후 재활용)
//ISR(Imcremental Static Regeneration) (일정주기마다 서버에서 데이터 refetching한 데이터를 prerender 후 재활용)
//SSG(Static Sited Generation) (처음 빌드시 서버에서 한번만 prerender 재활용)
