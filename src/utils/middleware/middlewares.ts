import { NextFunction, Request, Response } from "express";
import { PatientSchema } from "../request";
import { z } from "zod";

export const newPatientParser = (req: Request, _res: Response, next: NextFunction) => {
    try {
        PatientSchema.parse(req.body);
        next();
    } catch (error: unknown) {
        next(error);
    }
};

export const handleError = (error: unknown, _req: Request, res: Response, next: NextFunction) => {
    if (error instanceof z.ZodError) {
        res.status(400).send({ error: error.issues});
    } else {
        next(error);
    }
};