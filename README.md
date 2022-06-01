Para ejecutar el proyecto despues de clonarlo debe colocarse en la raiz del proyecto
### `git clone https://github.com/OsmaroB/backend-test/`
### `cd backend-test`

Ejecute en sql server los siguientes comandos
### `create database products`

Importe y ejecute el archivo sql  ubicado en la carpeta database dentro del proyecto

Seguido configure el archivo .env segun sea conveniente

PORT="5000"
USER_DB="sa"
PASSWORD_DB=123456
NAME_DB="products"
SERVER_DB="localhost"
PORT_DB=1433

Esta es la configuración inicial 

Seguido si tiene instalado docker 
### `docker build -t node-restapi .`
### `docker run -it -p 3000:5000 node-restapi`

La parte de -p 3000:5000 es opcional dependiendo de la necesidad

Si no tiene instalado docker puede iniciar el proyecto dentro de la raíz del proyecto con los siguientes comentos

### `npm install`
### `cd src`
### `node index.js`

Se ejecutara el programa en el puerto 5000 por defecto puede configurarse segun necesidad
