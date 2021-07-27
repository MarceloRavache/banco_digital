import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Account } from "../entity/Account";

export const getAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const account = await getRepository(Account).findOne({
    id: req["info"].id_account,
  });

  return res.json(account);
};
