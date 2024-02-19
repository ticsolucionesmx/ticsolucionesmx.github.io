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
  About: 'Acerca de Mi',
  About_text: `Como desarrollador web, mi pasión es transformar ideas en experiencias digitales cautivadoras.
  Con maestría en lenguajes de desarrollo web, construyo interfaces intuitivas y dinámicas.
   Mi enfoque es la eficiencia y la adaptabilidad, empleando diferentes frameworks del mercado.
   Trabajo en colaboración para superar desafíos y entregar soluciones innovadoras.
   La atención al detalle es fundamental, asegurando sitios web robustos y amigables.
   Manteniéndome al tanto de las últimas tendencias, estoy comprometido con la mejora continua.
   Soy más que un desarrollador; soy un creador que da vida a visiones digitales de manera impactante y efectiva.`,

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
