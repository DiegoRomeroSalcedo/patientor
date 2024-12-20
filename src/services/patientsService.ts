import patients from "../../data/patients";
import { newPatients, NonSsn, Patients } from "../types";
import { v4 as uuid } from 'uuid';

const getPatients = (): NonSsn[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};

const addPatient = (patient: newPatients): Patients => {
    const newPatient = {
        id: uuid(),
        ...patient
    };

    patients.push(newPatient);
    return newPatient;
};

export default {
    getPatients,
    addPatient,
};