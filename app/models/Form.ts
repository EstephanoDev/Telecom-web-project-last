// models/Form.ts
class Form {
  id: string;
  created: string;
  updated: string;
  Fecha: string;
  Trabajador: string;
  Grupo: string;
  TipoTrabajo: string;
  Ubicacion: string;
  TrabajoRealizado: string;

  constructor(data: Partial<Form>) {
    this.id = data.id || "";
    this.created = data.created || "";
    this.updated = data.updated || "";
    this.Fecha = data.Fecha || "";
    this.Trabajador = data.Trabajador || "";
    this.Grupo = data.Grupo || "";
    this.TipoTrabajo = data.TipoTrabajo || "";
    this.Ubicacion = data.Ubicacion || "";
    this.TrabajoRealizado = data.TrabajoRealizado || "";
  }
}

export { Form };

