import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import * as moment from 'moment';

@Component({
  selector: 'app-monthcontribution',
  templateUrl: './monthcontribution.component.html',
  styleUrls: ['./monthcontribution.component.css']
})
export class MonthcontributionComponent implements OnInit {
  monthContribution:any
 
  @Input() i: any;
  @Input() visible: any;
  @Input() j: any;
  @Input() contributionValue:any;
  @Input() month:any;

  @Output() getValues = new EventEmitter
  
  display:any
  constructor() { }

  ngOnInit(): void {
  }
  showVal(){
    const data = {
      // month : moment().month(this.month).format('M'),
      value: this.monthContribution
    }
    this.getValues.emit(data)
  }
     
}
