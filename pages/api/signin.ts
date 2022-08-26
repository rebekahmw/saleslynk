import type { NextApiRequest, NextApiResponse } from 'next'
import { SignInType } from "../../components/forms/signin.form";

type HTTPStatus = 200 | 204 | 400 | 401 | 403 | 404 | 500;

export type Response = {
	ok: boolean;
	status: HTTPStatus;
	message?: string;
};

const SignInHandler = (
    req: NextApiRequest,
    res: NextApiResponse<Response>
) => {
    const { body }: { body: SignInType } = req;

    if (body.email === "test@test.com" && body.password === "test") {
        return res.status(200).json({
            ok: true,
            status: 200,
            message: "Login successful.",
        })
    }

    return res.status(401).json({
        ok: true,
        status: 200,
        message: "Login details unknown.",
    });

};

export default SignInHandler;
