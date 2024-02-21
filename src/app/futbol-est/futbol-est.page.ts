import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-futbol-est',
  templateUrl: './futbol-est.page.html',
  styleUrls: ['./futbol-est.page.scss'],
})
export class FutbolEstPage implements OnInit {
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


    obtenerNombre(nombreT:any){
      this.nombreTorneo=nombreT;
      localStorage.setItem("NombreTorneo", this.nombreTorneo);
    
    
    }
}
