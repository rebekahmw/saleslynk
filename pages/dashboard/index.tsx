import type { NextPage } from "next";
import style from "../../utils/styles";
import dashboard from "../../styles/dashboard/Dashboard.module.scss";

const Dashboard: NextPage = () => {
	return (
		<div className={style([dashboard.container])}>
            <h1>Hello</h1>
			<div className={style([dashboard.data])}>
				<div className={style([dashboard.sideColumn, dashboard.left, dashboard.mobile])}>column</div>
				<div className={style([dashboard.middleInfo, dashboard.mobile])}>middle stuff</div>
				<div className={style([dashboard.sideColumn, dashboard.right])}>column</div>
			</div>
		</div>
	);
};

export default Dashboard;
