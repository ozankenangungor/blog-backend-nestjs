import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/user.entity';
import { TagsModule } from './tags/tags.module';
import { MetaOptionsModule } from './meta-options/meta-options.module';


@Module({
  imports: [UsersModule, PostsModule, AuthModule,
  TypeOrmModule.forRootAsync({
    imports: [],
    inject: [],
    useFactory: () => ({
    type: 'postgres',
    //entities: [User],
    autoLoadEntities: true,
    synchronize: true,
    port: 5432,
    username:'postgres',
    password:'1234',
    host:'localhost',
    database:'nestjs-blog'
  })
  }),
  TagsModule,
  MetaOptionsModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
