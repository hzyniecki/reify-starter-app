import { Component, OnInit } from '@angular/core';
import { ReifyService } from '../services/reify.service';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

@Component({
  selector: 'app-reify',
  templateUrl: './reify.component.html',
  styleUrls: ['./reify.component.scss'],
})
export class ReifyComponent implements OnInit {
  public: any[] = [];

  public trialsData: any;
  public detailsHidden = {};
  public todaysDate: Date;
  public trialsDate: Date;
  constructor(
    public ReifyService: ReifyService,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getTrialsId();
  }

  getTrialsId() {
    this.ReifyService.getTrialsId().subscribe((res) => {
      this.trialsData = res.trials;
      this.todaysDate = moment().toDate();
      for (let i = 0; i < this.trialsData.length; i++) {
        let trialsDate = res.trials[i].first_enrollment_at;
        const myMomentObject = moment(trialsDate, 'YYYY-MM-DD');
        this.trialsDate = myMomentObject.toDate();
      }
      console.log(res, 'trialsList');
    });
    (error) => {
      this.toastr.error('failed to get ...' + error);
    };
  }

  showDetails(details) {
    this.detailsHidden = !this.detailsHidden;
  }
}
