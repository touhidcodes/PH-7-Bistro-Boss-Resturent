import React, { useEffect, useState } from "react";
import {
	loadCaptchaEnginge,
	LoadCanvasTemplate,
	validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
	const [disabled, setDisabled] = useState(true);
	useEffect(() => {
		loadCaptchaEnginge(2);
	}, []);

	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
	};

	const handleCaptcha = (event) => {
		// console.log(event.target.value);

		if (event.target.value == "") {
			setDisabled(true);
		}
		if (validateCaptcha(event.target.value, false) == true) {
			setDisabled(false);
		}
	};
	return (
		<div className='hero min-h-screen bg-base-200 px-20'>
			<div className='hero-content flex-col lg:flex-row'>
				<div className='text-center lg:text-left'>
					<h1 className='text-5xl font-bold'>Login now!</h1>
					<p className='py-6'>
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
				</div>
				<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
					<form className='card-body' onSubmit={handleLogin}>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Email</span>
							</label>
							<input
								name='email'
								type='email'
								placeholder='Your Email'
								className='input input-bordered'
								required
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Password</span>
							</label>
							<input
								name='password'
								type='password'
								placeholder='Password'
								className='input input-bordered'
								required
							/>
							<label className='label'>
								<a href='#' className='label-text-alt link link-hover'>
									Forgot password?
								</a>
							</label>
						</div>
						<div className='form-control'>
							<LoadCanvasTemplate />
							<input
								name='captcha'
								type='captcha'
								placeholder='Enter Captcha'
								className='input input-bordered'
								required
								onChange={handleCaptcha}
							/>
						</div>
						<div className='form-control mt-6'>
							<input
								type='submit'
								value='Login'
								className='btn btn-primary'
								disabled={disabled}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
