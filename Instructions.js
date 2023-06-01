// - INSTRUCCIONES PARA EJERCICIO BASICO DE CRUD USANDO EXPRESS CON TYPESCRIPT.

// -Realizar la carpeta principal, abrir en VSCode y comenzar el proyecto

// -abrir el terminal y comenzar las instalaciones de las herramientas a usar (en caso de no tenerlas)
// -primer codigo en terminal

// terminal
    npm init -y 

// -install express en el directorio del proyecto (NECESARIO)

// terminal
    npm install express 

// -install typescript (en caso de no tenerlo)

// terminal
    npm install typescript -D

// -install declarations, los types de Express y de Node para que TypeScript pueda leer los herrores, dar sugerencias y autocompletar (NECESARIO)

// terminal
    npm install @types/express @types/node 

// iniciar la configuracion del transpilador de TypeScript para configurar el directorio de transpilacion.

// terminal
    npx tsc --init 

// ingresar en el archivo "tsconfig.json" y buscar la linea de condicion "outdir" (descomentarla) y colocar entre las comillas "./dist"

// archivo "tsconfig.json"
"outDir": "./dist",

// instalar NODEMON que realiza un seguimiento del server donde lo reinicia con cualquier cambio realizado.

// terminal
    npm install -D nodemon

// instalar RIMRAF que se usa para borrar archivos/directorios y lo usaremos para borrar los directorios de outdir "./dist" antes de hacer la transpilacion de TypeScript

// terminal
    npm install rimraf

// instalar concurrently para realizar varios codigos en multiplataformas y no tener error de tipear (&) ya que ampersand no concatena en todas las plataformas

// terminal
    npm install concurrently 

// ir al archivo "package.json" y agregar los compandos Scripts (agregar en la linea inferior de scripts)

// archivo "package.json"
    "build": "rimraf dist && npx tsc",
    "prestart": "npm run build",
    "start": "node dist/index.js",
    "preserve": "npm run build",
    "serve": "concurrently \"npx tsc -w\" \"nodemon dist/index.js\"",

// codigos para correr nuestros scripts "npm run serve" y "npm run start"

// colocar nuestros codigos en typescript para comenzar el server

// archivo index.js
import express, { Express, Request, Response } from "express";
const port = 3000;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("HELLO THIS APP IS WORKING !!!");
});

app.post("/", (req: Request, res: Response) => {
    res.send('THIS APP IS WORKING YOU GOT A POST REQUEST !!!');
});

app.put("/user", (req: Request, res: Response) => {
    res.send("OMG I CAN'T BELIEVE THIS IS WORKING YOU GOT A PUT REQUEST >.< !!! ");
});

app.delete("/user", (req: Request, res: Response) => {
    res.send("WE'RE JUST INCREDIBLY AWESOME !!! WE JUST GOT A DELETE REQUEST (-.-) /,,/ ");
});

app.listen(port, () => {
    console.log(`THIS APP IS WORKING LISTENING ON PORT ${port}`);
});

// usar "npm run serve" en el TERMINAL para comenzar y mantener el server online

// colocar la direccion web http://localhost:3000/ en el navegador para ver como funciona

// abrir nuestra extension THUNDER CLIENT
// darle click en "New Request"
// colocar en la barra de URL la direccion "http://localhost:3000/" y hacer un GET y POST request.
// Modificar la direccion URL y colocar "// http://localhost:3000/user" para realizar un PUT y un DELETE request.



// GRACIAS POR SU PACIENCIA, ESPERO DISFRUTEN ESTAS INSTRUCCIONES ! 