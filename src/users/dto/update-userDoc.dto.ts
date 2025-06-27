import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { CreateUserWithDocumentDto } from './create-userDoc.dto';

export class UpdateUserWithDocumentDto extends PartialType(CreateUserWithDocumentDto) {}
