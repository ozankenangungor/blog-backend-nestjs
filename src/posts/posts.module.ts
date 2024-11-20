import { Module } from '@nestjs/common';
import { PostsService } from './services/posts.service';
import { PostsController } from './posts.controller';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/providers/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { TagsModule } from 'src/tags/tags.module';

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [UsersModule, TypeOrmModule.forFeature([Post, MetaOption]), TagsModule]
})
export class PostsModule {}
