import { useState,useEffect, useRef } from 'react';


import Loading from '../Components/Loading';
import Login from "../Components/Login"
import Register from "../Components/Register"
import HaveLogin from '../Components/HaveLogin';
import ForgetPassword from '../Components/ForgetPassword';



const LoginPage =({isLogin, memberName,setMemberName, setIsLogin, setSelectAppear, setMemberMail,setCsrfToken, setSessionId, current,  setCurrent}) =>{
	
	const [loginOrRegister,setLoginOrRegister] = useState("login")
	const [loginOrForgetPassword, setLoginOrForgetPassword] = useState("login")
	const modal =  useRef(null);
	useEffect(() => {
		setSelectAppear(false)
		setCurrent("login")
	}, []);
	return (
		<>
		{
		isLogin
		?
		<HaveLogin memberName={memberName}/>
		:
		<>
		<div className="formPage">
			{loginOrRegister === "login" 
				? 
				loginOrForgetPassword === "login"?
					<Login setMemberName={setMemberName} 
							setIsLogin={setIsLogin} 
							setLoginOrRegister={setLoginOrRegister} 
							setMemberMail={setMemberMail} 
							setLoginOrForgetPassword={setLoginOrForgetPassword}
							modal={modal}
							/>
					:
					<ForgetPassword setLoginOrForgetPassword={setLoginOrForgetPassword} modal={modal}/>
				:
				<Register setLoginOrRegister={setLoginOrRegister} modal={modal}></Register>
			}
		</div>
    	<Loading modalRef={modal}/>
		</>
		}
		</>
		)
}
export default LoginPage;