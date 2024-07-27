import { Controller, Post, Get, Body, Param, Delete, Res } from '@nestjs/common';
import { Estudiante } from './estudiante';
import { EstudianteService } from './estudiantes.service';
import { Response } from 'express';

@Controller('estudiantes')
export class EstudianteController {

    constructor(private readonly estudianteService: EstudianteService) { }

    //  Registrar un nuevo estudiante

    @Post()
    registarEstudiante(@Body() estudiante: Estudiante) {
        return estudiante;
    }
    //  Obtener un estudiante según su id

    @Get(':id')
    obtenerEstudiante(@Param('id') id: number, @Res() response: Response) {
        const estudiante = this.estudianteService.obtenerEstudiante(id);
        if (estudiante) {
            response.status(200).send(estudiante);
    
        } else {
            response.status(404).send({ error: 'Estudiante no encontrado' });
        }
     
    }

    //  Obtener todos los estudiantes

    @Get()
    obtenerEstudiantes(): Estudiante[] {
        return this.estudianteService.obtenerEstudiantes();
    }

    //  Eliminar un estudiante según su id

    @Delete(':id')
    eliminarEstudiante(@Param('id') id: number) {
        return this.estudianteService.eliminarEstudiante(id);
    }


}
