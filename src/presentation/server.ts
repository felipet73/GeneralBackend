import { envs } from '../config/plugins/envs.plugin';
import { LogSeverityLevel } from '../domain/entities/log.entity';
import { CheckService } from '../domain/use-cases/checks/check-service';
import { CheckServiceMultiple } from '../domain/use-cases/checks/check-service-multiple';
import { SendEmailLogs } from '../domain/use-cases/email/send-email-logs';
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasource';
import { MongoLogDatasource } from '../infrastructure/datasources/mong-log.datasorce';
import { PostgresLogDatasource } from '../infrastructure/datasources/postgres-log.datasource';
//import { PostgresLogDatasource } from '../infrastructure/datasources/mong-log.datasorce';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
import { CronService } from './cron/cron-service';
import { EmailService } from './email/email.service';



/*const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource(),
);*/

/*const logRepository = new LogRepositoryImpl(
  new FileSystemDatasource(),
  //new MongoLogDatasource()
);/*/

const fsLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource(),
  //new MongoLogDatasource()
);

const mongoLogRepository = new LogRepositoryImpl(
  new MongoLogDatasource()
);

const postgresLogRepository = new LogRepositoryImpl(
  new PostgresLogDatasource(),
  //new MongoLogDatasource()
);


const emailService = new EmailService();


export class Server {

  public static async start() {

    console.log( 'Server started...' );

    //todo: Mandar email
    // new SendEmailLogs(
    //   emailService, 
    //   fileSystemLogRepository,
    // ).execute(
    //   ['felipet73@hotmail.com']
    // )
     /*emailService.sendEmailWithFileSystemLogs(
       ['felipet73@hotmail.com']
     );*/
    
    
    
    // CronService.createJob(
    //   '*/5 * * * * *',
    //   () => {
    //     const url = 'https://google.com';
    //     new CheckService(
    //       logRepository,
    //       () => console.log( `${ url } is ok` ),
    //       ( error ) => console.log( error ),
    //     ).execute( url );
    //     // new CheckService().execute( 'http://localhost:3000' );
        
    //   }
    // );


    // CronService.createJob(
    //   '*/5 * * * * *',
    //   () => {
    //     const url = 'https://google.com';
    //     new CheckService(
    //       logRepository,
    //       () => console.log( `${ url } is ok` ),
    //       ( error ) => console.log( error ),
    //     ).execute( url );
    //   }
    // );


    // CronService.createJob(
    //   '*/5 * * * * *',
    //   () => {
    //     const url = 'https://google.com';
    //     new CheckServiceMultiple(
    //       [ fsLogRepository, mongoLogRepository, postgresLogRepository ],
    //       () => console.log( `${ url } is ok` ),
    //       ( error ) => console.log( error ),
    //     ).execute( url );
    //   }
    // );

      //const logs = await logRepository.getLogs( LogSeverityLevel.low );
      //console.log(logs);


  }


}


