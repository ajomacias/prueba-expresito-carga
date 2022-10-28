import { config } from 'dotenv';

config();

class APP {

    static PORT = process.env.PORT ? Number(process.env.PORT) : 8080;
}

class DB {
    
   static URL = process.env.URL || 'mongodb://localhost/prueba-tecnica';

}

export { APP, DB }