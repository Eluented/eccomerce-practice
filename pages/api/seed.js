import User from "../../models/user";
import data from "../../utils/data";
import db from "../../utils/db";
import { disconnect } from "mongoose";

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany(); // delete all prev users from prev connection
  await User.insertMany(data.users); // add sample users (seeded)
  await db.disconnect();

  res.send({ message: "seeded successfully" });
};

export default handler;