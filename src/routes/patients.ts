import express from "express";
import patientsService from "../services/patientsService";
import toNewPatient from "../utils/request";

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientsService.getPatients());
});


router.post('/', (req, res) => {
    try {
        const newPatient = toNewPatient(req.body);
        const addedPatient = patientsService.addPatient(newPatient);
        res.json(addedPatient);
    } catch (e: unknown) {
        let errorMessage = "Something went wrong";
        if (e instanceof Error) {
            errorMessage += e.message;
        }

        console.log(errorMessage);
    }
});
export default router;
