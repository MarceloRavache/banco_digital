import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { CreditCard } from "../entity/CreditCard";

export const getCreditCard = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const creditCard = await getRepository(CreditCard).findOne({
    id: req["info"].id_credit_card,
  });

  return res.json(creditCard);
};
