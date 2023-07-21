import { Response } from "express";

const handleHttp = ( res: Response, error: string, errorRaw?: any) => {
    console.log(errorRaw);
    console.log(error);
    res.status(500);
    res.send({ error });
};

export { handleHttp };