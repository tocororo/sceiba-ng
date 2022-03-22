
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { timer } from 'rxjs';

import { getPathWithLangExtension, MetadataService, SearchService } from "toco-lib";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {

  public documentTotal: number = 0;
  public cubanOrganizationTotal: number = 0;

  public homeCharts = {
    type: [],
    total: []
  }
  loadCharts = false;

  slideIndex = 1;

  public constructor(private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _searchService: SearchService,
    private _transServ: TranslateService,
    private metadata: MetadataService)
  { }

  public ngOnInit(): void {
    this._activatedRoute.url.subscribe( () =>{
    this.metadata.meta.updateTag({name:"DC.title", content:"Sceiba Publicaciones Científicas Cubanas"});
    this.metadata.meta.updateTag({name:"DC.description", content:"Repositorio nacional de resultados de Investigación Científicas en Cuba, principalmente de revistas científicas en las universidades y otras organizaciones relacionadas con la actividad científica"});
    })

    // this._searchService.getRecords(null).subscribe({
    //   next: (searchResponse: SearchResponse<Record>) => {

    //     console.log(searchResponse);

    //     this.documentTotal = searchResponse.hits.total;

    //     searchResponse.aggregations['sources'].buckets.forEach(element => {
    //       if (!element.key.localeCompare("Cuba"))
    //         this.cubanOrganizationTotal = element.doc_count;
    //     });

    //     searchResponse.aggregations['keywords'].buckets.forEach(element => {
    //       this.homeCharts.type.push({ name: element.key, value: element.doc_count })
    //     });
    //     this.homeCharts.total = [
    //       { name: "Documentos", value: searchResponse.hits.total },
    //       // {name: "Cubanas", value: this.cubanOrganizationTotal}
    //     ]
    //     this.loadCharts = true;
    //   }
    // });

    this.showSlides(this.slideIndex);
    timer(10000, 10000).subscribe(x => {
      if (this.slideIndex > 4){
        this.slideIndex = 1
      }
      this.slideIndex += 1;
      this.showSlides(this.slideIndex);
    });
  }

  public queryChange(event?: string): void {
    this._router.navigate(["search"], {
      relativeTo: this._activatedRoute,
      queryParams: { q: event },
      queryParamsHandling: "",
    });
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    var i;
    var slides = document.getElementsByClassName("mySlides")
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      this.slideIndex = 1
    }
    if (n < 1) {
      this.slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].setAttribute("style", "display: none;");
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides.item(this.slideIndex - 1).setAttribute("style", "display: block;");
    dots.item(this.slideIndex - 1).className += " active";
  }

  public getPath(path: string): string
  {
    return getPathWithLangExtension(path, this._transServ.currentLang);
  }
}
