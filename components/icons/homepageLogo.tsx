import Link from "next/link";
import Logo from "../icons/logo";
import Header from "../../styles/header/Header.module.scss";
import LogoStyles from "../../styles/icons/Icons.module.scss";
import style from "../../utils/styles";

type Props = {
	navigationOpen?: boolean;
};

const HomepageLogo: React.FC<Props> = ({ navigationOpen }) => {
	return (
		<div className={style([Header.homepageLogoToggle])}>
			<div>
				<Link href="/">
					<a
						className={style([
							LogoStyles.container,
							LogoStyles.homepageLogoWrapper,
							navigationOpen ? LogoStyles.navigationActive : "",
						])}>
						<div
							className={style([
								LogoStyles.cube,
								navigationOpen
									? LogoStyles.cubeNavigationActive
									: "",
							])}>
							<div>
								<div />
								<div />
								<div />
								<div />
								<div />
								<div />
							</div>
						</div>
						<div
							className={style([
								LogoStyles.container,
								LogoStyles.homePageLogo,
								navigationOpen
									? LogoStyles.navigationActive
									: "",
							])}>
							<svg
								data-name="Group 199"
								viewBox="0 0 129.363 19.044">
								<path
									data-name="Path 10760"
									d="M8.759 4.43c3.524 0 6.282 2.8 6.282 7.282s-2.783 7.332-6.282 7.332a5.012 5.012 0 0 1-4.392-2.19v1.986H0V0h4.367v6.645A5.035 5.035 0 0 1 8.759 4.43Zm-1.3 3.794a3.19 3.19 0 0 0-3.115 3.513 3.19 3.19 0 0 0 3.115 3.513 3.217 3.217 0 0 0 3.141-3.539 3.171 3.171 0 0 0-3.143-3.488Z"
									fill="currentColor"
								/>
								<path
									data-name="Path 10761"
									d="M23.824 19.044a6.979 6.979 0 0 1-7.354-7.307 7.033 7.033 0 0 1 7.406-7.307 7.019 7.019 0 0 1 7.405 7.307c0 4.506-3.269 7.307-7.457 7.307Zm0-3.768c1.557 0 3.013-1.146 3.013-3.539 0-2.419-1.43-3.539-2.962-3.539-1.584 0-2.962 1.12-2.962 3.539.001 2.393 1.328 3.539 2.911 3.539Z"
									fill="currentColor"
								/>
								<path
									data-name="Path 10762"
									d="m39.299 15.097-2.3 3.946h-4.724l4.7-7.256-4.826-6.951h4.9l2.732 3.921 2.3-3.921h4.724L42.03 11.99l4.9 7.052h-4.9Z"
									fill="currentColor"
								/>
								<path
									data-name="Path 10763"
									d="M68.256 11.33a2.577 2.577 0 0 0-2.732-2.877 2.576 2.576 0 0 0-2.731 2.877v7.714h-4.346V11.33a2.576 2.576 0 0 0-2.732-2.877 2.577 2.577 0 0 0-2.733 2.877v7.714h-4.366V4.837h4.366v1.782a5.034 5.034 0 0 1 4.162-1.935 5.326 5.326 0 0 1 4.852 2.648 5.735 5.735 0 0 1 4.8-2.648c3.524 0 5.8 2.24 5.8 6.059v8.3h-4.342Z"
									fill="currentColor"
								/>
								<path
									data-name="Path 10764"
									d="M82.148 19.044a6.979 6.979 0 0 1-7.355-7.307 7.033 7.033 0 0 1 7.406-7.307 7.02 7.02 0 0 1 7.406 7.307c.001 4.506-3.27 7.307-7.457 7.307Zm0-3.768c1.557 0 3.013-1.146 3.013-3.539 0-2.419-1.43-3.539-2.962-3.539-1.583 0-2.962 1.12-2.962 3.539 0 2.393 1.328 3.539 2.911 3.539Z"
									fill="currentColor"
								/>
								<path
									data-name="Path 10765"
									d="M97.342 4.43a5.235 5.235 0 0 1 4.392 2.164V0h4.366v18.84h-4.366v-2.037a4.933 4.933 0 0 1-4.392 2.241c-3.5 0-6.283-2.851-6.283-7.332s2.785-7.282 6.283-7.282Zm1.277 3.794a3.167 3.167 0 0 0-3.116 3.488 3.213 3.213 0 0 0 3.116 3.539c1.66 0 3.115-1.247 3.115-3.513s-1.455-3.515-3.115-3.515Z"
									fill="currentColor"
								/>
								<path
									data-name="Path 10766"
									d="M115.599 19.044c-4.187 0-7.2-2.8-7.2-7.307s2.962-7.307 7.2-7.307a6.705 6.705 0 0 1 7.1 7.078 11.144 11.144 0 0 1-.076 1.273h-9.883a2.638 2.638 0 0 0 2.707 2.724 2.323 2.323 0 0 0 2.273-1.375h4.647a6.657 6.657 0 0 1-6.768 4.914Zm-2.834-8.682h5.464a2.461 2.461 0 0 0-2.681-2.444 2.7 2.7 0 0 0-2.779 2.444Z"
									fill="currentColor"
								/>
								<path
									data-name="Path 10767"
									d="M124.997.204h4.366v18.84h-4.366Z"
									fill="currentColor"
								/>
							</svg>
						</div>
					</a>
				</Link>
			</div>
			<Logo navigationOpen={navigationOpen} />
		</div>
	);
};

export default HomepageLogo;
