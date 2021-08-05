import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesModule } from './articles/articles.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    ArticlesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'temp.db',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
