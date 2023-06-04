import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";

@Injectable()
export class UndefinedToNullInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        //전부분
        return next.handle().pipe(map((data) => data === undefined ? null : data));
    }
}

//마지막 Return값을 가공하는 기능
//undefined면 null로 바꿔서 리턴