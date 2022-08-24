import type { NextPage } from "next";
import SignIn from "../components/forms/signin.form";
import Video from "../components/video/home.video";
import style from "../utils/styles";
import home from "../styles/home/Home.module.scss";

const Saleslynk: NextPage = () => {
	return (
		<div className={style([home.container])}>
            <SignIn />
            <Video src="/assets/video.png"/>
		</div>
	);
};

export default Saleslynk;
