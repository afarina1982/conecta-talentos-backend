import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresaModule } from './empresa/empresa.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { OfertaLaboralModule } from './oferta-laboral/oferta-laboral.module';
import { PostulacionModule } from './postulacion/postulacion.module';

@Module({
  imports: [EmpresaModule, EstudianteModule, OfertaLaboralModule, PostulacionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
