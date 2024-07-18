
import { Estudiante } from '../estudiante/estudiante';
import { OfertaLaboral } from '../oferta-laboral/oferta-laboral';

export class Postulacion {
  id: number;
  fechaPostulacion: Date;
  estudiante: Estudiante;
  estado: string; // Pendiente, Aprobado, Rechazado
  ofertaLaboral: OfertaLaboral;

  constructor(id: number, fechaPostulacion: Date, estudiante: Estudiante, estado: string, ofertaLaboral: OfertaLaboral) {
    this.id = id;
    this.fechaPostulacion = fechaPostulacion;
    this.estudiante = estudiante;
    this.estado = estado;
    this.ofertaLaboral = ofertaLaboral;
  }
}
