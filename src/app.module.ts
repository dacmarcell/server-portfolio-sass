import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PostgresConfigService } from './config/postgres.config.service';
import { SocialLinksModule } from './social_links/social_links.module';
import { ProgrammingLanguagesModule } from './programming_languages/programming_languages.module';

@Module({
  imports: [
    UsersModule,
    SocialLinksModule,
    ProgrammingLanguagesModule,
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
