import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ScrollingModule, VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { Aggr, SearchResponse, SearchService,Record, AggregationsSelection } from 'toco-lib';
import { HttpParams } from '@angular/common/http';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
@Component({
  selector: 'app-agregations-modal',
  templateUrl: './agregations-modal.component.html',
  styleUrls: ['./agregations-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AgregationsModalComponent implements OnInit {

@Output()
agregations_selected=new EventEmitter<any>();
page:number=0

pageSize = 10;
pageSizeOptions: number[] = [5, 10, 25, 100];
pageEvent: PageEvent;
aggrsSelection: any = {};



  constructor(public dialog: MatDialog,  private _searchService: SearchService,public dialogRef: MatDialogRef<AgregationsModalComponent>,
   /**
    * with this line , capture the key that was sent from the parent component search who was sending to the modal
    */
    @Inject(MAT_DIALOG_DATA) public agregations: any,
   ) { }


   ngOnInit() {
    console.log("agregations",this.agregations);
    if (this.agregations) {



    }

  console.log("size",this.pageSize);



  }/**
   * that method capture all the parameters we need to make a request and display the response
   * @param event in this event we capture the pageSize ,lenght,pageIndex of the paginator component
   * by carlosmonterrey
   */
  changesOnParameters(event:PageEvent){
    this.pageEvent=event
    console.log(this.pageEvent);
    this.agregations=this.getAgregationsByParameters(this.pageEvent.pageSize,this.pageEvent.pageIndex,this.agregations)
  }
 /**
  *  * work with the parameters locate on pageEvent variable and make a query with them
  * @param pageSize the number of item you are going to have on that page
  * @param pageIndex the number of the page
  * @param agregation_key the key of the agregation
  * @returns a list of the agregations that meet the parameters
  */
  getAgregationsByParameters(pageSize:number,pageIndex:number,agregation_key:string):Aggr[]{
   console.log("cantidad elementos",pageSize);
   console.log("numero de pagina",pageIndex);
   console.log("key de agregaciones",agregation_key);

    return


  }

  onNoClick():void{
    this.dialogRef.close();
  }

  onListSelectionChange(e){
console.log("event",e._value);


  }
}

