import { IsEnum, IsOptional, IsString } from "class-validator"


export enum DocumentType {
    PASSPORT = 'PASSPORT',
    EMIRATESID = 'EMIRATESID'
}

export class CreateDocumentDto {

    @IsOptional()
    @IsString()
    doc_string: string

    @IsOptional()
    @IsString()
    user_id: string

    @IsEnum(DocumentType)
    doc_type: DocumentType

    @IsString()
    doc_name: string
}
