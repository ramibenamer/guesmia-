// listrdv.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdvService } from '../rdv.service'; // Import the service

@Component({
  selector: 'app-listrdv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listrdv.component.html',
  styleUrls: ['./listrdv.component.css'],
})
export class ListrdvComponent implements OnInit {
  rdvList: any[] = [];
  selectedRdv: any = null;

  constructor(private rdvService: RdvService) {}

  ngOnInit() {
    this.rdvService.rdvs$.subscribe((rdvs) => {
      this.rdvList = rdvs; // Subscribe to rdvs data
    });
  }

  showDetails(rdv: any) {
    this.selectedRdv = rdv;
  }

  closeDetails() {
    this.selectedRdv = null;
  }
}