// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "@/lib/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse<any>,
) {
	try {
		const [email, password] = [request.body.email, request.body.password];

		const client = await clientPromise;
		const db = client.db(process.env.DATABASE_NAME);

		const data = await db
			.collection("users")
			.find({
				email: email,
				password: password,
			})
			.toArray();

		let jwt = "";

		if (data.length > 0) {
			const passwordChars =
				"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			for (let i = 0; i < 32; i++)
				jwt += passwordChars[Math.floor(Math.random() * passwordChars.length)];

			return response.status(200).json({
				jwt: jwt,
				user: {
					_id: data[0]._id,
					email: data[0].email,
					name: data[0].name,
					lastModifiedId: data[0].lastModifiedId,
				},
			});
		}

		return response.status(400).json({
			error: {
				status: 400,
			},
		});
	} catch (e) {
		console.error(e);
	}
}
