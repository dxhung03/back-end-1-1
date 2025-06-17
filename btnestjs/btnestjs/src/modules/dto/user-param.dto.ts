import { Type } from "class-transformer";
import { IsInt, Min } from "class-validator";

export default class UserParamDto {
  @IsInt({
    message: "Id must be an integer"
  })
  @Type(() => Number)
  id: number;
}