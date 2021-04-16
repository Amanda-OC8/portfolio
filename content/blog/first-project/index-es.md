---
title: Why did the chicken cross the road?
date: "2020-09-06T08:00:00.000Z"
description: Primer proyecto
summary: Un videojuego en 2D con cooperativo local realizado durante el primer proyecto del Bootcamp de Iron Hack.
keywords: [Canvas2D, HTML5, CSS3, JS]
featuredimage:
  src: "./start-screen.png"
  alt: "Pantalla de inicio del juego"
defaultLang: SPA
cv: false
---

*Why did the chicken cross the road?* fue mi primer proyecto de desarrollo web del Bootcapm de Iron Hack, realizado a lo largo de una semana junto con Pedro Conde.

![Start screen](./start-screen.png)*Para llegar al otro lado*

Al ser mi primera aproximación al desarrollo web y de juegos, escogí algo que fuera sencillo de implentar, como un juego tipo *frogger* donde se partía de un entorno de dos dimensiones donde una serie de obstáculos iban por unos raíles determinados, simplificando el cálculo de las trayectorias. Usamos un entorno de dos dimensiones, tanto por simplicidad como por imposición dentro del proyecto.

Uno de los principales problemas que encontré fue el apartado gráfico. Al ser un juego tipo *frogger*, la cámara que se usaba era área, por lo que se debían emplear *sprites* que casaran con esa vista. La mayoría de diseños para animar disponibles eran de vista lateral, por lo que finalmente creé una animación sencilla de bote usando una imagen estática y el software gratuito [piskel](https://www.piskelapp.com/). Lo más sencillo hubiera sido buscar otro elemento más fácilmente animable, pero se hubiera perdido la gracia de saber porque el pollo cruzó la carretera.

<figure style="text-align: center">
     <img
      src="./why-did-the-chicken-cross-the-road.gif"
      alt="Gameplay"
      style="max-width: 100%"
    />
    <figcaption>Ejemplo de <i>gameplay</i>.</figcaption>
</figure>

Como el juego era mecánicamente sencillo (sin saltos, obstáculos moviéndose en un eje fijo) decidí incluir distintos elementos, como un modo de dos jugadores en local, así como poder escoger si llevar un pollo o un pollito, y por tanto, cambiando los controles. Se planeó incluir un selector de dificultad, que cambiara el número de carriles y la velocidad de los coches, pero la fase de testeo duró más del previsto y no se puedo implementar por la falta de tiempo para hacer un ajuste fino. El código quedó diseñado de forma que estos selectores de velocidad se podrían incluir en el futuro. 

También se incluyó música libre de derechos en el juego, así como pequeños efectos de sonido y músicas paras la derrota y la victoría. Además se incluyeron varios finales, que cambiaban según el número de jugadores y el personaje usado.

El juego se puede probar de [forma gratuita](https://amanda-oc8.github.io/Why-did-the-chicken-cross-the-road/), además de consultar el código en mi [github](https://github.com/Amanda-OC8/Why-did-the-chicken-cross-the-road). Aunque resultó ser un proyecto pequeño y sencillo, fue una primera aproximación al desarrollo de la que quedé muy sastisfecha.

###### Tecnologías: Canvas2D, HTML5, CSS3, JS