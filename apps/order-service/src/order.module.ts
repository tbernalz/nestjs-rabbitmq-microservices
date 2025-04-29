import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RabbitMQModule.forRoot({
      exchanges: [{ name: 'order_exchange', type: 'topic' }],
      uri: process.env.RABBITMQ_URI || '',
    }),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
