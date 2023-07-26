// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "@/lib/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse<any>,
) {
	try {
		const [email, password, name] = [
			request.body.email,
			request.body.password,
			request.body.name,
		];

		const client = await clientPromise;
		const db = client.db(process.env.DATABASE_NAME);

		const data = await db.collection("users").insertOne({
			email: email,
			name: name,
			password: password,
		});

		if (data.insertedId) return response.status(200).json({});

		return response.status(400).json({
			error: {
				status: 400,
			},
		});
	} catch (e) {
		console.error(e);
	}
}
