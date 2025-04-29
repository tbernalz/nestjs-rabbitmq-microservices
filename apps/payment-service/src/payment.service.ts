import { Injectable, Logger } from '@nestjs/common';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class PaymentService {
  private readonly logger = new Logger(PaymentService.name);

  @RabbitSubscribe({
    exchange: 'order_exchange',
    routingKey: 'order.create',
    queue: 'payment-service-queue',
  })
  public async handleOrderCreated(order: any): Promise<void> {
    this.logger.log(`Processing payment for order: ${JSON.stringify(order)}`);
  }
}
