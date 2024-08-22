import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PostgresConfigService } from './config/db/postgres.config.service';
import { SocialLinksModule } from './social_links/social_links.module';
import { ProgrammingLanguagesModule } from './programming_languages/programming_languages.module';
import { ProjectsModule } from './projects/projects.module';
import { FieldsOfExpertiseModule } from './fields_of_expertise/fields_of_expertise.module';

@Module({
  imports: [
    UsersModule,
    ProjectsModule,
    SocialLinksModule,
    FieldsOfExpertiseModule,
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
