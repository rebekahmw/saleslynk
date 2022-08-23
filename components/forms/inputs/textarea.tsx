import { ChangeEvent } from "react";
import form from "../../../styles/forms/Form.module.scss";
import style from "../../../utils/styles";

export type Props = {
	name: string;
	value: string;
	label: string;
	placeholder?: string;
	onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	error?: string | null;
};

const TextareaInput: React.FC<Props> = ({
	name,
	value,
	label,
	placeholder,
	onChange,
	error,
}) => {
	return (
		<div
			className={style([form.formItem, error ? form.formItemError : ""])}>
			<label className={style([form.label])}>{label}</label>
			<textarea
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
			<div className={style([form.formItemBorder])} />
			{error ? (
				<span className={style([form.error])}>{error}</span>
			) : null}
		</div>
	);
};

export default TextareaInput;
