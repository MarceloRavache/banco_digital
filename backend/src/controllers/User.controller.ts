import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Account } from "../entity/Account";
import { CreditCard } from "../entity/CreditCard";
import { User } from "../entity/User";
import { getDataOfAccount } from "../utils/GetDataOfAccount";
import { getDataOfCreditCard } from "../utils/GetDataOfCreditCard";
import { getNameCard } from "../utils/GetNameCard.utils";
import { getNumberUniqueRandom } from "../utils/GetNumberUniqueRandom";

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    const allUsers = await getRepository(User).find();
    return res.status(200).json(allUsers);
}
export const createUser = async (req: Request, res: Response): Promise<Response> => {
    if(req.body.name === '') return res.status(400).json({message:"Campo nome vazio."})
    if(req.body.email === '') return res.status(400).json({message:"Campo email vazio."})
    if(req.body.password === '') return res.status(400).json({message:"Campo senha vazio."})

    // create account
    
    const account = getDataOfAccount();
    const createAccount = getRepository(Account).create(account);
    const savedAccount =  await getRepository(Account).save(createAccount);

    // create card credit

    const cardCredit = getDataOfCreditCard(req.body.name)
    const createCardCredit = getRepository(CreditCard).create(cardCredit);
    const savedCardCredit = await getRepository(CreditCard).save(createCardCredit);

    // create user

    const dataUser = {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        id_account: savedAccount.id,
        id_credit_card: savedCardCredit.id,
    }

    const createUser = getRepository(User).create(dataUser);
    const savedUser = await getRepository(User).save(createUser);

    savedUser.password = "";
    
    return res.status(200).json(savedUser);
}

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    if(req.body.email === '') return res.status(400).json({message:"Campo email vazio."})

    const userCurrent = await getRepository(User).findOne(req.params.id);

    if(!userCurrent) return res.status(404).json({message: "Usuario não encontrado."})

    userCurrent.email = req.body.email;

    const updatedUser = await getRepository(User).save(userCurrent);

    updatedUser.password = "";

    return res.status(200).json(updatedUser)

}