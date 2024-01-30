import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

//해당 코드는 firebase객체를 직접 가져와서 설정값을 초기화한뒤
//초기화설정이 완료된 firebase객체 자체를 export
//원하는 컴포넌트에서 firebase객체를 import시 안쪽의 로그인, 로그아웃, 정보값 확인가능
const firebaseConfig = {
	apiKey: 'AIzaSyA9s7C8pnQjg_1dfuEGn-mTnp24j-F-ZWM',
	authDomain: 'next2024-470e3.firebaseapp.com',
	projectId: 'next2024-470e3',
	storageBucket: 'next2024-470e3.appspot.com',
	messagingSenderId: '216833372730',
	appId: '1:216833372730:web:f027b7bd960c834833fb03'
};

firebase.initializeApp(firebaseConfig);

export default firebase;
