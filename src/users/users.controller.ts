import { Body, Controller, Get, Param, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-user-params.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService
    ){}

    @Get('/:id?')
    @ApiOperation({
        summary: 'Fetches a list of registered users on the application'
    })
    @ApiResponse({
        status: 200,
        description: 'Users fetched successfully based on the query'
    })
    @ApiQuery({
        name: 'limit',
        type: 'number',
        required: false,
        description: 'The number of entries returned per query',
        example: 10
    })
    @ApiQuery({
        name: 'page',
        type: 'number',
        required: false,
        description: 'The position of the page number that you want the API to return',
        example: 1
    })
    public getUsers(
        @Param() getUserParamDto: GetUsersParamDto, 
        @Query('limit') limit: number,
        @Query('page') page: number
    ){
        return this.usersService.findAll(getUserParamDto, limit, page);
    }

    @Post() 
    public createUsers(@Body() createUserDto : CreateUserDto ) {
        return this.usersService.createUser(createUserDto);
    }

    @Patch()
    public patchUser(@Body() patchUserDto : PatchUserDto) {
        return 5
    }
}
