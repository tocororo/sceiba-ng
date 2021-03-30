import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetadataService, Record } from 'toco-lib';
//import { MetadataService } from 'toco-lib/lib/core/metadata.service';

@Component({
  selector: 'app-record-view',
  templateUrl: './record-view.component.html',
  styleUrls: ['./record-view.component.scss']
})
export class RecordViewComponent implements OnInit {

  public record: Record;

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private metadata: MetadataService) { }

  public ngOnInit(): void
  {
    console.log('on init... ')
    /* Gets the `Record` data. */
    this._activatedRoute.data.subscribe(
      (data) => {
        this.record = data.record.metadata;
        /* console.log('AAAAAAAAAAAAAA')
        console.log(data); */
        this.metadata.meta.updateTag({name:"DC.title", content:this.record.title});
        this.record.creators.forEach(creator => {
        this.metadata.meta.updateTag({name:"DC.creator", content:creator['name']});
        });
        this.metadata.meta.updateTag({name:"DC.description", content:this.record.description});
        this.metadata.meta.updateTag({name:"DC.publisher", content:this.record.publisher});
        this.record.sources.forEach(source => {
          this.metadata.meta.updateTag({name:"DC.source", content:source});     
        });
        this.record.rights.forEach(right => {
          this.metadata.meta.updateTag({name:"DC.rights", content:right});
        });
        this.record.types.forEach(type => {
          this.metadata.meta.updateTag({name:"DC.type", content:type});
        });
        this.record.formats.forEach(format => {
          this.metadata.meta.updateTag({name:"DC.format", content:format});
        });
        this.metadata.meta.updateTag({name:"DC.language", content:this.record.language});
        this.metadata.meta.updateTag({name:"DC.dateSubmitted", content:this.record.publication_date});
        this.record.contributors.forEach(contributor => {
          this.metadata.meta.updateTag({name:"DC.contributor", content:contributor['name']});
        });
      })                
    /* 
    this.metadata.meta.updateTag({name:"references", content:}); */
  }



}
