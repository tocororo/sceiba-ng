/*
 *   Copyright (c) 2020 Universidad de Pinar del Río "Hermanos Saíz Montes de Oca"
 *   All rights reserved.
 */

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetadataService } from 'toco-lib';

@Component({
    selector: 'toco-static-pages',
    templateUrl: './static-pages.component.html',
    styleUrls: ['./static-pages.component.scss']
})
export class StaticPagesComponent implements OnInit {

    @Input() public src: string;

    @Input() public title: string;

    constructor(private metadata: MetadataService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        if (this.src == undefined) this.src = '';
        if (this.title == undefined) this.title = '';
        // this.metadata.setTitleDescription(this.title, '');

        this.activatedRoute.data.subscribe({
            next: (data) => {
                if (data) {
                    this.src = data['src'];
                    this.title = data['title'];
                    // this.metadata.setTitleDescription(this.title, '');
                }

            },
            error: (e) => {console.log(e);},
            complete: () => {}
        });
    }

}
