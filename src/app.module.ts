import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresaModule } from './empresa/empresa.module';
import { EstudianteController } from './estudiante/estudiante.controller';
import { EstudianteService } from './estudiante/estudiante.service';
import { EstudianteModule } from './estudiante/estudiante.module';
import { OfertaLaboralModule } from './oferta-laboral/oferta-laboral.module';
import { PostulacionModule } from './postulacion/postulacion.module';
import { EmpresaController } from './empresa/empresa.controller';
import { EstudianteController } from './estudiante/estudiante.controller';
import { OfertaLaboralController } from './oferta-laboral/oferta-laboral.controller';
import { PostulacionController } from './postulacion/postulacion.controller';
import { EmpresaModule } from './empresa/empresa.module';

@Module({
  imports: [EmpresaModule, EstudianteModule, OfertaLaboralModule, PostulacionModule],
  controllers: [AppController, EmpresaController, EstudianteController, OfertaLaboralController, PostulacionController],
  providers: [AppService, EstudianteService],
})
export class AppModule {}
