// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from "@/types/user";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};


const user = {
  id: '1',
  name: 'Fit',
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>,
) {
  res.status(200).json(user);
}