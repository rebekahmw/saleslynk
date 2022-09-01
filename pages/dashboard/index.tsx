import type { NextPage } from "next";
import style from "../../utils/styles";
import dashboard from "../../styles/dashboard/Dashboard.module.scss";
import WeatherForecast from "../../modules/weather/weather";

const Dashboard: NextPage = () => {
	return (
		<div className={style([dashboard.container])}>
			<div className={style([dashboard.data])}>
				<div className={style([dashboard.sideColumn, dashboard.left, dashboard.mobile])}>
					left column
				</div>
				<div className={style([dashboard.middleInfo, dashboard.mobile])}>
					middle stuff
					<WeatherForecast/>
				</div>
				<div className={style([dashboard.sideColumn, dashboard.right])}>column</div>
			</div>
		</div>
	);
};

export default Dashboard;
