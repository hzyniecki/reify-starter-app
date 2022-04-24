import { Component, OnInit } from '@angular/core';
import { ReifyService } from '../services/reify.service';

@Component({
  selector: 'app-reify',
  templateUrl: './reify.component.html',
  styleUrls: ['./reify.component.scss'],
})
export class ReifyComponent implements OnInit {
  displayedColumns: string[] = ['available', 'pending', 'status'];

  constructor(public ReifyService: ReifyService) {}

  ngOnInit(): void {
    this.ReifyService.getPetStoreInventory();
  }
}
