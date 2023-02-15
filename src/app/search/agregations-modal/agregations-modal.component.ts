import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { Aggr, SearchService } from 'toco-lib';
@Component({
  selector: 'app-agregations-modal',
  templateUrl: './agregations-modal.component.html',
  styleUrls: ['./agregations-modal.component.scss']
})
export class AgregationsModalComponent implements OnInit {
  typesOfAgregations: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers','Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers','Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers','Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  constructor(public dialog: MatDialog,  private _searchService: SearchService,) { }

  ngOnInit() {
    this._searchService.getAggregation("creators",20).subscribe((agregations:any)=>{console.log("agregaciones",agregations);
    })
  }

}
