export const PRODUCTS = [
  {
    id: 1,
    categoryId: 1,
    title: "Cerro Aconcagua",
    price: 3000,
    date: "20 de Enero",
    pack: "7 días. Comida y alojamiento incluidos",
    country: "Argentina",
    region: "Mendoza",
    coords:{
    lat: -32.6531785,
    lng: -70.0108675} ,
    description: "La montaña más alta de Argentina es el Aconcagua, con una altitud de 6.962 msnm. De hecho, también es el pico más alto de toda América y el segundo del mundo, solo por detrás de los que están situados en el Himalaya, como el Everest, que supera los 8.000.",
    image: require("../../../assets/mountain/aconcagua.jpg"),
  },
  {
    id: 2,
    categoryId: 1,
    title: "Ojos del salado",
    price: 4500,
    date: "15 de Febrero",
    pack: "7 días. Comida y alojamiento incluidos",
    country: "Argentina, Chile",
    region: "Puna de Atacama",
    coords: {
      lat: -27.1091618,
      lng: -68.5758527
    },
    description: "Con sus 6.893 metros de altitud es el volcán más alto del mundo, aunque no ha tenido erupciones en la historia reciente. El pico hace frontera con Chile, y está situado en una cadena volcánica de 60 kilómetros, que parte en el paso Fronterizo San Francisco y termina en el Nevado Tres Cruces. ",
    image: require("../../../assets/mountain/ojos-del-salado.jpg"),
  },
  {
    id: 3,
    categoryId: 1,
    title: "Monte Pissis",
    price: 2500,
    date: "10 de Marzo",
    pack: "7 días. Comida y alojamiento incluidos",
    country: "Argentina",
    region: "Puna de Atacama",
    coords: {
      lat: -27.7553089,
      lng: -68.8340515
    },
    description: "Ocupa el tercer lugar de las montañas más altas de Argentina y se localiza a mitad camino entre las provincias de La Rioja (cara sur) y Catamarca (cara norte).  A 16 km está el cráter Corona del Inca, que alberga en su interior un bonito lago navegable.",
    image: require("../../../assets/mountain/monte-pissis.jpg"),
  },
  {
    id: 4,
    categoryId: 1,
    title: "Cerro Mercedario",
    price: 1500,
    date: "10 de Diciembre",
    pack: "5 días. Comida y alojamiento incluidos",
    country: "Argentina",
    region: "Andes centrales",
    coords: {
      lat: -31.9791662,
      lng: -70.1125
    },
    description: "Situado en la provincia de San Juan, está dentro de un macizo que lo forman otras importantes montañas como Pico Polaco, La Mesa, Alma Negra y Ramada.",
    image: require("../../../assets/mountain/cerro-mercedario.jpg"),
  },
  {
    id: 5,
    categoryId: 1,
    title: "Cerro Bonete",
    price: 2500,
    date: "30 de Enero",
    pack: "6 días. Comida y alojamiento incluidos",
    country: "Argentina, Chile",
    region: "Puna de Atacama",
    coords: {
      lat: -28.0185951,
      lng: -68.7910194
    },
    description: "Está situado en la provincia de La Rioja, y también es conocido como Cerro Bonete Chico. A 12 km al norte está el Centro Bonete Grande, y como curiosidad, es más pequeño. Destaca por ser uno de los volcanes más altos del mundo.",
    image: require("../../../assets/mountain/cerro-bonete.jpg"),
  },  

  {
    id: 6,
    categoryId: 2,
    title: "Trekking en el Parque Nacional de los Glaciares",
    price: 2500,
    date: "15 de Junio",
    pack: "5 días. Comida y alojamiento incluidos",
    country: "Argentina",
    region: "Parque Nacional de los Glaciares",
    coords: {
      lat: -50.5026183,
      lng: -73.1997344
    },
    description: "Ubicado en la Provincia de Santa Cruz, visitar este parque es uno de los planes imperdibles en Argentina. La experiencia de caminar sobre el hielo y explorar el interior del Glaciar Perito Moreno en el Calafate, es un acontecimiento único que vos querrás repetir. El circuito de mini trekking inicia en el puerto “Bajo de las sombras”; luego la caminata continúa en el sector de la Morena Sur donde se eligen los grampones para recorrer.Para esta aventura debes tener buen estado físico, ya que tiene una duración aproximada de siete horas.",
    image: require("../../../assets/adventure/glaciar.jpeg"),
  }, 
  {
    id: 7,
    categoryId: 2,
    title: "Rafting en Corcovado",
    price: 2500,
    date: "15 de Septiembre",
    pack: "3 días. Comida y alojamiento incluidos",
    country: "Argentina",
    region: "Chubut",
    coords: {
      lat: -43.5391257,
      lng: -71.4737882
    },
    description: "Deslizarte en caudalosos ríos a una velocidad implacable con un grupo de amigos, es una de las actividades más divertidas y que despierta gran adrenalina en quienes la practican. El rafting es un deporte ideal para quienes viajan en grupo ya que les permitirá disfrutar a todos al mismo tiempo, la aventura de sortear diferentes obstáculos y caminos lejos de tierra firme.",
    image: require("../../../assets/adventure/concovardo.jpg"),
  },

];
