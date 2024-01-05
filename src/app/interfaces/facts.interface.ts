export interface FactsInterfaces {
  titulo:string;
  descripcion:string;
  detalle: EchosInterface[] = [{
    
  }]

}

export interface EchosInterface {
  icon :string;
  titulo: string;
  detalle:string;
}
