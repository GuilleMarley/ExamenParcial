import { Request, Response } from "npm:express@4.18.2";
import { PersonModel } from "../db/Person.ts";

const getAllPeople = async (req: Request, res: Response) => {

    const person = await PersonModel.find().exec();
    const fullName = person.fullName
    const dni = person.dni
    res.status(200).send(fullName,dni)
}

export default getAllPeople