import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { HttpArgumentsHost } from "@nestjs/common/interfaces";

@Catch()
export default class CatchException implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx: HttpArgumentsHost = host.switchToHttp();
        const response = ctx.getResponse();

        let httpError = null;
        console.log(exception);

        if (exception instanceof HttpException) {
            httpError = {
                status: exception.getStatus(),
                message: exception.message,
            };
        }
        else {
            httpError = {
                status: 500,
                message: 'server Error',
            };
        }
        const {status, message} = httpError;

        return response.status(status).json({
            status,
            message,
        });
    }
}