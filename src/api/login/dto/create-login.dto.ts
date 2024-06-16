import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { Type } from "class-transformer";
import { IsNotEmpty, IsString, IsOptional, ValidateNested, IsEmail } from "class-validator";
import { Types } from "mongoose";

export class CreateLoginDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        required: true,
        example: 'Rangana',
        description: 'User name',
    })
    public userName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: 'test@123',
        description: 'User password',
    })
    public password: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({
        example: 'tekroi@gmail.com',
        description: 'User email address',
    })
    public email: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: '9999999999',
        description: 'Mobile',
    })
    public mobile: string;
}
