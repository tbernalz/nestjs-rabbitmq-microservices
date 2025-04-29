import { Injectable } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class OrderService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  async createOrder(order: any): Promise<{ message: string }> {
    await this.amqpConnection.publish('order_exchange', 'order.created', {
      ...order,
      createdAt: new Date(),
    });
    return { message: 'Order created and event published' };
  }
}
