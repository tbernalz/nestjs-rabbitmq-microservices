import { Body, Controller, Post } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Controller('orders')
export class ApiGatewayController {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  @Post()
  async createOrder(@Body() order: any): Promise<any> {
    await this.amqpConnection.publish('order_exchange', 'order.create', {
      ...order,
      createdAt: new Date(),
    });
    return { message: 'Order published to RabbitMQ' };
  }
}
