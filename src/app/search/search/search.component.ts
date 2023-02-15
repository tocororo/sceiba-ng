import { HttpParams } from "@angular/common/http";
import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { MatDialog, MatDrawer, PageEvent } from "@angular/material";
import {
  ActivatedRoute,
  NavigationExtras,
  Params,
  Router,
} from "@angular/router";
import {
  AggregationsSelection,
  MetadataService,
  Record,
  SearchResponse,
  SearchService,
} from "toco-lib";
import { AgregationsModalComponent } from "../agregations-modal/agregations-modal.component";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  agregations_selected_in_modal: any[];
  aggr_keys: Array<any>;
  search_type: Boolean = true;
  typeChart: "Polar Chart" | "Vertical Bar" | /* "Pie Grid" | */ "Gauge Chart" =
    "Polar Chart";

  layoutPosition = [
    {
      name: "Derecha",
      layout: "row-reverse",
      aling: "center baseline",
      width: "22",
    },
    {
      name: "Izquierda",
      layout: "row",
      aling: "center baseline",
      width: "22",
    },
    {
      name: "Arriba",
      layout: "column",
      aling: "center center",
      width: "90",
    },
    {
      name: "Abajo",
      layout: "column-reverse",
      aling: "center center",
      width: "90",
    },
  ];
  currentlayout = this.layoutPosition[0];
  public changeLayoutPosition(index: number) {
    this.currentlayout = this.layoutPosition[index];
  }
  // end Layout stuff

  // begin paginator stuff
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions: number[] = [5, 15, 25, 50, 100];
  // end paginator stuff

  query = "";
  aggrsSelection: AggregationsSelection = {};

  params: HttpParams;
  @Output()
  key_to_open_modal = new EventEmitter<string>();
  sr: SearchResponse<Record>;
  queryParams: Params;
  navigationExtras: NavigationExtras;

  loading: boolean = true;

  @ViewChild(MatDrawer, { static: false }) drawer: MatDrawer;

  public constructor(
    private dialog: MatDialog,
    private _searchService: SearchService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private metadata: MetadataService // private dialog: MatDialog
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.url.subscribe(() => {});

    this.query = "";

    this.activatedRoute.queryParamMap.subscribe({
      next: (initQueryParams) => {
        this.aggrsSelection = {};
        console.log("init", initQueryParams);

        for (let index = 0; index < initQueryParams.keys.length; index++) {
          const key = initQueryParams.keys[index];

          switch (key) {
            case "size":
              this.pageSize = Number.parseInt(initQueryParams.get(key));
              break;

            case "page":
              this.pageIndex = Number.parseInt(initQueryParams.get(key));
              break;

            case "q":
              this.query = initQueryParams.get(key);
              this.updateMetas(this.query);
              break;

            default:
              if (!this.aggrsSelection.hasOwnProperty(key)) {
                this.aggrsSelection[key] = [];
              }
              this.aggrsSelection[key].push(initQueryParams.get(key));
              break;
          }
        }

        this.updateFetchParams();
        this.fetchSearchRequest();
      },

      error: (e) => {},

      complete: () => {},
    });
  }

  changeView(): void {
    this.search_type = !this.search_type;
  }

  private updateFetchParams() {
    this.params = new HttpParams();

    this.params = this.params.set("size", this.pageSize.toString(10));

    this.params = this.params.set("page", (this.pageIndex + 1).toString(10));

    this.params = this.params.set("q", this.query);

    for (const aggrKey in this.aggrsSelection) {
      this.aggrsSelection[aggrKey].forEach((bucketKey) => {
        this.params = this.params.set(aggrKey, bucketKey);
      });
    }
  }

  public fetchSearchRequest() {
    this._searchService.getRecords(this.params).subscribe(
      (response: SearchResponse<Record>) => {
        console.log("res", response);

        // this.pageEvent.length = response.hits.total;
        this.sr = response;

        this.aggr_keys = [
          { value: this.sr.aggregations.creators, key: "Creadores" },
          { value: this.sr.aggregations.keywords, key: "Palabras Claves" },
          { value: this.sr.aggregations.sources, key: "Fuentes" },
          { value: this.sr.aggregations.terms, key: "Términos" },
        ];
        this.sr.aggregations.creators["label"] = "Autores";
        this.sr.aggregations.keywords["label"] = "Palabras Clave";
        this.sr.aggregations.sources["label"] = "Fuentes";
        this.sr.aggregations.terms["label"] = "Términos";
      },
      (error: any) => {
        console.log("ERROR");
      },
      () => {
        console.log("END...");

        this.loading = false;
      }
    );
  }

  public pageChange(event?: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.updateQueryParams();
  }

  public aggrChange(event /* ?: AggregationsSelection */): void {
    this.aggrsSelection = event;
    this.updateQueryParams();
  }

  queryChange(event?: string) {
    this.query = event;
    this.updateQueryParams();
  }

  private updateQueryParams() {
    this.loading = true;

    this.queryParams = {};

    this.queryParams["size"] = this.pageSize.toString(10);

    this.queryParams["page"] = this.pageIndex.toString(10);

    this.queryParams["q"] = this.query;

    for (const aggrKey in this.aggrsSelection) {
      this.aggrsSelection[aggrKey].forEach((bucketKey) => {
        this.queryParams[aggrKey] = bucketKey;
      });
    }
    this.navigationExtras = {
      relativeTo: this.activatedRoute,
      queryParams: this.queryParams,
      queryParamsHandling: "",
    };
    console.log("pa1", this.queryParams);
    this.router.navigate(["."], this.navigationExtras);
  }
  public updateMetas(query: string) {
    this.metadata.meta.updateTag({
      name: "DC.title",
      content: "Búsqueda de publicaciones científicas cubanas",
    });
    this.metadata.meta.updateTag({ name: "DC.description", content: query });
  }
  @HostListener("window:resize", ["$event"])
  onResize(event: Event) {
    // console.log("window:resize", window.innerWidth);
    if (window.innerWidth <= 740) {
      this.drawer.opened = false;
    } else {
      this.drawer.opened = true;
    }
  }
  /**
   * this method receives the child event and open the modal dialog by sending
   * him the data to be displayed,when closing the modal he saves the result in a variable
   * and then performs the search with those agregations
   * @param event the event recibed from the click that is made on the toco-search-agregations component
   * represent the key ,depending on the key,the respective agregations are shown
   */
  openAggModal(event: any) {

    this.key_to_open_modal.emit(event);

    const dialogRef = this.dialog.open(AgregationsModalComponent, {
      data: this.sr.aggregations[event.key].buckets,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.aggrsSelection={}

        this.aggrsSelection[event.key] = result;
console.log("quer",this.query);

        this.updateQueryParamsbyModal()



    });
  }
  /**
   * that method use the same idea of the updateQueryParams method
   * ,just have a litter change,it take an array of agregations selected
   * on the modal and with that make the request
   */
  private updateQueryParamsbyModal() {
    this.loading = true;

    this.queryParams = {};

    this.params = this.params.set("size", this.pageSize.toString(10));

    this.params = this.params.set("page", (this.pageIndex + 1).toString(10));

    this.params = this.params.set("q", this.query);
    console.log("query", this.query);

    let array = new Array();
    for (const aggrKey in this.aggrsSelection) {
      if (this.aggrsSelection[aggrKey]!=undefined) {

        this.aggrsSelection[aggrKey].forEach((item: any, i: number) => {
          if (item != undefined) {
            array.push(item.key);
          }

          if (this.aggrsSelection[aggrKey].length == i + 1) {
            if (this.queryParams[aggrKey]) {
              this.queryParams[aggrKey].push(array);
            }else
{
  this.queryParams[aggrKey]=array;}

            array = [];

          }
        });
      }

    }
    console.log("pa", this.queryParams);

    this.navigationExtras = {
      relativeTo: this.activatedRoute,
      queryParams: this.queryParams,
      queryParamsHandling: "",
    };

    this.router.navigate(["."], this.navigationExtras);
  }
}
