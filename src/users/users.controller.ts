import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserWithDocumentDto } from './dto/create-userDoc.dto';
import { UpdateUserWithDocumentDto } from './dto/update-userDoc.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('/document')
  createUserWithDoc(@Body() createUserWithDocumentDto: CreateUserWithDocumentDto){
    return this.usersService.createUserWithDocument(createUserWithDocumentDto)
  }

  @Put(':userId/document/:id')
  updateUserWtihDoc(
    @Body() updateUserWithDocumentDto: UpdateUserWithDocumentDto,
    @Param() id: {id: string, userId: string}
  ){
    console.log(id,'obj')
    return this.usersService.updateUserWithDocument(updateUserWithDocumentDto,id.userId, id.id)
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
