import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

export const login = async (req: Request, res: Response): Promise<Response> => {
  const { login, password } = req.body;
  const user = await getRepository(User).findOne({ cpf: login });
  if (!user) return res.status(404).json({ message: "User not found." });

  if (user.password !== password)
    return res.status(404).json({ message: "User not found." });

  const token = jwt.sign(
    {
      id: user.id,
      id_account: user.id_account,
      id_credit_card: user.id_credit_card,
      name: user.name,
    },
    "secretKey",
    "1d"
  );

  return token;
};
