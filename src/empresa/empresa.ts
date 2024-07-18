

export class Empresa {
    id: number;
    nombre: string;
    sitioWeb: string;
    tipo: string; // pequeña/mediana/grande
  
    constructor(id: number, nombre: string, sitioWeb: string, tipo: string) {
      this.id = id;
      this.nombre = nombre;
      this.sitioWeb = sitioWeb;
      this.tipo = tipo;
    }
  }
  