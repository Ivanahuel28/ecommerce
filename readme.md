start project:
`npm run dev`

use Dockerfile:
`docker build -t <image-name> .`

http://localhost:3001/

---
pasos siguiendo https://youtu.be/T1QFGwOnQxQ

reviso instalacion y version de node y npm

1. instalo de manera global (-g):
* typescript (compilador)
* ts-node (motor de ejecucion de typescript)
* nodemon (hotreload)

2. inicializamos ts y node con 
"tsc --init"
"npm init -y"

3. instalamos las dependencias:
    * express (framework)
    * cors ( permite que los endpoints se consuman desde distintos origenes )
    * dotenv ( ayuda a gestionar las variables de entorno )
    * multer ( ayuda con la carga de archivos desde un endpoint )
    * mongoose ( necesario para la conexion con la base de datos )

4. instalacion de paquetes de tipado, son iguales a los anteriores solo 
que se agrega adelante de cada uno "@types/" por ejemplo "express" -> "@types/express"
Agregar -D al final, para que sean incluidas solo como dependencias de desarrollo 

---
Instalacion de herramientas de debug
1. instalar dependencias: `npm install --save-dev ts-node tsconfig-paths


---
Pasos desarrollo:
1. arrancar base de datos con docker
2. npm run debug
