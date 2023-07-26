// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getConnection } from "@/lib/db";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse<any>,
) {
	try {
		const client = await clientPromise;
		const db = client.db(process.env.DATABASE_NAME);

		const data = await db.collection("notes").updateOne(
			{ _id: new ObjectId(request.body.id) },
			{
				$set: {
					title: request.body.title,
					description: request.body.description,
					updatedAt: new Date()
						.toLocaleString("en-GB", {
							day: "2-digit",
							month: "2-digit",
							year: "2-digit",
							hour: "2-digit",
							minute: "2-digit",
						})
						.replace(/\//g, "-"),
				},
			},
			{},
		);

		await db
			.collection("users")
			.updateOne(
				{ _id: request.body.userid },
				{ $set: { lastModifiedId: request.body.id } },
			);

		if (data.modifiedCount > 0) return response.json(data);
		else return response.status(400);
	} catch (e) {
		console.error(e);
	}
}
