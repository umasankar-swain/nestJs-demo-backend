import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, userDocument } from './entities/login.entity';
import { Model } from 'mongoose';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel(User.name) private userModel: Model<userDocument>,
  ) { }

  async create(createLoginDto: CreateLoginDto) {
    const newUser: any = await new this.userModel({
      ...createLoginDto,
    }).save()
    return newUser;
  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
