import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

//initializeApp(configOpt) : firebase인증객체 생성시 필요한 초기정보값 등록
//getApp : 초기 firebase객체를 생성
//getApps : firebase생성된 서비스앱의 배열을 반환

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE,
	authDomain: 'next2024-a16bc.firebaseapp.com',
	projectId: 'next2024-a16bc',
	storageBucket: 'next2024-a16bc.appspot.com',
	messagingSenderId: '378876527303',
	appId: '1:378876527303:web:5a2b882b6560ba7d1674e2'
};

//초기에 firebase앱생성시 기존사용되고 있는 앱이 있다면 있는 앱을 불러오고 없다면 처음 초기세팅시작
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(); //반환된 인증정보객체를 반환

//app객체와 인증정보 객체 export
export default app;
export { auth };
