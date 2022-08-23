import { ChangeEvent, useEffect, useState } from "react";
import form from "../../../styles/forms/Form.module.scss";
import style from "../../../utils/styles";
import { EventTargetType, FileValueType } from "../../../_types";

export type Props = {
	name: string;
	label: string;
	onChange: (e: EventTargetType) => void;
	error?: string | null;
};

const FileInput: React.FC<Props> = ({
	name,
	label,
	onChange,
	error: inputError,
}) => {
	const [fileName, setFileName] = useState<string | null>(null);
	const [error, setError] = useState(inputError);

	useEffect(() => {
		setError(inputError);
	}, [inputError]);

	const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
		const target = e.target;
		if (target.files) {
			const eventFile = target.files[0];

			const fileData = new FormData();
			fileData.append("file", eventFile);
			fileData.append("fileType", eventFile.type);

			setFileName(target.value.replace(/^.*[\\\/]/, ""));

			await toBase64(eventFile)
				.then((res: any) => {
					// ToDo type Blob

					onChange({
						target: {
							name,
							value: {
								content: res.split(",")[1],
								filename: eventFile.name,
								type: eventFile.type,
								disposition: "attachment",
							} as unknown as string,
						},
					});
				})
				.catch(() => setError("Error processing file"));
		}
	};

	const toBase64 = (file: File) =>
		new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);
		});

	return (
		<div className={style([form.formItem])}>
			<label className={style([form.label])}>{label}</label>
			<div className={style([form.fileWrapper])}>
				<input type="file" name={name} onChange={handleChange} />
				<div className={style([form.fileTrigger])}>
					<span>{fileName}</span>
				</div>
			</div>
			{error ? (
				<span className={style([form.error])}>{error}</span>
			) : null}
		</div>
	);
};

export default FileInput;
