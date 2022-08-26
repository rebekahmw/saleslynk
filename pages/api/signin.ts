import type { NextApiRequest, NextApiResponse } from "next";
import { SignInType } from "../../components/forms/signin.form";

type HTTPStatus = 200 | 204 | 400 | 401 | 403 | 404 | 500;

export type Response = {
	ok: boolean;
	status: HTTPStatus;
	message?: string;
};

const SignInHandler = (req: NextApiRequest, res: NextApiResponse<Response>) => {
	const { body }: { body: SignInType } = req;

	if (body.email === "test@test.com" && body.password === "test") {
		res.redirect(307, "/dashboard");
	} else {
		return res.status(401).json({
			ok: false,
			status: 401,
			message: "Login details unknown.",
		});
	}
};

export default SignInHandler;
