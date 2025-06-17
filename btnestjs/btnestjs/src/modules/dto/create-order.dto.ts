import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsInt, IsNotEmpty, Min, ValidateNested } from "class-validator";

class OrderDto {
 @Type(() => Number)
  @IsInt()
  @Min(1, {
    message: "ProductId must not be less than 1!"
  })
  productId: number;
  @Type(() => Number)
  @IsInt()
  @Min(1, {
    message: "Quantity must not be less than 1!"
  })
  quantity: number;
}
export default class CreateOrderDto {
  @IsNotEmpty({
    message: "CustomName is not empty!"
  })
  customerName: string;
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({each: true})
  @Type(() => OrderDto)
  items: OrderDto[];
}
