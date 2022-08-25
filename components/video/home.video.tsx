import type { NextPage } from "next";
import Image from "next/image";
import style from "../../utils/styles";
import video from "../../styles/video/Video.module.scss";

type Props = {
    src: string
}

const Video: NextPage<Props> = ({ ...props }) => {
	return (
        <div className={style([video.container])}>
            <Image
                src={props.src}
                width="100%"
                height="100%"
                alt="video"
                layout="responsive"
            />
        </div>
	);
};

export default Video;
