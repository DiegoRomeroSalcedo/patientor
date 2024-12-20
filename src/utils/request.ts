import { newPatients } from "../types";
import parser from "./parser";

const toNewPatient = (object: unknown): newPatients => {
    if (!object || typeof object !== 'object') {
        throw new Error('Incorrect or missing object');
    }
    
    if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object) {
        const newPatient: newPatients = {
            name: parser.parseName(object.name),
            dateOfBirth: parser.parseDate(object.dateOfBirth),
            ssn: parser.parseSsn(object.ssn),
            gender: parser.parseGender(object.gender),
            occupation: parser.parseOccupation(object.occupation)
        };
        return newPatient;
    }

    throw new Error('Incorrect data: some fields are missing');
};

export default toNewPatient;