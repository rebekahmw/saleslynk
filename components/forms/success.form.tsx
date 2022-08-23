import form from "../../styles/forms/Form.module.scss";
import style from "../../utils/styles"

type Props = {
	success: string;
}

const FormSuccess: React.FC<Props> = ({ success }) => (
	<p className={style([form.success])}>{success}</p>
);

export default FormSuccess;
