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
*Kraken's World Studio* es el tercer y último proyecto del Bootcamp de Iron Hack. En esta ocasión formé equipo con Aitor Martínez y Sergio Baltanás para crear una *Single Page Application* para crear y gestionar todo tipo de historias. La aplicación está pensada para la creacción en la propia web de la historia en si. En este caso, hicimos el diseño pensando en casos lo más generales posible para poder dar cabida a todo tipo de proyectos, considerando que todos tienen una historia, personajes y otros elementos relacionados, como los elementos para la creacción del mundo. Tanto el proyecto como sus elementos podían ser públicos o no a otros creadores (tanto en conjunto como de forma individual). 

En esta ocasión yo gestioné la parte de back-end, aunque hubo algunas cosas, como escoger la paleta de colores, que hicimos en conjunto. En esta ocasión usamos un esquema de color de oro y casi negro, que actuara como modo oscuro, pero sin un gran contraste. La idea era invertir la combinación para un modo diurno que no dio tiempo a implementar.

Respecto al back-end, teníamos cuatro colecciones principales interconectadas. Lo más complejo de desarrollar fueron los endpoints para cada elemento. Cada proyecto tenía personajes y carpetas en su interior. Y dentro de estas carpetas, existían archivos. El acceso a estos resulto el más complejo tanto en el back-end como el front-end, ya que se necesitaba identificar el proyecto y la carpeta para acceder, y sin entorpercer el acceso por la jerarquí de los endpoints.

![Vista proyecto](./Project-tree.PNG)*Se puede ver un ejemplo del árbol de componentes*

Otro elemento complicado fue el desarrollo del árbol de componentes de cada proyecto. Este árbol vuestra cada elemento en su proyecto y si está en una carpeta. Desde la vista de proyecto y desde este árbol de componentes se puede realizar un CRUD completo de cada uno de esos elementos. Para el caso de la historia y los archivos, se implentó un CMS en el proyecto que permitiera escribir de forma más desarrollada, además de poder darle formato al texto.

El modelo de proyectos se hizo teniendo en mente que la gente pudiera crear todo tipo de proyectos: historias cortas, largas, campañas de rol, guiones de cómic, guiones de videojuegos... Tuvimos en consideración que un proyecto podía tener múltiples géneros y por eso al crear el proyecto se indicaba un género, que sería el principal, para luego añadirle diferents tags que permitiran especificar que te vas a encontrar en cada proyecto. Estos tags se implentaron con el sistema de tags de [AO3](https://archiveofourown.org/) en mente. La idea es que se pudiera filtrar los diferentes tipos de proyectos por tags, además de género y tipo de proyecto.

Faltan cosas

###### Technologies: CSS3, Node.js, React, MongoDB, React-Bootstrap, Express
