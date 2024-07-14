# El poder oculto de las CLIs

Taller práctico para la charla de "El poder oculto de las CLIs"

Para saber más contexto de las CLIs y estándares, consulta la sección de [Saber más](THE_MORE_YOU_KNOW.md)

## Tabla de Contenido

## Lenguajes

Java o Node (TypeScript)

## Tiempo

30-45 minutos

## Dificultad

Introductorio

### Se requiere saber

- Programación básica (control de flujos, bucles)
- Tratamiento de strings (regex sería un extra)
- FileSystems

## Tamaño del equipo

Depende de la cantidad de gente

- individual (< 20)
- equipos de 2-3 personas (>=20)

## Qué hay que hacer

- Dado un changelog, extraer el último set de cambios
- Crear un template para implementar un code-gen
- Comprender la estructura del entrypoint y de los archivos adyacentes

  - En pro de ampliar conocimientos

## Nombre

Nuestra CLI se llamará **`magic-cli`**, lo gestionaremos a nivel de paquete (si lo llegamos a publicar)

## Comandos

### last-changes

```shell
magic-cli last-changes
magic-cli lc
```

#### Params

- lc -> normal
- last-changes -> verboso

### code-gen

```shell
magic-cli code-gen name --type entidad [--extension ext]
magic-cli cg name -t entidad [-e ext]
```

Lanzará una excepción si no se reconoce el parámetro después de `code-gen` o `cg`\
Lanzará una excepción si no existe el directorio base proporcionado

#### Params

- cg -> normal
- code-gen -> verboso

- --type, -t
  - Entidad, tipo de elemento, componente, modelo, vista, controlador, etc.
  - Se usará para determinar la carpeta de destino y el template a usar
- --extension, -e (opcional)
  - Decidirá la extensión del fichero, Java=.java, Node=.ts
  - No se discriminará por validerz, sólo que sea URI compatible

#### Opcional

Que se pueda configurar el path sobre el que añadirá código

### validate

_Este es sólo de ejemplo_

Será este comando el que indique un path externo que se querrá validar
Los ficheros de configuración se leerán a partir de ese directorio, a nivel root desde ahí, es decir, si hay uno anidado se ignorará

#### Opcional

Si hay un fichero de configuración anidado, modifica el código para que en esa zona anidada la configuración a usar sea esa, y fuera de esa zona siga siendo la anteriormente especificada

### [extra] help

```shell
magic-cli help [comando]
magic-cli h [comando]
magic-cli man [comando]
```

#### Params

- h -> shortcut
- help -> normal
- man -> linux-friendly

- sin argumentos
  - Dice que hace la CLI (descripción general)
  - Lista los comandos disponibles

Indicando comando (verboso o no)

- Qué hace el comando
- Cómo usarlo (parámetros)

#### Opcional

- Sin argumentos
  - De cada comando muestra el detalle como si se consultase a mano

## Estructura del repositorio

Con diferencias respecto a cada lenguaje, hablaremos de los conceptos comúnes

### Fichero de configuración

Valores por defecto y plenamente tipados, se pueden sobreescribir a nivel de proyecto que se modifique.

### Formato del CHANGELOG

El CHANGELOG es un fichero en el que se registran release notes (una por cada versión)

Para que sea lo más real posible, se usarán los dos estándares usados normalmente

- Keep a Changelog ([https://keepachangelog.com/en/1.1.0/](https://keepachangelog.com/en/1.1.0/))
- Semantic Versioning ([https://semver.org/](https://semver.org/))

### Scripts para cada lenguaje

#### local_install

Instala el comando localmente para poder probarlo con libertad

#### publish

Publica el paquete (Node=npm, Java=maven)

## Puntos de mejora

### Verbosidad y logs

Es algo que no se ha contemplado, los logs están hardcodeados y no hay manera de gestionarlos desde fuera\
Un log consume tiempo, y además, a veces también ensucia la pantalla, se suelen ofrecer modos quiet (opt-out) o verbose (opt-in)

- opt-in (optionally-in), indicas cuándo **sí** que quieres logs, por defecto será _silencioso_
- opt-out (optionally-out), indicas cuándo **no** quieres logs, por defecto los tendrás

El estándar suéle ser `-v` y `--verbose`,\
También se podría implementar con `--log-level` pero ahí tendrías que detallar el enum que se espera, gestionarlo como flags es menos problemático
