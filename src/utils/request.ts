import { Gender, newPatients } from "../types";
// import parser from "./parser";
import { z } from "zod";

export const PatientSchema = z.object({
    name: z.string(),
    dateOfBirth: z.string().date(),
    ssn: z.string().min(10).max(11),
    gender: z.nativeEnum(Gender),
    occupation: z.string(),
});

const toNewPatient = (object: unknown): newPatients => {
    return PatientSchema.parse(object);
};

export default toNewPatient;