import type { NextPage } from "next";
import Image from "next/image";
import SignIn from "../components/forms/signin.form";
import video from "../public/assets/video.png"

const Saleslynk: NextPage = () => {
	return (
		<div>
			<h1>Saleslynk</h1>
            <div>
                <SignIn />
                <div>
                    <Image
                        src={video}
                        width="400px"
                        height="400px"
                        alt="video"
                        layout="responsive"
                    />
                </div>
            </div>
		</div>
	);
};

export default Saleslynk;
