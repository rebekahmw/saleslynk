import { SignInType } from "../components/forms/signin.form";

export const IsEmail = (email: string) => {
	const reg =
		/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	if (email) {
		if (reg.exec(email)) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
};

export type SignInErrorType = {
	emailError: string | null;
	passwordError: string | null;
};

export type FormErrorType = { [key: string]: string | null };

type ErrorType = {
	valid: boolean;
	errors: FormErrorType;
};

export const SignInValidate = (
	logInData: SignInType
): ErrorType & { errors: SignInErrorType } => {
	let valid = true;
	const errors: SignInErrorType = {
		emailError: null,
		passwordError: null,
	};
	if (!logInData.email) {
		valid = false;
		errors.emailError = "Email is required";
	} else if (!IsEmail(logInData.email)) {
		valid = false;
		errors.emailError = "A valid email is required";
	}
	if (!logInData.password) {
		valid = false;
		errors.passwordError = "Password is required";
	}

	return {
		valid,
		errors,
	};
};
