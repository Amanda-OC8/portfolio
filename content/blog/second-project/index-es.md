---
title: Monumentos activos
date: "2020-09-23T08:00:00.000Z"
description: Segundo proyecto
summary: Una app móvil para explorar los monumentos de Madrid desarrollada como segundo proyecto del Bootcamp de Iron Hack
keywords: [CSS3, MongoDB, Handlebars, Node.js, API]
featuredimage:
  src: "./Monuments-Example.png"
  alt: "Lista de monumentos"
defaultLang: SPA
cv: false
---
Este es el segundo proyecto que desarrollé durante el Bootcamp de Iron Hack. Inicialmente diseñado como un proyecto de dos personas, tuve que desarrollarla en solitario debido a problemas personales de mi compañero. Este proyecto tenía una serie de requisitos, como el uso de una API externa y tenía el objetivo de probar nuestras habilidades en back-end, al mismo tiempo que continuábamos mejorando nuestras habilidades en el front-end.

Con este requisito en mente me lancé a la búsqueda de una API usando la base de datos de APIs abiertas del gobierno de España y descubrí las bases de datos del Ayuntamiento de Madrid. Dentro de estas bases de datos, encontré un listado de monumentos de la ciudad de Madrid. Este listado me recordó a cuando era monitora en un Grupo Scout, en Alcalá de Henares, mi ciudad natal. Alcalá tiene una serie importante de lugares históricos que visitar y conocer y es común ver actividades relacionadas con esto al pasear. Por este motivo decidí mezclar ambas ideas en una app para móviles que te indicara que sitios visitar y que te mostrara una serie de actividades que podrías realizar allí. Cada actividad tendría información del número de participantes, materiales, edades recomendades y tipo de actividad. Con todo esto, empecé el desarrollo de Monumentos activos

![Lista de actividades, nueva actividad y detalle de la actividad](./Activities.png)*Diversas pantallas relativas a las actividades.*

El esquema de colores para la web se escogió usando [coolors.co](coolors.co/). La ventaja de la web  es que permite comprobar que las combinaciones de colores sean visibles para los distintos tipos de daltonismo. Escogimos azul como color base y una combinación que no tuviera grandes contrastes entre color claro y oscuro para que sirviera tanto para gente que usas modos oscuros como modos claros en las webs. Además de esto, todo se escribió en español y no en inglés, ya que los potenciales usuarios serían personas que no tiene porque tener dominio del inglés. 

El principal problema con el desarrollo de la app fueron los datos de los monumentos. Al cogerlos, pensé que los datos eran una *rest API*, pero resultó ser un archivo json. La solución fue usar ese archivo como base de datos local, adaptándolo a las necesidades de la app. Como se nos exigía el uso de una API externa, me decanté por Google Maps, ya que los datos que ofrecía el Ayuntamiento tenían geolocalización y quedarían bien integrados con la app, e incluso podrían servir para desarrollar gymkanas de pistas a través de los distinto monumentos usando la geolocalización, en una idea a desarrollar a futuro.

Respecto al back-end, se usaron tres colecciones: monumentos, actividades y usarios. Esta última es por el requisito de uso de rutas protegidas, que sólo permiten al usuario crear y editar sus propias actividades. Las colecciones de usuarios y actividades son en las que se implementó un CRUD completo, siendo la de monumentos de lectura, donde cada monumento tiene su propia ficha con información de localización, su ubicación y otros detalles. Se añadió una página de estadísticas como curiosidad y prueba de ChartJS, que permite ver como es la distribución de actividades según el número de participantes y su edad. Esto permite valorar que actividades existen y evaluar si hay actividades que se ajusten a lo que busca el usuario, o si hace falta añadir más de un grupo determinado.

![Detalle de monumento, filtro y página de estadísticas](./Monuments.png)*Pantallas para los monumentos, con un filtro por barrio y distrito, y la página de estadísticas.*

En la parte de front-end, se usó bootstrap para facilitar la labor de diseño en front-end, aunque algunos elementos se personalizaron. El diseño está pensado para usar en móviles aunque la app se puede usar en versión web también. Para renderizar las páginas se usó handlebars con layout. Se puede consultar la app en [heroku](https://monumentos-activos.herokuapp.com/) y visitar el repositorio en mi [github](https://github.com/Amanda-OC8/APP-Monuments).

Este fue un proyecto desafiante al tener que afrontarlo por mi cuenta. Así se tuvieron que deshechar algunas ideas por falta de tiempo, como subir fotos personalizadas a cada actividad, una gestión más fina de los usuarios que permitiera la creacción de grupos o el uso de la geolocalización. Pese a estas dificultades, el resultado final es funcional y cumple con el objetivo inicial de integrar actividades y las visitas culturales en la ciudad de Madrid.

###### Tecnologías: Bootstrap, CSS3, MongoDB, Handlebars, Node.js, API, ChartJS