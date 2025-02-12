# Workshop

## Objetivo

Crear un comando que ofrezca dos funcionalidades (ver y crear) y una opción de ayuda (help)

## Ver el contenido de un fichero

Queremos ver el contenido de un fichero en nuestro CLI

```shell
magic-cli ver ruta/del/fichero
```

Nos deberá mostrar el contenido de un fichero

## Crear un nuevo fichero

Queremos crear un nuevo fichero con el nombre que le digamos

```shell
magic-cli crear nombre-del-fichero.extension
```

## Ayuda del comando

```shell
magic-cli help
```

-> Nos dirá los comandos que podemos usar

```shell
magic-cli help ver
```

-> Nos dirá que podemos ver el contenido de un fichero

```shell
magic-cli help crear
```

-> Nos dirá que podemos crear un fichero

## Comando que no existe

Nos devolverá lo mismo que:

```shell
magic-cli help
```