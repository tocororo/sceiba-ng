
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
export class StaticPagesComponent implements OnInit
{
    @Input()
    public src: string;

    @Input()
    public title: string;

    public constructor(private metadata: MetadataService, private activatedRoute: ActivatedRoute)
    { }

    public ngOnInit(): void
    {
        if (this.src == undefined) this.src = '';
        if (this.title == undefined) this.title = '';
        // this.metadata.setStandardMeta(this.title, "", "");

        this.activatedRoute.data.subscribe({
            next: (data) => {
                if (data)
                {
                    this.src = data['src'];
                    this.title = data['title'];

                    /* Example using the `MetadataService`. */
                    this.metadata.setStandardMeta(this.title, "Example--Description", "/assets/images/sceiba-logo-tree.png");
                    this.metadata.meta.updateTag({ name: "description", content: "Example--Description 12345" });
                }

            },
            error: (e) => { console.log(e); },
            complete: () => { }
        });
    }

    // public setTitle(newTitle: string): void
    // {
    //     this.metadata.setStandardMeta(newTitle, "", "");
    // }
}
