import { MongoDatabase } from './init';
import mongoose from 'mongoose';

describe('init Mongodb', () => {

    afterAll(()=>{
        mongoose.connection.close();
    });

    test('should connect to Mongodb', async () => {
        //console.log(process.env.MONGO_URL,process.env.MONGO_DB_NAME);
        const connected = await MongoDatabase.connect({
            dbName:process.env.MONGO_DB_NAME!,
            mongoUrl:process.env.MONGO_URL!
        });
        expect(connected).toBe(true);
    });

    test('should throw an error', async () => {
        
        try{
            const connected = await MongoDatabase.connect({
                dbName:process.env.MONGO_DB_NAME!,
                mongoUrl:process.env.MONGO_URL+'50'!
            });
            expect(connected).toBe(false);    
        }catch(error){

        }
        

    });


});
