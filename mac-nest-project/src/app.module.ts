import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';

@Module({
  imports: [UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'macnestjs',
      entities: [User],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



//For Mongoose

// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { TransferModule } from './transfer/transfer.module';
// import { MongooseModule } from '@nestjs/mongoose';
// import { ConfigModule } from '@nestjs/config';
// import databaseConfig from './config/database.config';
// import { Connection } from 'mongoose';

// @Module({

//   imports: [
//     ConfigModule.forRoot({
//       load: [databaseConfig],
//       envFilePath: '.env',
//       isGlobal: true,
//     }),
//     MongooseModule.forRootAsync({
//       useFactory: () => ({
//         uri: 'mongodb://localhost:27017/pascalDB',
//       }),
//     }),
//     TransferModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

