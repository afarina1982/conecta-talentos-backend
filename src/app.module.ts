import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudianteService } from './estudiantes/estudiantes.service';
import { EmpresaController } from './empresa/empresa.controller';
import { EstudianteController } from './estudiantes/estudiantes.controller';
import { OfertaLaboralController } from './oferta-laboral/oferta-laboral.controller';
import { PostulacionController } from './postulacion/postulacion.controller';

@Module({
  imports: [],
  controllers: [AppController, EstudianteController, EmpresaController, OfertaLaboralController, PostulacionController,],
  providers: [AppService, EstudianteService],
})
export class AppModule {}
