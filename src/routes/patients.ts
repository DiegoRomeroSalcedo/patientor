import express from "express";
import patientsService from "../services/patientsService";
import { Request, Response } from "express";
import { newPatientParser } from "../utils/middleware/middlewares";
import { newPatients, Patients } from "../types";

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientsService.getPatients());
});


router.post('/',  newPatientParser, (req: Request<unknown, unknown, newPatients>, res: Response<Patients>) => {
        const addedPatient = patientsService.addPatient(req.body);
        res.json(addedPatient);
});
export default router;
