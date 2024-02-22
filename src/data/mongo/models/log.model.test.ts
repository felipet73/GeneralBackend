import { MongoDatabase } from '../init';
import {envs} from '../../../config/plugins/envs.plugin';
import mongoose from 'mongoose';
import { LogModel } from './log.model';

describe('Test Logmodel',()=>{

    afterAll(()=>{
        mongoose.connection.close();
    });

    test('Should return LogModel', async ()=>{

        await MongoDatabase.connect({
            mongoUrl: envs.MONGO_URL,
            dbName: envs.MONGO_DB_NAME
        });

    });

    test('Should return LogModel', async ()=>{

        const logData = {
            origin:'log.model.test.ts',
            message:'test message',
            level: 'low'
        }

        const log = await LogModel.create( logData );
        //console.log(log);

        expect( log ).toEqual( expect.objectContaining({
            ...logData,
            createdAt: expect.any(Date),
            id: expect.any(String)
        }));

        await LogModel.findByIdAndDelete( log.id );

    });

    test('Should return the schema object', async ()=>{

        const schema = LogModel.schema.obj;
        //console.log(schema);

        expect( schema ).toEqual( expect.objectContaining({
                message: { type: expect.any(Function), require: true },
                origin: { type: expect.any(Function) },
                level: {
                  type: expect.any(Function),
                  enum: [ 'low', 'medium', 'high' ],
                  default: 'low'
                },
                createdAt: { type: expect.any(Function), default: expect.any(Date) }
              
        }));
        
    });



});