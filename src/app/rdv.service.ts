// rdv.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RdvService {
  private rdvSubject = new BehaviorSubject<any[]>([]); // Store rendezvous
  rdvs$ = this.rdvSubject.asObservable();

  constructor() {}

  // Add a new rendezvous
  addRdv(rdv: any) {
    const currentRdvs = this.rdvSubject.getValue();
    currentRdvs.push(rdv);
    this.rdvSubject.next(currentRdvs);
  }
}