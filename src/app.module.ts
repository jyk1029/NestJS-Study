import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { configDotenv } from 'dotenv';
import { UserModule } from './user/user.module';
import {User} from "./user/entities/user.entity";
import { FeedModule } from './feed/feed.module';
import {Feed} from "./feed/entities/feed.entity";
import { ChatModule } from './chat/chat.module';

configDotenv({
  path : '../*.env'
})

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true, // 한 번 읽은 환경 변수의 값을 캐싱하여 읽기 속도를 향상하기 위함
      isGlobal: true // ConfigModule을 다른 모든 모듈에서 불러와야하는 번거로움을 피하기 위함
    }
    ), // confing모듈을 통한 process.env객체 사용
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['*/entities/.entity.ts'],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }), UserModule,
    TypeOrmModule.forFeature([User, Feed]),
    FeedModule,
    ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
