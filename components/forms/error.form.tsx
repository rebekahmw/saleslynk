import form from "../../styles/forms/Form.module.scss";
import style from "../../utils/styles"

type Props = {
	error: string;
}

const FormError: React.FC<Props> = ({ error }) => (
	<p className={style([form.error])}>{error}</p>
);

export default FormError;
