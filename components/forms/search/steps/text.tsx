import { ChangeEvent } from "react";
import form from "../../../styles/forms/Form.module.scss";
import style from "../../../../utils/styles";

export type Props = {
	name: string;
	value: string;
	label?: string;
	type: string;
	placeholder?: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
	error?: string | null;
	readonly?: boolean;
};

const TextInput: React.FC<Props> = ({ ...props }) => {
	return (
		<div
			className={style([form.formItem, props.error ? form.formItemError : ""])}>
			<input
				className={style([form.formInput])}
				type={props.type}
				name={props.name}
				value={props.value}
				onChange={props.onChange}
				onBlur={props.onBlur || undefined}
				placeholder={props.placeholder}
				readOnly={props.readonly ? true : false}
			/>
			<div className={style([form.formItemBorder])} />
			{props.error ? (
				<span className={style([form.error])}>{props.error}</span>
			) : null}
		</div>
	);
};

export default TextInput;
