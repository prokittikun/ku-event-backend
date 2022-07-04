import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LogService } from './services/log.service';
import { ServiceAccount } from "firebase-admin";
import * as admin from 'firebase-admin';
import * as serviceAccount from './auth/firebaseServiceAccount.json';
const logService = new LogService('main');

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  // Set the config options
  // const adminConfig: ServiceAccount = {
  //   "projectId": serviceAccount.project_id,
  //   "privateKey": serviceAccount.private_key.replace(/\\n/g, '\n'),
  //   "clientEmail": serviceAccount.client_email,
  // };
  // // Initialize the firebase admin app
  // admin.initializeApp({
  //   credential: admin.credential.cert(adminConfig),
  //   databaseURL: "https://ku-events.firebaseio.com",
  // });
  
  app.enableCors();
  logService.debug('start ... 3000');
  await app.listen(3000);
}
bootstrap();
