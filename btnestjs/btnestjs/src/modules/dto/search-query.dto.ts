import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsString, Min } from "class-validator";

export default class SearchQueryDto {
  @IsString()
  @IsNotEmpty({
    message: "Keyword is not empty!"
  })
  keyword: string;
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page: number;
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit: number;
}