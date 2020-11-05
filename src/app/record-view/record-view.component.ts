import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Record, SearchResponse } from 'toco-lib';

@Component({
  selector: 'app-record-view',
  templateUrl: './record-view.component.html',
  styleUrls: ['./record-view.component.scss']
})
export class RecordViewComponent implements OnInit {

  public record: Record;

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }

  public ngOnInit(): void
	{
		/* Gets the `Organization` data. */
		this._activatedRoute.data.subscribe(
			(data) => {
				this.record = data.record.metadata;
				console.log(data);
        
			}
		);
	}

}
