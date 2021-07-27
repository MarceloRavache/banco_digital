import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const userRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { Authorization } = req.headers;
  const token = Authorization.toString().split(" ")[1];

  jwt.verify(token, "secretKey", (err, decoded) => {
    if (err) return res.status(401).json({ message: "User not authorizate" });

    req["info"] = decoded;
    return next();
  });
};
