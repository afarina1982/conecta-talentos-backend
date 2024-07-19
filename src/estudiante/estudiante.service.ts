import { Injectable } from '@nestjs/common';
import { Estudiante } from './estudiante';

@Injectable()
export class EstudianteService {
    private estudiantes: Estudiante[] = [];

  create(estudiante: Estudiante): Estudiante {
    this.estudiantes.push(estudiante);
    return estudiante;
  }

  findAll(): Estudiante[] {
    return this.estudiantes;
  }

  findOne(id: number): Estudiante {
    return this.estudiantes.find(estudiante => estudiante.id === id);
  }

  remove(id: number): void {
    this.estudiantes = this.estudiantes.filter(estudiante => estudiante.id !== id);
  }
}
npm