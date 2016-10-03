import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Credentials } from './auth-ngrx.model';
import { Observable } from 'rxjs/Observable';
import { User } from './auth-ngrx.model';

@Injectable()
export class AuthService {

  constructor(private http: Http) {
  }

  login(credentials: Credentials): Observable<{ user: User; token: string }> {

    return Observable.create((observer: any) => {

      if (!credentials.username) {
        observer.error({
          errorCode: 666,
          errorMessage: 'user cannot be an empty!'
        });
      } else {
        observer.next({
          'token': 'KHFDK123',
          'user': {
            'username': 'disqus_api',
            'about': '',
            'name': 'disqus_api',
            'url': '',
            'isFollowing': false,
            'isFollowedBy': false,
            'profileUrl': 'http://disqus.com/disqus_api/',
            'avatar': {
              'permalink': 'http://disqus.com/api/users/avatars/disqus_api.jpg',
              'cache': 'http://mediacdn.disqus.com/1091/images/noavatar92.png'
            },
            'id': '1',
            'isAnonymous': false,
            'email': 'example@disqus.com'
          }
        });
      }

      observer.complete();
    });
  }
}
