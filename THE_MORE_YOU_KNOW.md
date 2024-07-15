# Saber más

Recordamos que los paths en una línea de comandos se pueden autocompletar con el `Tab`

- Se puede configurar la lógica de esa interacción para que abarque más contenido, pero no lo veremos en este taller
- [https://aplawrence.com/Unix/customtab.html](https://aplawrence.com/Unix/customtab.html)

Si hay que tomar como referencia una buena CLI, robusta, y que ha aguantado el paso de los años, destacaríamos la de GIT ([https://git-scm.com/](https://git-scm.com/))

## Tabla de Contenido

## Argumentos posicionales

Suelen evitarse, no son tan flexibles, aunque sea rigidez viene bien para cuando trabajas con ficheros y quieres forzar que el usuario no se olvide de indicarlo

Vienen bien cuando las cosas siguen un orden concreto, hay una semántica que se quiere mantener, ej. git

## Argumentos nombrados

Los argumentos nombrados, como proveen de una manera para identificarlos, no imponen un orden

Y si tuviésemos que hacer que alguno (o varios) de ellos fuese opcional, sería más fácil de trabajar

- El estándar de facto es
  - `-` para abreviaciones
  - `--` para el modo verboso

Usar el casing de `kebab-case` es un buen estándar para poder transformar a otros casings y poder separar por palabras

## Argumentos opcionales

Comúnmente indicados con `[...]`, si está dentro de corchetes se indica un nivel de opcionalidad.

- Tanto para posicionales como nombrados
- Por la opcionalidad los posicionales no siempre se declaran como opcionales
  - Si encadenas posicionales opcionales tendrías que especifivar varios nulls (en caso de que quieras saltarte el 2º pero no el 3º)

De nuevo, dependiendo de la semántica que ofrezcas puede tener sentido, ej. git

### Flags

Cuando usamos argumentos nombrados que sean opcionales, podemos tratarlos como flags (booleanos puros)

- Si nos pasan el argumento, `true`
- Si lo ignoran, `false`

## Verbose

- Tanto en argumentos como en logs aporta claridad (legibilidad)
- Reduce rapidez
  - En el caso de la escritura, es más texto a escribir para conseguir el mismo resultado
  - En el caso de los logs, todo lo visual en informática requiere más computación de la que esperamos

Si la intención es concatenar en consola, es más molesto escribir con verboso\
Si la intención es gestionar comandos desde scripts concretos, nos aporta legibilidad

Por eso, siempre que podamos, hemos de intentar aportar ambas posibilidades

## Help Manual (no automático)

- Existen librerías, en el ejemplo será a mano, Python provee argsparse (simple y efectiva, hay otras más robustas y complejas)
- Ofrecer ayuda y guía es importante en una CLI
- help [comando] debería dar una guía rápida
  - de cómo usarlo (parámetros con todo lujo de detalle)
  - y qué objetivo tiene (o referencia a donde se indique)
- help sin argumentos debería dar una ayuda de por dónde empezar, comandos disponibles, etc.
