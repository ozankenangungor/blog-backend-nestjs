import { BadRequestException, Body, Inject, Injectable, RequestTimeoutException } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { TagsService } from 'src/tags/providers/tags.service';
import { PatchPostDto } from '../dtos/patch-post.dto';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { GetPostsDto } from '../dtos/get-post.dto';
import { PaginationProvider } from 'src/common/pagination/providers/pagination.provider';

@Injectable()
export class PostsService {
    constructor(
        private readonly usersService: UsersService,
        private readonly tagsService: TagsService,
        @InjectRepository(MetaOption)
        private readonly metaOptionRepository: Repository<MetaOption>,
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>,
        private readonly paginationProvider: PaginationProvider
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


    public async findAll(userId: string, postQuery: GetPostsDto) {

        // let posts = await this.postRepository.find({
        //     relations: {
        //         metaOptions: true,
        //         //author: true // same as eager: true
        //         tags: true
        //     },
        //     take: postQuery.limit,
        //     skip: (postQuery.page -1) * postQuery.limit
        // });

        let posts = await this.paginationProvider.paginateQuery({
          limit: postQuery.limit,
          page: postQuery.page
        }, this.postRepository);
        console.log(posts)

        return posts;
    }

    public async delete(id: number) {
        // Delete the post
        await this.postRepository.delete(id);
        // confirmation
        return {deleted: true, id};
    }

    public async update(patchPostDto: PatchPostDto) {
        let tags = undefined;
        let post = undefined;
    
        // Find the Tags
        try {
          tags = await this.tagsService.findMultipleTags(patchPostDto.tags);
        } catch (error) {
          throw new RequestTimeoutException(
            'Unable to process your request at the moment please try later',
            {
              description: 'Error connecting to the database',
            },
          );
        }
    
        /**
         * If tags were not found
         * Need to be equal number of tags
         */
        if (!tags || tags.length !== patchPostDto.tags.length) {
          throw new BadRequestException(
            'Please check your tag Ids and ensure they are correct',
          );
        }
         // Find the Post
    try {
        // Returns null if the post does not exist
        post = await this.postRepository.findOneBy({
          id: patchPostDto.id,
        });
      } catch (error) {
        throw new RequestTimeoutException(
          'Unable to process your request at the moment please try later',
          {
            description: 'Error connecting to the database',
          },
        );
      }
  
      if (!post) {
        throw new BadRequestException('The post Id does not exist');
      }
  
      // Update the properties
      post.title = patchPostDto.title ?? post.title;
      post.content = patchPostDto.content ?? post.content;
      post.status = patchPostDto.status ?? post.status;
      post.postType = patchPostDto.postType ?? post.postType;
      post.slug = patchPostDto.slug ?? post.slug;
      post.featuredImageUrl =
        patchPostDto.featuredImageUrl ?? post.featuredImageUrl;
      post.publishOn = patchPostDto.publishOn ?? post.publishOn;
  
      // Assign the new tags
      post.tags = tags;
  
      // Save the post and return
      try {
        await this.postRepository.save(post);
      } catch (error) {
        throw new RequestTimeoutException(
          'Unable to process your request at the moment please try later',
          {
            description: 'Error connecting to the database',
          },
        );
      }
      return post;
    }
    
}
