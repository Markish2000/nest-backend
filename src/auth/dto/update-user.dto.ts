// Nest
import { PartialType } from '@nestjs/mapped-types';

// Dto
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
