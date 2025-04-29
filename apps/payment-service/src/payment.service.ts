import { Injectable, Logger } from '@nestjs/common';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class PaymentService {
  private readonly logger = new Logger(PaymentService.name);

  @RabbitSubscribe({
    exchange: 'order_exchange',
    routingKey: 'order.created',
    queue: 'payment-service-queue',
  })
  public async handleOrderCreated(order: any) {
    this.logger.log(`Processing payment for order: ${JSON.stringify(order)}`);
  }
}
