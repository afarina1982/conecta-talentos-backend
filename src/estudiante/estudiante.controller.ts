// src/estudiante/estudiante.controller.ts

import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { Estudiante } from './estudiante';

@Controller('estudiante')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}

  @Post()
  create(@Body() estudiante: Estudiante): Estudiante {
    return this.estudianteService.create(estudiante);
  }

  @Get()
  findAll(): Estudiante[] {
    return this.estudianteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Estudiante {
    return this.estudianteService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): void {
    this.estudianteService.remove(id);
  }
}
