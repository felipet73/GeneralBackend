# Backend General Funciones para crear Logs - Envio de Email
# CRUDS con fuente de datos configurable Mongo - Postgress - MySQL - LocalFiles
# Arquitectura Limpia con TypeScript

# dev
1. Clonar el archivo .env.template a .env
2. Configurar las variables de entorno
```
PORT=3000

MAILER_EMAIL=
MAILER_SECRET_KEY=

PROD=false

MONGO_URL=
MONGO_DB_NAME=
MONGO_USER=
MONGO_PASS=

```
3. Ejecutar el comando ```npm install```
4. Ejecutar ```npm run dev```

## Configurar Gmail Key
[Google AppPasswords](https://myaccount.google.com/u/0/apppasswords)