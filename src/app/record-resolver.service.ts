import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { EnvService, Record, SearchResponse, SearchService } from 'toco-lib';

@Injectable({
  providedIn: 'root'
})
export class RecordResolverService implements Resolve<SearchResponse<Record>> {

  private prefix = 'records';

  private http: HttpClient;

  constructor(
    private router: Router, 
    private service: SearchService, 
    private env: EnvService, 
    private handler: HttpBackend) { 

      this.http = new HttpClient(handler);
    }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): SearchResponse<Record> | Observable<SearchResponse<Record>> | Promise<SearchResponse<Record>> {
    let uuid = route.paramMap.get('uuid');
		return this.getRecordById(uuid).pipe(
            take(1),
            map(node => {
                if (node) {
                    return node;
				}
				else {
                    this.router.navigate(['/']);
                }
            })
        );
  }

  getRecordById(id: string): Observable<SearchResponse<Record>> {
    const req = this.env.sceibaApi + this.prefix + '/' + id;

    return this.http.get<SearchResponse<Record>>(req);
  }
}
