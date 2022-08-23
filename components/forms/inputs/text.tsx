import { ChangeEvent } from "react";
import form from "../../../styles/forms/Form.module.scss";
import style from "../../../utils/styles";

export type Props = {
	name: string;
	value: string;
	label?: string;
	placeholder?: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
	error?: string | null;
	readonly?: boolean;
};

const TextInput: React.FC<Props> = ({
	name,
	value,
	label,
	placeholder,
	onChange,
	onBlur,
	error,
	readonly,
}) => {
	return (
		<div
			className={style([form.formItem, error ? form.formItemError : ""])}>
			<label className={style([form.label])}>{label}</label>
			<input
				type="text"
				name={name}
				value={value}
				onChange={onChange}
				onBlur={onBlur || undefined}
				placeholder={placeholder}
				readOnly={readonly ? true : false}
			/>
			<div className={style([form.formItemBorder])} />
			{error ? (
				<span className={style([form.error])}>{error}</span>
			) : null}
		</div>
	);
};

export default TextInput;
