//Sushi App
import fukusukeImg from "../assets/img/HomePage1.jpg";
//Ecommerce app
import ecommerceImg from "../assets/img/93e17a1b-9731-40f4-92cf-9f866b406c9c.jpeg";
// //Divide app
import divideImg from "../assets/img/Divide Chile.png";
// //Alartia app
import alartiaImg from "../assets/img/Alartia Chile.png";
// //ContainerTrack
import containerTrackImg from "../assets/img/Dashboard1.png";
// //SoftCluVRP
import softcluvrpImg from "../assets/img/SoftCluVRP.png";
// //Personal track

export const Proyectos = [
  {
    id: 1,
    nombre: "Fukusuke Sushi App",
    descripcion:
      "Web app y PWA para una cadena de sushi, con menú digital interactivo y gestión avanzada de pedidos. Optimiza operaciones internas y mejora la experiencia del cliente desde cualquier dispositivo.",
    tecnologias: [
      "React",
      "Context API",
      "Node.js",
      "Express",
      "MongoDB",
      "TailwindCSS",
    ],
    url: "https://github.com/incfDevuser/sushi-app",
    imagen: fukusukeImg,
  },
  {
    id: 2,
    nombre: "Football T-Shirt Store",
    descripcion:
      "Plataforma e-commerce para venta de camisetas de fútbol. Incluye gestión de productos, categorías y órdenes para vendedores, y funcionalidades de favoritos para clientes.",
    tecnologias: [
      "React",
      "Context API",
      "Node.js",
      "Express",
      "PostgreSQL",
      "TailwindCSS",
    ],
    url: "https://github.com/pramirezd/equipo5-proyectofinal",
    imagen: ecommerceImg,
  },
  {
    id: 3,
    nombre: "Divide",
    descripcion:
      "App fintech colaborativa que permite dividir pagos grupales, generar comprobantes, ver estados en tiempo real y compartir links de pago entre amigos.",
    tecnologias: [
      "React Native",
      "Supabase",
      "FastAPI",
      "PostgreSQL",
      "Expo Router",
    ],
    url: "https://github.com/incfDevuser/",
    imagen: divideImg,
  },
  {
    id: 4,
    nombre: "Alartia",
    descripcion:
      "App de seguridad ciudadana con alertas geolocalizadas, comunidades públicas/privadas, detección de spam con IA y clustering de zonas peligrosas.",
    tecnologias: [
      "React Native",
      "Supabase",
      "GeoJSON",
      "Turf.js",
      "Push Notifications",
    ],
    url: "https://alartia.cl/",
    imagen: alartiaImg,
  },
  {
    id: 5,
    nombre: "ContainerTrack",
    descripcion:
      "Sistema web logístico para seguimiento de contenedores. Incluye geofencing, control de transporte, panel administrativo y zonas primarias definidas con mapas.",
    tecnologias: [
      "React",
      "Node.js",
      "PostgreSQL",
      "PostGIS",
      "Leaflet",
      "Turf.js",
    ],
    url: "https://github.com/tame-software/containertrack",
    imagen: containerTrackImg,
  },
  {
    id: 6,
    nombre: "SoftCluVRP",
    descripcion:
      "Sistema de planificación de rutas con múltiples vehículos y agrupación suave (SoftCluVRP). Visualización de rutas óptimas, heurística propia y comparaciones con LKH.",
    tecnologias: [
      "Python",
      "FastAPI",
      "Matplotlib",
      "React",
      "GeoJSON",
      "PostgreSQL",
    ],
    url: "https://github.com/tame-software/softcluvrp",
    imagen: softcluvrpImg,
  },
];
