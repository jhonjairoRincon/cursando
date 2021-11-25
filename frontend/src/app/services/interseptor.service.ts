import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class InterseptorService  implements HttpInterceptor {

  constructor(private authServices : AuthService) { }

  intercept(req:any, next:any) {
    let tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authServices.getToken()}`
      }
    });
    return next.handle(tokenizeReq);
  }
}
