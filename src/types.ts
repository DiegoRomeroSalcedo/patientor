export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other',
}

export interface Diagnoses {
    code: string;
    name: string;
    latin?: string;
}

export interface Patients { // Using the interface
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: string;
    occupation: string;
}

export type NonSsn = Omit<Patients, 'ssn'>; // Using the Utility Types
export type newPatients = Omit<Patients, 'id'>;