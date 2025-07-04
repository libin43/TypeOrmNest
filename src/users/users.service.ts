import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { Document } from 'src/entities/document.entity';
import { CreateUserWithDocumentDto } from './dto/create-userDoc.dto';
import { UpdateUserWithDocumentDto } from './dto/update-userDoc.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto) {

    const user = await this.userRepository.insert({
      firstname: createUserDto.fname,
      lastname: createUserDto.lname,
      contact: createUserDto.contact,
      password: createUserDto.password,
    })
    return user
  }

  async createUserWithDocument(createUserWithDocumentDto: CreateUserWithDocumentDto) {
    const userWithDoc = this.userRepository.create({
      firstname: createUserWithDocumentDto.user.fname,
      lastname: createUserWithDocumentDto.user.lname,
      contact: createUserWithDocumentDto.user.contact,
      password: createUserWithDocumentDto.user.password,
      documents: [
        {
          doc_name: createUserWithDocumentDto.document.doc_name,
          doc_string: createUserWithDocumentDto.document.doc_string,
          doc_type: createUserWithDocumentDto.document.doc_type
        }
      ]
    })
    const res = await this.userRepository.save(userWithDoc)
    return res
  }

  async updateUserWithDocument(updateUserWithDocumentDto: UpdateUserWithDocumentDto, userId: string, id: string) {

    console.log(id, 'doc id')

    const user = await this.userRepository
      .createQueryBuilder('user')
      .innerJoinAndSelect('user.documents', 'document', 'document.id = :docId', { docId: id })
      .where('user.id = :userId', { userId })
      .getOne();

    console.log(user, 'its user reponse')

    if (!user) {
      console.error('User id not found.')
      throw new NotFoundException('User not found')
    }

    user.firstname = updateUserWithDocumentDto.user?.fname ?? user.firstname
    user.lastname = updateUserWithDocumentDto.user?.lname ?? user.lastname
    user.contact = updateUserWithDocumentDto.user?.contact ?? user.contact
    user.password = updateUserWithDocumentDto.user?.password ?? user.password
    user.documents[0].doc_name = updateUserWithDocumentDto.document?.doc_name ?? user.documents[0].doc_name
    user.documents[0].doc_type = updateUserWithDocumentDto.document?.doc_type ?? user.documents[0].doc_type
    user.documents[0].doc_string = updateUserWithDocumentDto.document?.doc_string ?? user.documents[0].doc_string


    const res = await this.userRepository.save(user)
    return res
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
    const user = await this.userRepository.findBy({ id })
    return user
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
