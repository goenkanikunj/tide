import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    private addJsonHeader(request: HttpRequest<any>) {
        return request.clone({
            setHeaders: {
                'Content-Type': 'application/json'
            }
        });
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (! request.headers.has('Content-Type')) {
            request = this.addJsonHeader(request);
        }

        return next.handle(request);
    }
}
