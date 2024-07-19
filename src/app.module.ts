import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudianteController } from './estudiante/estudiante.controller';
import { EstudianteService } from './estudiante/estudiante.service';

@Module({
  imports: [],
  controllers: [AppController, EstudianteController,],
  providers: [AppService, EstudianteService],
})
export class AppModule {}
