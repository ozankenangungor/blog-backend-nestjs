import { Body, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { TagsService } from 'src/tags/providers/tags.service';
import { PatchPostDto } from '../dtos/patch-post.dto';

@Injectable()
export class PostsService {
    constructor(
        private readonly usersService: UsersService,
        private readonly tagsService: TagsService,
        @InjectRepository(MetaOption)
        private readonly metaOptionRepository: Repository<MetaOption>,
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>
    ){}

    public async create(@Body() createPostDto: CreatePostDto) {      
        // Find author from database based on authorId
        let author = await this.usersService.findOneById(createPostDto.authorId);
        // Find tags 
        let tags = await this.tagsService.findMultipleTags(createPostDto.tags);

         // Create post
         let post = this.postRepository.create({
            ...createPostDto,
            author: author,
            tags: tags
         });

         // return the post
         return await this.postRepository.save(post);
    }


    public async findAll(userId: string) {

        let posts = await this.postRepository.find({
            relations: {
                metaOptions: true,
                //author: true // same as eager: true
                tags: true
            }
        });


        return posts;
    }

    public async delete(id: number) {
        // Delete the post
        await this.postRepository.delete(id);
        // confirmation
        return {deleted: true, id};
    }

    public async update(patchPostDto: PatchPostDto) {
        // Find new tags
        let tags = await this.tagsService.findMultipleTags(patchPostDto.tags);
    
        // Find the post
        let post = await this.postRepository.findOneBy({
          id: patchPostDto.id,
        });
    
        // Update post related properties
        post.title = patchPostDto.title ?? post.title;
        post.content = patchPostDto.content ?? post.content;
        post.status = patchPostDto.status ?? post.status;
        post.postType = patchPostDto.postType ?? post.postType;
        post.slug = patchPostDto.slug ?? post.slug;
        post.featuredImageUrl =
          patchPostDto.featuredImageUrl ?? post.featuredImageUrl;
        post.publishOn = patchPostDto.publishOn ?? post.publishOn;
    
        // Update the tags
        post.tags = tags;
    
        return await this.postRepository.save(post);
      }x
}
