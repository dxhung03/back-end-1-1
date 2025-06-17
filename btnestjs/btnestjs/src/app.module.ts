import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { OrdersModule } from './modules/orders/orders.module';
import { AuthsModule } from './modules/auths/auths.module';

@Module({
  imports: [UsersModule, OrdersModule, AuthsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
