import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import TextInput from "./search/steps/text";
import form from "../../styles/forms/Form.module.scss";
import button from "../../styles/buttons/Button.module.scss";
import style from "../../utils/styles";
import { SignInErrorType, SignInValidate } from "../../functions/validate";
import FormError from "./error.form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import Logo from "../icons/logoDark";

export type SignInType = {
	email: string;
	password: string;
};

const SignIn = () => {
	const [value, setValue] = useState<SignInType>({
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState<SignInErrorType>({
		emailError: null,
		passwordError: null,
	});
	const [error, setError] = useState<string | null>(null);
	const [link, setLink] = useState<boolean>(false);

	const router = useRouter();

	useEffect(() => {
		// redirect to dashboard if user is authenticated
		if (link === true) {
			router.push('/dashboard');
		}
	}, [link]);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const target = e.target;

		setValue((prevValues) => ({
			...prevValues,
			[target.name]: target.value,
		}));
	};

	const handleSubmit = async (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();

		const validation = SignInValidate(value);
		// setErrors(validation.errors);

		if (validation.valid) {

			const response = await fetch("/api/signin", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(value),
			});

			if (!response.ok) {
				const result = await response.json();
				setError(result.message);
			} else {
				setValue({ email: "", password: "" });
				router.push('/search');
			}
		}
	};

	return (
		<div className={style([form.container])}>
			<Logo />
			<div className={style([form.form])}>
				<h2 style={{ textAlign: "center" }}>Please sign in to your account</h2>
				<div className={style([form.orangeBlock])}></div>
				<form>
					<div className={style([form.inputField, form.top])}>
						<FontAwesomeIcon icon={faUser} />
						<TextInput
							name="email"
							type="email"
							value={value.email}
							placeholder="Email Address"
							onChange={handleChange}
							error={errors.emailError}
						/>
					</div>
					<div className={style([form.inputField])}>
						<FontAwesomeIcon icon={faLock} />
						<TextInput
							name="password"
							type="password"
							value={value.password}
							placeholder="Password"
							onChange={handleChange}
							error={errors.emailError}
						/>
					</div>

					<div className={style([button.submit])}>
						<a
							className={style([
								button.button,
								button.standard,
							])}
							onClick={handleSubmit}
						>
							Sign In
						</a>
					</div>
					{error ? <FormError error={error} /> : null}
				</form></div>
		</div>
	);
};

export default SignIn;