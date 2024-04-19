import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor () { }

  addUser(user: string): void {
    //BehaviorSubject, il faut récup la valeur actuelle avant d'en ajouter une
    const currentUsers: string[] = this.users.getValue();
    console.log('currentUsers: ', currentUsers);

    // ajout du nouvel user à la 
    // destructuration pour récupérer la liste actuelle et y ajouter le user qu'on est entrain d'intégrer
    const updatedUsers: string[] = [...currentUsers, user];
    console.log('updatedUsers: ', updatedUsers);
    
    // mise à jour de la valeur du BehaviorSubject
    this.users.next(updatedUsers);
  }
}
