import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class HttpExceptionFilter<T> implements ExceptionFilter {
  catch(exception, host: ArgumentsHost) {
    const 
      ctx = host.switchToHttp(),
      response = ctx.getResponse(),
      request = ctx.getRequest(),
      status = exception.getStatus()

    response
      .status(status)
      .join({
        code: status,
        date: new Date().toLocaleDateString(),
        path: request.url
      })
  }
}
