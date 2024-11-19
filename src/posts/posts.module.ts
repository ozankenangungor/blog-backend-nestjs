import { Module } from '@nestjs/common';
import { PostsService } from './services/posts.service';
import { PostsController } from './posts.controller';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/providers/users.service';

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [UsersModule]
})
export class PostsModule {}
