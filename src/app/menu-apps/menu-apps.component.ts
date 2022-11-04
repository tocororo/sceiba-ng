
import { Component, OnInit } from '@angular/core';
import { EnvironmentImpl } from 'src/environments/environment.prod';
import { Environment } from 'toco-lib';

@Component({
    selector: 'sceiba-menu-apps',
    templateUrl: './menu-apps.component.html',
    styleUrls: ['./menu-apps.component.scss']
})
export class SceibaMenuAppsComponent implements OnInit{

    public env;

    public constructor(
        private _env: Environment
    ) { }

    ngOnInit(){
        this.env = this._env;
    }

}
