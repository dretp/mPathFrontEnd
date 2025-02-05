import {HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import { Observable, Observer } from "rxjs";
import {LoginService} from '../login.service';
import {Injectable} from '@angular/core';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('MHP-TOKEN');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }
}
// new token incetpor
export const tokenInceptor : HttpInterceptorFn = (req,next) =>{
  const token = localStorage.getItem('MHP-TOKEN');

  const newReq = req.clone({
   

  });
  return next(newReq);
}


