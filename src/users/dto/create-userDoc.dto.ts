import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { CreateDocumentDto } from "src/documents/dto/create-document.dto";
import { CreateUserDto } from "./create-user.dto";

export class CreateUserWithDocumentDto {
    @ValidateNested()
    @Type(() => CreateUserDto)
    user: CreateUserDto;

    @ValidateNested()
    @Type(() => CreateDocumentDto)
    document: CreateDocumentDto;
}
