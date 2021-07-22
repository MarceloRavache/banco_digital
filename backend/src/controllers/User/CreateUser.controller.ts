import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Account } from "../../entity/Account";
import { CreditCard } from "../../entity/CreditCard";
import { User } from "../../entity/User";
import { getNameCard } from "../../utils/GetNameCard.utils";

export const CreateUser = async (req:Request, res: Response): Promise<Response> => {

    const account_random = {agencia: Math.floor(Math.random() * 10000), conta:Math.floor(Math.random() * 100000000)};

    const account = getRepository(Account).create(account_random);

    const result_account = await getRepository(Account).save(account);


    const card_random = {number_card: `${Math.floor(Math.random() * 10000)} ${Math.floor(Math.random() * 10000)} ${Math.floor(Math.random() * 10000)} ${Math.floor(Math.random() * 10000)}`, name_card: getNameCard(req.body.name), day_vencimento: Math.floor(Math.random() * 32), month_vencimento: Math.floor(Math.random() * 12), code: Math.floor(Math.random() * 1000)};

    const card = getRepository(CreditCard).create(card_random);

    const result_card = await getRepository(CreditCard).save(card);


    const new_user = {...req.body, id_account: result_account.id, id_credit_card: result_card.id}

    const user = getRepository(User).create(new_user);

    const result_user = await getRepository(User).save(user);

    return res.json({...result_user, password:""});
}