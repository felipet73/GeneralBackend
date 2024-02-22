import {envs} from './envs.plugin';

describe('envs.plugin.ts', ()=>{

    test('shoud return env options',()=>{
        //console.log(envs);
        expect(envs).toEqual({
            PORT: 3000,
            MAILER_SERVICE: 'gmail',
            MAILER_EMAIL: 'felipet79@gmail.com',
            MAILER_SECRET_KEY: 'ffmwacjlwoqnbudq',
            PROD: false,
            MONGO_URL: 'mongodb://felipe:Flipo123t@localhost:27017',
            MONGO_DB_NAME: 'NOC-TEST',
            MONGO_USER: 'felipe',
            MONGO_PASS: 'Flipo123t'
        });
    });

    test('shoud return error if not foud env', async ()=>{
        jest.resetModules();
        process.env.PORT = 'ABC';
        
        try{
            await import('./envs.plugin');
            expect(true).toBe(false);
        } catch (error) {
            //console.log(error);
            expect(`${error}`).toContain('"PORT" should be a valid integer');
        }

    });




});
