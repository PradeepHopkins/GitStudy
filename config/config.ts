import dotenv from "dotenv";
import path from 'path';

const environment = process.env.TEST_ENV || 'qa';

const envFile = path.resolve(process.cwd(),`${environment}.env`);

dotenv.config({path: envFile,});

console.log(`Running test against: ${environment.toLocaleLowerCase()}`);
