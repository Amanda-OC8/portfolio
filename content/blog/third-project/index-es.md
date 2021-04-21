---
title: Kraken's World Studios
date: "2020-10-10T08:00:00.000Z"
description: Tercer proyecto
summary: Una Single Page Application para crear y gestionar diferentes tipos de historias desarrollado como tercer proyecto del Bootcamp de Iron Hack.
keywords: [CSS3, Node.js, React, MongoDB]
featuredimage:
  src: "./Start.PNG"
  alt: "Página de inicio"
defaultLang: SPA
cv: false
---
*Kraken's World Studio* es el tercer y último proyecto del Bootcamp de Iron Hack. En esta ocasión formé equipo con Aitor Martínez y Sergio Baltanás para desarrollar una *Single Page Application* para crear y gestionar todo tipo de historias. La aplicación está pensada para poder crear en la propia web la historia en sí. En este caso, hicimos el diseño pensando en casos muy generales para poder dar cabida a todo tipo de proyectos. Para ello consideramos que todos los proyectos tienen una historia, personajes y otros elementos relacionados, como puede ser información relativa al lugar donde se desarrollan. 

En esta ocasión yo gestioné la parte de *back-end*, aunque hubo algunas seccciones de *front-end*, como escoger la paleta de colores, que hicimos en conjunto. En esta ocasión usamos un esquema de color de oro y casi negro, que actuara como modo oscuro, pero sin un gran contraste que cansara la vista y fuera compatible con los distintos tipos de daltonismo. La idea era invertir la combinación para un modo claro que no dio tiempo a implementar.

Respecto al *back-end*, teníamos cuatro colecciones principales interconectadas. Lo más complejo de desarrollar fueron los *endpoints* para cada elemento. Cada proyecto tenía personajes y carpetas en su interior. Y dentro de estas carpetas, existían archivos. El acceso a estos resulto el más complejo tanto en el *back-end* como el *front-end*, ya que se necesitaba identificar el proyecto y la carpeta para acceder pero sin entorpercer el acceso por la jerarquía de los *endpoints*.

![Vista proyecto](./Project-tree.PNG)*Se puede ver un ejemplo del árbol de componentes*

Otro elemento complicado fue el desarrollo del árbol de componentes de cada proyecto. Este árbol vuestra cada elemento en su proyecto y si está en una carpeta. Desde la vista de proyecto y desde este árbol de componentes se puede realizar un CRUD completo de cada uno de esos elementos (pero sólo si eres el creador del proyecto). Para el caso de la historia y los archivos, se implentó un CMS en el proyecto que permitiera escribir de forma más cómoda y dar formato al texto.

El modelo de proyectos se hizo teniendo en mente que la gente pudiera crear todo tipo de proyectos: historias cortas, largas, campañas de rol, guiones de cómic, guiones de videojuegos... Tuvimos en consideración que un proyecto podía tener múltiples géneros y por eso al crear el proyecto se indicaba un género, que sería el principal, para luego añadirle diferents *tags* que permitiran especificar que había en cada proyecto. Estos se implentaron pensando en el modelo de *tags* de [AO3](https://archiveofourown.org/). La idea es que se pudieran filtrar los diferentes tipos de proyectos por tags, además de género y tipo de proyecto.

A nivel de diseño, como en ocasiones anteriores, se uso react-bootstrap como base para determinar las dimensiones de cada elemento, modificando elementos, como los botones. La app se diseñó para el uso web principalmente. A nivel de escalabilidad se quiso implementar un modo claro, que no dio tiempo a implementar, así como un sistema de filtrado de proyectos más complejo. Los proyectos se podían hacer públicos o privados, en conjunto o por componentes que por falta de tiempo se quedó como una simple opción. Nos hubiera gustado trabajar más este aspecto, con la creación de distintos tipos de usuarios que tuvieran acceso a distintas partes de la historia y así el creador seleccionara a quienes quiere mostrar que información: por ejemplo, en una campaña de rol, puede interesar que cualquier persona pueda ver el mapa del mundo, pero sólo los jugadores puedan ver las fichas de personaje, y sólo cada jugador tenga acceso a determinados fragmentos de historia.

![Vista proyectos](./Projects-List.PNG)*Vista de varios proyectos.*

Dentro de las dificultades que nos encontramos fue que no se usaron hooks para el desarrollo, sino que se trabajó con el ciclo de vida de los compomenentes. Esto hizo que se debería tener mucho cuidado con este ciclo de vida para que no hubiera problemas en las cargas, como la llamada del árbol de componentes y el proyecto. También había que tener cuidado con las llamadas al *back-end*, por las jerarquías de las colecciones y cómo se relacionaban. 

Este proyecto nos llevó más tiempo que los anteriores, por lo que tuvimos que administrar mejor los horarios que en otras ocasiones, para evitar el agotamiento en las etapas finales del proyecto. Fue una experiencia desafiante y compleja pero con un buen trabajo en equipo conseguimos sacarlo adelante, gracias al esfuerzo y apoyo de todos, diviendo el trabajo y trabajando en línea para resolver los errores en conjunto evitando bloqueos en el desarrollo. El resultado final se puede consultar en [git-hub](https://github.com/Amanda-OC8/kraken2).

###### Technologies: CSS3, Node.js, React, MongoDB, React-Bootstrap, Express
