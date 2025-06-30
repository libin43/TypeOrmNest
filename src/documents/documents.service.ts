import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Document } from 'src/entities/document.entity';

@Injectable()
export class DocumentsService {

  constructor(
    @InjectRepository(Document)
    private readonly documentRepository: Repository<Document>
  ){}
  async create(createDocumentDto: CreateDocumentDto) {

    const doc = await this.documentRepository.insert({
      doc_name: createDocumentDto.doc_name,
      doc_string: createDocumentDto.doc_string,
      doc_type: createDocumentDto.doc_type
    })
    return doc
  }

  findAll() {
    return this.documentRepository.find()
  }

  async findOne(id: string) {
    const doc = await this.documentRepository.findBy({id})
    return doc
  }

  update(id: number, updateDocumentDto: UpdateDocumentDto) {
    return `This action updates a #${id} document`;
  }

  remove(id: number) {
    return `This action removes a #${id} document`;
  }
}
