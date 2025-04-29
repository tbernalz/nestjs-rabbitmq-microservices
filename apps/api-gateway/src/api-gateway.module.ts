import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { ApiGatewayController } from './api-gateway.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RabbitMQModule.forRoot({
      exchanges: [{ name: 'order_exchange', type: 'topic' }],
      uri: process.env.RABBITMQ_URI || '',
    }),
  ],
  controllers: [ApiGatewayController],
})
export class ApiGatewayModule {}
