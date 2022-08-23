import layout from '../../styles/layout/Layout.module.scss';
import style from "../../utils/styles"

type Props = {
	children: React.ReactChild
}

const ErrorWrapper: React.FC<Props> = ({ children }) => {

	return (
		<div className={style([layout.section, layout["section--black"], layout["section--full"], layout["flexContainer"], layout["flexContainer--col"], layout["flexContainer--justifyCenter"]])}>
			<div className={style([layout.container])}>
				{children}
			</div>
		</div>
	)
}

export default ErrorWrapper;