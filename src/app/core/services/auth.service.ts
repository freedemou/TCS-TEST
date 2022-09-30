import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Authenticate } from '../../auth/models/user.model';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  login({ username, password }: Authenticate) {
    if (username === 'test01' && password === 'test01') {
      return of({ name: username });
    }

    Swal.fire({
      title: 'Advertencia!',
      text: 'Invalid username or password',
      icon: 'warning',
      confirmButtonText: 'Close'
    })
    
    throw new Error('Invalid username or password')
  }

}
