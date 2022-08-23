import { useEffect, useRef, MouseEvent, useState } from "react";
import TextInput from "./inputs/text";
import TextareaInput from "./inputs/textarea";
import FileInput from "./inputs/attachment";
import form from "../../styles/forms/Form.module.scss";
import button from "../../styles/buttons/Button.module.scss";
import style from "../../utils/styles";
import { ApplicationValidate, FormErrorType } from "../../functions/validate";
import FormError from "./error.form";
import FormSuccess from "./success.form";
import { EventTargetType, FileValueType } from "../../_types";
import variations from "../../styles/variations/Variations.module.scss";

export type ApplicationType = {
	name: string;
	email: string;
	role: string;
	coverLetter: string;
	cv: FileValueType | null;
};

type Props = {
	role: string;
};

const ApplicationForm: React.FC<Props> = ({ role }) => {
	const [value, setValue] = useState<ApplicationType>({
		name: "",
		email: "",
		role: role,
		coverLetter: "",
		cv: null,
	});
	const [errors, setErrors] = useState<FormErrorType>({
		nameError: null,
		emailError: null,
		cvError: null,
	});
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const formSectionRef = useRef<null | HTMLDivElement>(null);

	useEffect(() => {
		if (formSectionRef.current) formSectionRef.current.scrollIntoView();
	}, []);

	const handleChange = (e: EventTargetType) => {
		const target = e.target;

		setValue((prevValues) => ({
			...prevValues,
			[target.name]: target.value,
		}));
	};

	const handleSubmit = async (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();

		const validation = ApplicationValidate(value);

		setErrors(validation.errors);
		setSuccess(null);

		if (validation.valid) {
			setLoading(true);

			const response = await fetch("/api/apply", {
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
				setValue({
					name: "",
					email: "",
					role: role,
					coverLetter: "",
					cv: null,
				});
			}

			setLoading(false);
		}
	};

	return (
		<form className={style([form.form])}>
			<TextInput
				name="name"
				label="Who are you?"
				value={value.name}
				placeholder="Your name"
				onChange={handleChange}
				error={errors.nameError}
			/>
			<TextInput
				name="email"
				label="How shall we contact you?"
				value={value.email}
				placeholder="Your email"
				onChange={handleChange}
				error={errors.emailError}
			/>
			<TextInput
				name="role"
				label="Role applied for"
				value={value.role}
				onChange={handleChange}
				readonly={true}
			/>
			<TextareaInput
				name="coverLetter"
				label="Cover letter / Anything else to add?"
				value={value.coverLetter}
				placeholder="Tell us about yourself"
				onChange={handleChange}
			/>
			<FileInput
				name="cv"
				label="Attach your CV"
				onChange={handleChange}
				error={errors.cvError}
			/>
			{error ? <FormError error={error} /> : null}
			{success ? <FormSuccess success={success} /> : null}
			<div className={style([form.submit, form.application])}>
				<p
					className={style([
						variations.grey,
						variations.grey,
						variations.flush,
					])}>
					Or send your CV to{" "}
					<a href="mailto:info@boxmodel.com">info@boxmodel.com</a>
				</p>
				<a
					className={style([
						button.button,
						button.standard,
						loading ? button.loading : "",
					])}
					onClick={handleSubmit}>
					Apply
				</a>
			</div>
		</form>
	);
};

export default ApplicationForm;
