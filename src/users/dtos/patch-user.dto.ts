import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { CreateUserDto } from "./create-user.dto";

export class PatchUserDto extends PartialType(CreateUserDto) {

}