export interface aboutInterface {
  page: string
  nombre: string
  home: string;
  Resume: string
  About: string;
  About_text: string;
  Portfolio: string;
  Services: string;
  Birthday: string;
  _Brithday: string;
  Website: string;
  _Website: string;
  Phone: string;
  _Phone: string;
  City: string;
  _mail: string;
  Age: string;
  AgeCalculo: Number;
  edadcalculo: string;
}

export const initAbout: aboutInterface = {
  page: 'Presentación',
  nombre: 'Jose Antonio',
  // datos navegador
  home: 'Inicio',
  About: 'Hacerca de Mi',
  About_text: `Desarrollador de aplicaciones web y apasionado en lo que hace, además de tener amor por el conocimiento en general.
  a mi interesa cómo funciona el todo y si se puede programar claro que lo haremos.`,

  Resume: 'Resumen',
  Portfolio: 'Portafolio',
  Services: 'Servicios',
  // datos de contenido
  // hacerca de mi
  Birthday: 'Cumpleaños',
  _Brithday: "23 de Marzo",
  Website: 'Website',
  _Website: 'ticsolucionesmx.github.io',
  Phone: 'Telefono',
  _Phone: '951 350 62 72',
  City: 'Ciudad',
  _mail: 'joseramirez.jr2303@gmail.com',
  Age: 'Edad',
  AgeCalculo: 0,
  edadcalculo: '1991-03-23'
}
