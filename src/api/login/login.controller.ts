import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { Response } from 'express';

@Controller('auth')
export class LoginController {
  constructor(private readonly loginService: LoginService) { }

  @Post('capture-user')
  async create(
    @Body() createLoginDto: CreateLoginDto,
    @Res() res: Response,
  ) {
    const result = await this.loginService.create(createLoginDto);
    res
      .status(HttpStatus.OK)
      .send({
        status: 'success', message: 'Data added...', statusCode: 200, data: result
      });
  }

  @Get()
  findAll() {
    return this.loginService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loginService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoginDto: UpdateLoginDto) {
    return this.loginService.update(+id, updateLoginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginService.remove(+id);
  }
}
