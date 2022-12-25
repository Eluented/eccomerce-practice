import User from "../../models/user";
import data from "../../utils/data";
import db from "../../utils/db";
import { disconnect } from "mongoose";

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Product.deleteMany();
  await Product.insertMany(data.users);
  await db.disconnect();

  res.send({ message: "seeded successfully" });
};

export default handler;