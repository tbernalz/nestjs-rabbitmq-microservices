# 🐇 RabbitMQ-based Microservices with NestJS

A production-oriented microservices hands-on using [NestJS](https://nestjs.com/), [RabbitMQ](https://www.rabbitmq.com/), and a microservices architecture with request-response and event-driven communication patterns.

## 🧠 Overview

**This project demonstrates:**

- A clean separation of concerns using Microservice Architecture
- Asynchronous messaging publishing and subscription via RabbitMQ
- Event-driven communication communication using `@golevelup/nestjs-rabbitmq`
- An API Gateway acting as the HTTP entrypoint
- Dockerized RabbitMQ setup for local development

## 📑 Table of Contents

- [🧠 Overview](#-overview)
- [📚 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Services Overview](#-services-overview)
- [🐇 RabbitMQ Setup](#-rabbitmq-setup)
- [📦 Running Locally](#-running-locally)
- [🧪 Testing the Flow](#-testing-the-flow)
- [✅ Best Practices Followed](#-best-practices-followed)
- [🧭 Next Steps / Ideas](#-next-steps--ideas)
- [📄 License](#-license)
- [🌟 Contributing](#-contributing)
- [✉️ Contact](#️-contact)

## 📚 Tech Stack

- **NestJS** – Modular, extensible Node.js framework
- **RabbitMQ** – Message broker for decoupled service communication
- **@golevelup/nestjs-rabbitmq** – RabbitMQ integration for NestJS
- **Docker & Docker Compose** – Local infrastructure
- **TypeScript** – Typed JavaScript

[<img src = https://seeklogo.com/images/N/nestjs-logo-09342F76C0-seeklogo.com.png alt="nestjs" width="40" height="40">](https://nestjs.com/)
[<img src = https://images.seeklogo.com/logo-png/27/1/rabbitmq-logo-png_seeklogo-273837.png alt="rabbitmq" width="40" height="40">](https://www.rabbitmq.com/)
[<img src = https://images.seeklogo.com/logo-png/35/1/docker-logo-png_seeklogo-352738.png alt="docker" width="40" height="40">](https://www.docker.com/)
[<img src = https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png alt="typescript" width="40" height="40">](https://www.typescriptlang.org/)

## 📁 Project Structure

```
nestjs-rabbitmq-microservices/
├── apps/
│   ├── api-gateway/         # HTTP entrypoint
│   ├── order-service/       # Consumes events
│   └── payment-service/     # Consumes events
├── docker-compose.yml       # RabbitMQ local setup
├── .env.example             # Example environment config
└── README.md

```

## 🚀 Services Overview

**API Gateway**

- Thin HTTP layer (e.g. Accepts HTTP requests like `POST /orders`)
- Sends messages to Order and Payment Services over RabbitMQ

**Order Service**

- Subscribes to `order.create` events
- Reacts by logging or simulating order processing

**Payment Service**

- Subscribes to `order.create` events
- Reacts by logging or simulating payment processing

## 🐇 RabbitMQ Setup

Dockerized RabbitMQ instance via `docker-compose`.

- AMQP: `amqp://localhost:5672`
- Management UI: [http://localhost:15672](http://localhost:15672/)
- Default credentials: `guest` / `guest`

## 📦 Running Locally

**1. Clone the Repo**

```bash
git clone https://github.com/tbernalz/nestjs-rabbitmq-microservices.git
cd nestjs-rabbitmq-microservices

```

**2. Install Dependencies**

```bash
npm install
```

**3. Set up environment variables**

Create a `.env` file in the root directory (same level as `package.json`) and add the following:

```env
# RabbitMQ Configuration
RABBITMQ_URI=amqp://guest:guest@localhost:5672

# Microservice Ports
API_GATEWAY_PORT=3000
ORDER_SERVICE_PORT=3001
PAYMENT_SERVICE_PORT=3002

```

> [!NOTE]
> Copy from the provided .env.example

**4. Start RabbitMQ**

```bash
docker compose up -d

```

**5. Run Services**

Each service can be started independently. In separate terminals:

```bash
# Start API Gateway
npm run start:dev:gateway

# Start Order Service
npm run start:dev:order

# Start Payment Service
npm run start:dev:payment

```

## 🧪 Testing the Flow

1. **Send a request to the API Gateway**

   ```bash
   curl -X POST http://localhost:3000/orders \
     -H "Content-Type: application/json" \
     -d '{"id": "123", "amount": 500}'

   ```

2. **You should see logs in**

   - **API Gateway**: Received message and published event
   - **Order Service**: Subscribed to the event and processed it
   - **Payment Service**: Subscribed to the event and processed it

## ✅ Best Practices Followed

- [x] Decoupled services with single responsibility
- [x] RabbitMQ + Docker Compose for reproducibility
- [x] Message-driven communication
- [x] Scalable consumer queues (RabbitMQ)
- [x] `@golevelup/nestjs-rabbitmq` abstraction

## 🧭 Next Steps / Ideas

- [ ] Add Dead Letter Queue (DLQ) for failed messages
- [ ] Centralized logging (e.g., with Winston)
- [ ] Retry strategy for transient errors
- [ ] Health checks with `@nestjs/terminus`
- [ ] AsyncAPI or OpenAPI event documentation

## 📄 License

This project is licensed under the MIT License.

## 🌟 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

**How can I contribute to the project?**

There are many ways to contribute:

- Give a start to the repo ⭐
- Share the project 🧑‍🤝‍🧑
- Report bugs 🐛
- Suggest new features ⚙️

To report bugs and suggest new features, you can create an issue
[here](https://github.com/tbernalz/nestjs-rabbitmq-microservices/issues).

## ✉️ Contact

**Tomás Bernal Zuluaga**

[tbernalz@eafit.edu.co](mailto:tbernalz@eafit.edu.co) | [LinkedIn](https://www.linkedin.com/in/tbernalz)

<p align="left">
  <a href="https://www.linkedin.com/in/tbernalz">
    <img src="https://skillicons.dev/icons?i=linkedin" />
  </a>
</p>
