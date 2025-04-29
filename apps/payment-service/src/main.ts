import { NestFactory } from '@nestjs/core';
import { PaymentModule } from './payment.module';

async function bootstrap() {
  const app = await NestFactory.create(PaymentModule);
  await app.listen(process.env.PAYMENT_SERVICE_PORT ?? 3000);
}
bootstrap();
