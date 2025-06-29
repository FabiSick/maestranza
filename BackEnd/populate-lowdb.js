import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const adapter = new JSONFile('db.json');
const db = new Low(adapter, { inventario: [] });

await db.read();
db.data ||= { inventario: [] };

const categorias = ['herramienta', 'repuesto', 'insumo', 'lubricante', 'material'];
const unidades = ['unidad', 'litro', 'kg', 'metro', 'set'];
const proveedores = ['Minas Norte Ltda.', 'Ferretería Atacama', 'Suministros PAC', 'Talleres Rojas', 'Comercial Mekaniko'];
const ubicaciones = ['Bodega Central', 'Depósito Norte', 'Estación Sur', 'Taller 1', 'Zona de Ensamble'];

const nombres = [
  'Rodamiento SKF 6205',
  'Aceite Hidráulico 68',
  'Llave Stillson 18"',
  'Válvula de Bola 2”',
  'Cinta Teflón 12mm',
  'Lubricante Multiusos',
  'Amperímetro Digital',
  'Disco de Corte 4½"',
  'Broca HSS 10mm',
  'Grasa Litio EP2',
  'Tornillo Allen M8x30',
  'Esmeril Angular 850W',
  'Soldadora Inverter 200A',
  'Mascarilla 3M 6200',
  'Guantes Nitrilo Talla L',
  'Multímetro Fluke 117',
  'Filtro de Aire CAT C7',
  'Correa Poly-V 6PK1820',
  'Batería 12V 100Ah',
  'Kit Junta Homocinética',
  'Arandela F436',
  'Electrodo 7018 1/8"',
  'Llave Combinada 19mm',
  'Juego Llaves Allen',
  'Kit Retenes Hidráulicos',
  'Extractor de Rodamientos',
  'Nivel de Burbuja 60cm',
  'Sierra Caladora Bosch',
  'Pistola Neumática Impacto',
  'Taladro Percutor 750W',
  'Lentes de Seguridad',
  'Punta Atornillador PH2',
  'Destornillador Plano 6"',
  'Regla Acero Inox 30cm',
  'Juego Machuelos M6-M12',
  'Cables de Batería 200A',
  'Adaptador Enchufe Industrial',
  'Flexómetro 5m',
  'Caja Herramientas 60cm',
  'Cinta Aisladora Negra',
  'Nivel Láser Cruzado',
  'Martillo Carpintero',
  'Llave Inglesa 10"',
  'Compresor 50L',
  'Filtro de Aceite Perkins',
  'Kit Cadenas Camión',
  'Juego Destornilladores',
  'Lubricador Neumático',
  'Filtro Regulador de Aire'
];

function generarProducto(nombre, index) {
  return {
    nombre,
    descripcion: `Artículo técnico de uso en mantenimiento/ensamble: ${nombre}`,
    categoria: categorias[Math.floor(Math.random() * categorias.length)],
    unidad: unidades[Math.floor(Math.random() * unidades.length)],
    cantidad: Math.floor(Math.random() * 81) + 20, // 20–100
    precio: Math.floor(Math.random() * 90001) + 10000, // 10.000–100.000 CLP
    proveedor: proveedores[Math.floor(Math.random() * proveedores.length)],
    ubicacion: ubicaciones[Math.floor(Math.random() * ubicaciones.length)],
    codigo: `PRD-${1000 + index}`,
    fechaIngreso: new Date().toISOString().split('T')[0]
  };
}

db.data.inventario = nombres.slice(0, 50).map((n, i) => generarProducto(n, i));
await db.write();

console.log('✔ Inventario poblado con 50 productos reales en db.json');
