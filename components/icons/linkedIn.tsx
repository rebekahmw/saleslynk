import LogoStyles from "../../styles/icons/Icons.module.scss";
import style from "../../utils/styles";

type Props = {
	small?: boolean;
};

const LinkedInIcon: React.FC<Props> = ({ small }) => {
	return (
		<div
			className={style([
				LogoStyles.linkedIn,
				small ? LogoStyles["linkedIn--small"] : "",
			])}>
			<svg viewBox="0 0 20 20">
				<path
					data-name="Path 10875"
					d="M18.519 0H1.476A1.467 1.467 0 0 0 0 1.442v17.113a1.467 1.467 0 0 0 1.476 1.443h17.043A1.47 1.47 0 0 0 20 18.555V1.442A1.469 1.469 0 0 0 18.519 0ZM5.932 17.041H2.966V7.497h2.966ZM6.17 4.473a1.728 1.728 0 0 1-1.719 1.72 1.72 1.72 0 1 1 1.72-1.72Zm10.872 12.568h-2.961V12.4c0-1.107-.02-2.531-1.541-2.531-1.543 0-1.78 1.206-1.78 2.451v4.721H7.797V7.497h2.845v1.3h.04a3.121 3.121 0 0 1 2.807-1.542c3 0 3.557 1.975 3.557 4.546Z"
					fill="currentColor"
				/>
			</svg>
		</div>
	);
};

export default LinkedInIcon;
