import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
      @ApiProperty({
            description: 'The first name of the user',
            example: 'John',
      })
      firstname: string;

      @ApiProperty({
            description: 'The last name of the user',
            example: 'Doe',
      })
      lastname: string;

      @ApiProperty({
            description: 'The gender of the user',
            // example: 'M',
            enumName: 'M | F'
      })
      gender: string;

      @ApiProperty({
            description: 'The  email of the user',
            example: 'JohnDoe@gmail.com',
      })
      email: string;

      @ApiProperty({
            description: 'The phone number of the user',
            example: '123456789',
      })
      phone: string;

      @ApiProperty({
            description: 'The age of the user',
            example: '19',
      })
      age: number;

      @ApiProperty({
            description: 'The date of birth  name of the user',
            example: '2025-02-13',
      })
      dob: string;

      @ApiProperty({
            description: 'The password of the user',
            example: 'eodnhoj',
      })
      password: string;

      @ApiProperty({
            description: 'The url of the user picture',
            example: 'https://picture.com/?user=john_doe',
      })
      picture: string;

      
      isActive: boolean;
      
      createdAt: Date;
       
}

