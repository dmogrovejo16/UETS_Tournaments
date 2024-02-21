import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-basquet-est',
  templateUrl: './basquet-est.page.html',
  styleUrls: ['./basquet-est.page.scss'],
})
export class BasquetEstPage implements OnInit {
  torneos: any[] = [];
  nombreTorneo: any ;

  isButton1Disabled: boolean = false;
  isButton2Disabled: boolean = true;
  isButton3Disabled: boolean = true;
  state: string = "";
  constructor(private http: HttpClient, public _apiService: ApiService) { }

  ngOnInit() {

    this._apiService.getTournaments().subscribe((res:any)=>{
      console.log(res);
      this.torneos=res;
        },(error: any)=>{ 
            console.log("ERROR ===", error);
          })
  }
  onButtonClick(nombreT:any) {
    this.nombreTorneo=nombreT;
    localStorage.setItem("NombreTorneo", this.nombreTorneo);
    }

    handleRefresh(event:any) {
      this.ngOnInit();
      setTimeout(() => {
        // Any calls to load data go here
        event.target.complete();
      }, 1500);
    }
}

