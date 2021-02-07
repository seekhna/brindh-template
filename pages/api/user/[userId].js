import { connectToDatabase } from "../../../lib/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const {
    query: { userId },
  } = req

  console.log(userId);
  const users = await db
    .collection("users")
    .find({ name: { '$regex': userId, '$options': 'i' } })
    .sort({ points: -1 })
    .limit(20)
    .toArray();

  res.json(users);
};
