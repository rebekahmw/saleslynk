import { ChangeEvent, MouseEvent, useState } from "react";
import TextInput from "./inputs/text";
import form from "../../styles/forms/Form.module.scss";
import button from "../../styles/buttons/Button.module.scss";
import style from "../../utils/styles";
import { SignInErrorType, SignInValidate } from "../../functions/validate";
import FormError from "./error.form";
import FormSuccess from "./success.form";

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
	const [success, setSuccess] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

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
		setSuccess(null);

		if (validation.valid) {
			setLoading(true);

			const response = await fetch("/api/contact", {
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
				const result = await response.json();
				setSuccess(result.message);
				setValue({ email: "", password: "" });
			}

			setLoading(false);
		}
	};

	return (
		<div>
			<div>
				<div>
					<div>
						<form className={style([form.form])}>
							<TextInput
								name="email"
								label=""
								value={value.email}
								placeholder="Email Address"
								onChange={handleChange}
								error={errors.emailError}
							/>
							<TextInput
								name="password"
								value={value.email}
								placeholder="Password"
								onChange={handleChange}
								error={errors.emailError}
							/>

							{error ? <FormError error={error} /> : null}
							{success ? <FormSuccess success={success} /> : null}
							<div className={style([form.submit])}>
								<a
									className={style([
										button.button,
										button.standard,
										loading ? button.loading : "",
									])}
									onClick={handleSubmit}>
									Speak to Us
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
