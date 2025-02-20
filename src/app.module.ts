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
      host: 'mysql-170cf949-envoes-3d12.e.aivencloud.com',
      port: 18008,
      username: 'avnadmin',
      password: 'AVNS_MRfFR4k0LNqEwrMQL2-',
      database: 'group4_db',
      entities: [User],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
