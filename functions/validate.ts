import { ApplicationType } from "../components/forms/application.form";
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

export type ContactErrorType = {
	nameError: string | null;
	emailError: string | null;
	contactError: string | null;
};

export type SignInErrorType = {
	emailError: string | null;
	passwordError: string | null;
};

export type ApplicationErrorType = {
	nameError: string | null;
	emailError: string | null;
	cvError: string | null;
};

export type FormErrorType = { [key: string]: string | null };

type ErrorType = {
	valid: boolean;
	errors: FormErrorType;
};

export const SignInValidate = (
	logInData: SignInType
): ErrorType & { errors: ContactErrorType } => {
	let valid = true;
	const errors: ContactErrorType = {
		nameError: null,
		emailError: null,
		contactError: null,
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
		errors.contactError = "Password is required";
	}

	return {
		valid,
		errors,
	};
};

export const ApplicationValidate = (
	applicationData: ApplicationType
): ErrorType & { errors: ApplicationErrorType } => {
	let valid = true;
	const errors: ApplicationErrorType = {
		nameError: null,
		emailError: null,
		cvError: null,
	};
	if (!applicationData.name) {
		valid = false;
		errors.nameError = "Name is required";
	}
	if (!applicationData.email) {
		valid = false;
		errors.emailError = "Email is required";
	} else if (!IsEmail(applicationData.email)) {
		valid = false;
		errors.emailError = "A valid email is required";
	}
	if (!applicationData.cv) {
		valid = false;
		errors.cvError = "Your CV is required";
	}
	return {
		valid,
		errors,
	};
};
