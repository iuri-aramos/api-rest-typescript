import { CreateUserInput } from './../schema/user.schema';
import { omit } from 'lodash';
import { Request, Response } from "express";
import { createUser } from "../service/user.service";
import log from "../utils/logger";

export async function createUserHandler(req: Request<{}, {}, CreateUserInput["body"]>, resp: Response) {
  try {
    const user = await createUser(req.body);//call create user service
    return resp.send(omit(user.toJSON(), 'password'));
  } catch (error: any) {
    log.error(error);
    return resp.status(409).send(error.message)
  }
}