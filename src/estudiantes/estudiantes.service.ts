import { Injectable } from '@nestjs/common';
import e from 'express';
import { Estudiante } from './estudiante';

@Injectable()
export class EstudianteService {
    private estudiantes = [];

    constructor() {
        this.estudiantes.push(new Estudiante(1, 'Andres', 'Fariña', 42, 'Ingeniero Comercial', 'prueba@prueba.cl'));
    }

    obtenerEstudiantes(): Estudiante[] {
        return this.estudiantes;
    }

    obtenerEstudiante(id: number): Estudiante {
        for (let i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].id == id) {
                return this.estudiantes[i];
            }
        }
        return null;
    } 

    eliminarEstudiante(id: number): Estudiante[] {
        for (let i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].id == id) {
                this.estudiantes.splice(i, 1);
                break;
            }
        }
        return this.estudiantes;
    }
}
