import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  async create(createUserDto: CreateUserDto) {

    const user = await this.userRepository.insert({
      firstname: createUserDto.fname,
      lastname: createUserDto.lname,
      contact: createUserDto.contact,
      password: createUserDto.password,
    })
    return user
  }

  findAll() {
    return this.userRepository.find({
      select: {
        id: true,
        firstname: true,
        lastname: true,
        contact: true,
      }
    })
  }

  async findOne(id: string) {
    const user = await this.userRepository.findBy({id})
    return user
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
