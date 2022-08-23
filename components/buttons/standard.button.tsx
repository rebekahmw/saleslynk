import Link from "next/link";
import button from "../../styles/buttons/Button.module.scss";
import style from "../../utils/styles";

type Props = {
	href: string;
	children: React.ReactChild;
};

const StandardButton: React.FC<Props> = ({ href, children }) => {
	if (href) {
		return (
			<Link href={href}>
				<a className={style([button.button, button.standard])}>
					{children}
				</a>
			</Link>
		);
	} else {
		return (
			<a className={style([button.button, button.standard])}>
				{children}
			</a>
		);
	}
};

export default StandardButton;
