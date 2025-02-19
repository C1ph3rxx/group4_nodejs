import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('users')  // Tags the controller for grouping in Swagger UI
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({summary: 'Create new user'})
  @ApiResponse({status: 201, description: 'User successfully created.'})
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }


  @Get()
  @ApiOperation({summary: 'Get all users with optional variable parameters '})
  @ApiQuery({name:'page', description:'Used for pagination, Every page consists of 10 users', required: false})
  @ApiQuery({name:'sortBy', description: 'Used for sorting the list of users by Registered Date', required: false})
  @ApiResponse({status: 200, description: 'Query successful'})
  findAll(@Query() args : Record< string, string > ) {
    return this.userService.findAll(args);
  }


  @Get('/status/:status')
  @ApiOperation({summary: 'Get count of user by status filter'})
  @ApiParam({name:'status', description: 'active | inactive | total '})
  @ApiResponse({status:200, description:'Status count returned'})
  findByStatus(@Param('status') status: string) {
    return this.userService.findByStatus(status)
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update user active status by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'Status updated.' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({summary:'Delete user by ID'})
  @ApiParam({name: 'id', description: 'User ID' })
  @ApiResponse({status:200, description: 'User deleted'})
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
