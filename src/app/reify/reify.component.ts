import { Component, OnInit } from '@angular/core';
import { ReifyService } from '../services/reify.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reify',
  templateUrl: './reify.component.html',
  styleUrls: ['./reify.component.scss'],
})
export class ReifyComponent implements OnInit {
  public petList: any[] = [];

  constructor(
    public ReifyService: ReifyService,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getPetStoreInventory();
  }

  getPetStoreInventory() {
    this.petList = [];
    this.ReifyService.getPetStoreInventory().subscribe((res) => {
      this.petList.push(res);
      console.log(this.petList, 'petlist');
    });
    (error) => {
      this.toastr.error('failed to get ...' + error);
    };
  }
}
