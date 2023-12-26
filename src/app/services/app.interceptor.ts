import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FootBallRapiKeyInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Add your API key to the request headers here
    const apiKey = 'bef4083b20723b845766a54fedf3247e';
    const modifiedRequest = request.clone({
      setHeaders: {
        'x-rapidapi-key': `${apiKey}`,
      },
    });

    // Pass the modified request to the next handler
    return next.handle(modifiedRequest);
  }
}
