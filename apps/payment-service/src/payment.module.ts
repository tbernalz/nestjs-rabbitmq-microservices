import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { PaymentService } from './payment.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RabbitMQModule.forRoot({
      exchanges: [{ name: 'order_exchange', type: 'topic' }],
      uri: process.env.RABBITMQ_URI || '',
    }),
  ],
  providers: [PaymentService],
})
export class PaymentModule {}
