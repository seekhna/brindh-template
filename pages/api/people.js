import { connectToDatabase } from "../../lib/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const people = await db
    .collection("people")
    .find({})
    .sort({ points: -1 })
    .limit(20)
    .toArray();

  res.json(people);
};
