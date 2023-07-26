// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "@/lib/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse<any>,
) {
	try {
		const client = await clientPromise;
		const db = client.db(process.env.DATABASE_NAME);

		let data;
		data = request.body?.getAll
			? await db.collection("notes").find({}).toArray()
			: await db
					.collection("notes")
					.find({
						owner: request.body.owner,
					})
					.toArray();

		return response.json(data);
	} catch (e) {
		console.error(e);
	}
}
