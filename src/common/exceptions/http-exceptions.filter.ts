// import { FastifyReply, FastifyRequest } from 'fastify';
// import {
//   Catch,
//   ArgumentsHost,
//   HttpException,
//   UnprocessableEntityException,
// } from '@nestjs/common';
// import { BaseExceptionFilter } from '@nestjs/core';
// import { Logger as logger } from '@nestjs/common';

// @Catch()
// export class AllExceptionsFilter extends BaseExceptionFilter {
//   catch(exception: Error, host: ArgumentsHost): unknown {
//     const h = host.switchToHttp();
//     const res = h.getResponse<FastifyReply>();
//     const req = h.getRequest<FastifyRequest>();

//     const log = { req: req.raw };

//     if (exception instanceof HttpException) {
//       logger.error(
//         Object.assign(log, { res: exception.getResponse() }),
//         exception.message,
//       );

//       return super.catch(exception, host);
//     }

//     const r = new UnprocessableEntityException(exception.message);
//     const rr = r.getResponse();

//     logger.error(Object.assign(log, { res: rr }), r.message);

//     return res.status(r.getStatus()).send(rr);
//   }
// }
