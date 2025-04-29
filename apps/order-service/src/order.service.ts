import { Injectable, Logger } from '@nestjs/common';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class OrderService {
  private readonly logger = new Logger(OrderService.name);

  @RabbitSubscribe({
    exchange: 'order_exchange',
    routingKey: 'order.create',
    queue: 'order-service-queue',
  })
  public async handleOrderCreated(order: any): Promise<void> {
    this.logger.log(`Received order to create:: ${JSON.stringify(order)}`);
  }
}
