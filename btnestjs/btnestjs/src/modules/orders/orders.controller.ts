import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import CreateOrderDto from '../dto/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @Post()
  create(@Body() body: CreateOrderDto){
    return body;
  }
}
