import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Document } from 'src/entities/document.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Document])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
