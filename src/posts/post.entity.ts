import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CreatePostMetaOptionsDto } from '../meta-options/dtos/create-post-meta-options.dto';
import { PostType } from './enums/post-type.enum';
import { postStatus } from './enums/post-status.enum';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { User } from 'src/users/user.entity';
import { Tag } from 'src/tags/tag.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 512,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'enum',
    enum: PostType,
    nullable: false,
    default: PostType.POST,
  })
  postType: PostType;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
    unique: true,
  })
  slug: string;

  @Column({
    type: 'enum',
    enum: postStatus,
    nullable: false,
    default: postStatus.DRAFT,
  })
  status: postStatus;

  @Column({
    type: 'text',
    nullable: true,
  })
  content?: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  schema?: string;

  @Column({
    type: 'varchar',
    length: 1024,
    nullable: true,
  })
  featuredImageUrl?: string;

  @Column({
    type: 'timestamp', // 'datetime' in mysql
    nullable: true,
  })
  publishOn?: Date;


  @OneToOne(() => MetaOption, (metaOptions) => metaOptions.post, {cascade: true, eager: true }) //! cascade: ['remove','insert']
  metaOptions?: MetaOption;

  @ManyToOne(() => User, (user) => user.posts, {eager: true})
  author: User;

  @ManyToMany(()=> Tag )
  @JoinTable()
  tags?: Tag[];
}