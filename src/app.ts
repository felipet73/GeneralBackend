import { envs } from './config/plugins/envs.plugin';
import { LogModel, MongoDatabase } from './data/mongo';
import { Server } from './presentation/server';
import { PrismaClient } from '@prisma/client'


(async() => {
  main();
})();


async function main(){

  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  //
  
  /*
  const NewLog = await LogModel.create({
    message: 'Test message desde Mongo',
    origin: 'App.ts',
    level: 'low'
  });

  await NewLog.save();
  console.log(NewLog);*/

  //const logs = await LogModel.find();
  //console.log(logs);

  const prisma = new PrismaClient();
  /*const newLog = await prisma.logModel.create({
    data:{
      level:'HIGH',
      message:'Test message',
      origin: 'App.ts'
    }
  });
  console.log({newLog});*/
  
  /*const logs = await prisma.logModel.findMany({
    where:{
      level: 'MEDIUM'
    }
  });
  console.log(logs);*/

  Server.start();
}


