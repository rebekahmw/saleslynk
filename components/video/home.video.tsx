import type { NextPage } from "next";
import Image from "next/image";
import style from "../../utils/styles";
import home from "../../styles/home/Home.module.scss";

type Props = {
    src: string
}

const Video: NextPage<Props> = ({ ...props }) => {
	return (
        <div className={style([home.container])}>
            <Image
                src={props.src}
                width="400px"
                height="400px"
                alt="video"
                layout="responsive"
            />
        </div>
	);
};

export default Video;
