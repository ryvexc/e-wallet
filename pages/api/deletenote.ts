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

		const data = await db
			.collection("notes")
			.deleteOne({ _id: new ObjectId(request.body.id) });

		if (data.deletedCount > 0) response.json(data);
		else return response.status(400);
	} catch (e) {
		console.error(e);
	}
}
