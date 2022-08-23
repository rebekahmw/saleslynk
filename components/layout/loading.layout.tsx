import Loading from "../../styles/layout/Loading.module.scss";
import LogoStyles from "../../styles/icons/Icons.module.scss";
import style from "../../utils/styles";

const LoadingLayout = () => {
	return (
		<div className={Loading.container}>
			<div className={style([LogoStyles.cube])}>
				<div>
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
				</div>
			</div>
		</div>
	);
};

export default LoadingLayout;
