import { app } from './app'
import mongoose from 'mongoose';
import { DB } from './config';


async function main() {
    
    await mongoose.connect(DB.URL);
    console.log('connect to database 🌌​')

    app.listen(app.get('PORT'));
    console.log(`server is run port ${app.get('PORT')} 🚀​`);
     
}

main();