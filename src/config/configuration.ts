import { Transport } from '@nestjs/microservices';

export default () => ({
  port: parseInt(process.env.PORT, 10) || 4000,
  transcript: {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL || 'amqp://192.168.43.170:30072'],
      queue: process.env.RABBITMQ_ANALYTICS_QUEUE_NAME || 'analytics',
      noAck: false,
      queueOptions: {
        durable: true,
      },
    },
  },
  dbinterface: {
    url: process.env.DBINTERFACE_URL || 'http://localhost:4000',
  },
  // asr: {
  //   // Connect to the asr exchange
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: [process.env.RABBITMQ_URL],
  //     noAck: false,

  // }
});
