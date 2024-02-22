# General-Backend create Logs - send Emails
# CRUDS with datasources Mongo (ODM Mongoose) - Postgress (ORM Prisma) - MySQL (ODM Sequelize)- LocalFiles Text-Json 
# Clean Arquitecture with TypeScript
# Testing

# dev
1. Duplicate file .env.template a .env
2. Configure environment variables (view env.template)
3. Ejecute command ```npm install```
4. Ejecute to download databases images
    ```
    docker compose up -d
    npx prisma generate
    npx prisma migrate dev
    
    ```
5. Ejecute command ```npm run dev```
    
    Some commands for installations (not needed)
    ```
    npm install mongoose --save
    npm install prisma --save-dev
    npx prisma init --datasource-provider PostgreSQL
    npx prisma migrate dev --name init
    ```

## Configure Gmail Key
[Google AppPasswords](https://myaccount.google.com/u/0/apppasswords)