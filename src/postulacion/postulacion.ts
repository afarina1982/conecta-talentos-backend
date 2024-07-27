import { Estudiante } from '../estudiantes/estudiante';

export class Postulacion {
    constructor(
        public id: number,
        public fechaPostulacion: Date,
        public estudiante: Estudiante,
        public estado: string
    ) {}
    }
