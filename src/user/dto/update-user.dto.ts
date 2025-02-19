import { PartialType, PickType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';



  export class UpdateUserDto extends PickType(CreateUserDto, ['isActive'] as const) {
    @ApiProperty({
      description: 'The status of the user',
      example: true,  // Example to show in Swagger
      type: Boolean,        // Ensure that Swagger treats this as a boolean type
    })
    isActive: boolean;
  }