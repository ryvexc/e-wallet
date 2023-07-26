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

		const data = await db.collection("notes").insertOne({
			title: request.body.title,
			owner: request.body.owner,
			description: request.body.description,
			createdAt: new Date()
				.toLocaleString("en-GB", {
					day: "2-digit",
					month: "2-digit",
					year: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
				})
				.replace(/\//g, "-"),
			updatedAt: new Date()
				.toLocaleString("en-GB", {
					day: "2-digit",
					month: "2-digit",
					year: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
				})
				.replace(/\//g, "-"),
		});

		if (data.insertedId) return response.json(data);
		else return response.status(200);
	} catch (e) {
		console.error(e);
	}
}
