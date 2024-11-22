import { AuthService } from 'src/auth/providers/auth.service';
import { GetUsersParamDto } from './../dtos/get-user-params.dto';
import { BadRequestException, forwardRef, HttpException, HttpStatus, Inject, Injectable, RequestTimeoutException } from "@nestjs/common";
import { DataSource, Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { ConfigService, ConfigType } from '@nestjs/config';
import profileConfig from '../config/profile.config';
import { error } from 'console';

@Injectable()
export class UsersService {
    constructor(
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService,
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        @Inject(profileConfig.KEY)
        private readonly profileConfiguration: ConfigType<typeof profileConfig>,

        private readonly dataSource: DataSource
    ){}

    public async createUser(createUserDto: CreateUserDto) {
        let existingUser = undefined;
    
        try {
          // Check if user with email exists
          existingUser = await this.usersRepository.findOne({
            where: {
                email: createUserDto.email
            },
          });
        } catch (error) {
          // Might want to save these errors with more information in a log file or database
          // You don't need to send this sensitive information to user
          throw new RequestTimeoutException(
            'Unable to process your request at the moment please try later',
            {
              description: 'Error connecting to database',
            },
          );
        }
    
        /**
         * Handle exceptions if user exists later
         * */
        if (existingUser) {
          throw new BadRequestException(
            'The user already exists, please check your email',
          );
        }
    
        // Try to create a new user
        //  Handle Exceptions Later
        let newUser = this.usersRepository.create(createUserDto);

    try {
      newUser = await this.usersRepository.save(newUser);
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later',
        {
          description: 'Error connecting to database',
        },
      );
    }

    // Create the user
    return newUser;
  }


    public async findOneById(id: number) {
        return await this.usersRepository.findOneBy({id})
    }
    
    public findAll(
        getUserParamDto: GetUsersParamDto,
        limt: number,
        page: number,
      ) {
        // test the new config
       //console.log(this.profileConfiguration)

       // Custom error
        let loggenIn = false;
        if (!loggenIn) {
          throw new HttpException(
            {
              status: HttpStatus.MOVED_PERMANENTLY,
              error: `The API endpoint doesn't exist anymore`,
              fileName: 'users.service.ts',
              lineNumber: 103,
            },
            HttpStatus.MOVED_PERMANENTLY,
            {
              cause: new Error(),
              description:
                'Occured because the API endpoint was permanently moved to a new location',
            },
          );
        }
      }

    
    }
 
    

