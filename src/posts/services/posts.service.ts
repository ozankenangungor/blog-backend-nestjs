import { Body, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';

@Injectable()
export class PostsService {
    constructor(
        private readonly usersService: UsersService,
        @InjectRepository(MetaOption)
        private readonly metaOptionRepository: Repository<MetaOption>,
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>
    ){}

    public async create(@Body() createPostDto: CreatePostDto) {      
         // Create post
         let post = this.postRepository.create(createPostDto);

         // return the post
         return await this.postRepository.save(post);
    }


    public async findAll(userId: string) {

        // let posts = await this.postRepository.find({
        //     relations: {
        //         metaOptions: true
        //     }
        // });

        let posts = await this.postRepository.find();

        return posts;
    }

    public async delete(id: number) {
        // Delete the post
        await this.postRepository.delete(id);
        // confirmation
        return {deleted: true, id};
    }
}
