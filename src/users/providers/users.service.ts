import { AuthService } from 'src/auth/providers/auth.service';
import { GetUsersParamDto } from './../dtos/get-user-params.dto';
import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService,
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ){}

    public async createUser(createUserDto: CreateUserDto) {
        //Check if user exists with same email
        const existingUser = await this.usersRepository.findOne({
            where: {
                email: createUserDto.email
            }
        });

        //Create a new user
        let newUser = this.usersRepository.create(createUserDto);
        return await this.usersRepository.save(newUser);
        
    }
    
 
    
}