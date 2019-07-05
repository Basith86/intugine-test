import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object,private http: HttpClient,private localStorageService: LocalStorageService) { }



    token: any;
    url= 'https://dl5opah3vc.execute-api.ap-south-1.amazonaws.com/latest/devices' 
    data:any;
    lat: number = 51.673858;
    lng: number = 7.815982;
    latA: 51.673858;
    lngA: 7.815982;

    latB: 51.373858;
    lngB: 7.215982;

    deviceUrl =  'https://dl5opah3vc.execute-api.ap-south-1.amazonaws.com/latest?'
    deviceData:any;
    dta:any;

    checked: Boolean;
    
    icon = { url: 'https://assetsstatic.s3.ap-south-1.amazonaws.com/navigation.svg', scaledSize: {height: 40, width: 40}

    
}

  ngOnInit() {

     this.deviceData = [{"_id":"5c617d06af92700ace9265df","input":"7878191013020b152f31c7027d27e8087ae2701414020002002551dc0d0a","tag":"GPS Info","case":"10","date":"2019-02-11T13:47:49.000Z","noSatellites":7,"gps":[23.198137777777777,79.03949333333334],"speed":20,"course":"1402","language":"English","output":"78780510002561b30D0A","imei":"0358739053342797","device":"C1","createdAt":"2019-02-11T13:47:50.141Z"},{"_id":"5c617cedaf92700ace9265d6","input":"7878191013020b152f18c7027d1e60087ae010191416000200245d9d0d0a","tag":"GPS Info","case":"10","date":"2019-02-11T13:47:24.000Z","noSatellites":7,"gps":[23.19678222222222,79.03915555555555],"speed":25,"course":"1416","language":"English","output":"787805100024703a0D0A","imei":"0358739053342797","device":"C1","createdAt":"2019-02-11T13:47:25.117Z"},{"_id":"5c617cc2af92700ace9265c9","input":"78780a13c00404000200235ef90d0a","tag":"Status Info","case":"13","terminalInfo":"c0","voltage":"Medium","gsmStrength":"Strong signal","output":"787805130023ebe10D0A","imei":"0358739053342797","device":"C1","gps":[23.19314222222222,79.0343288888889],"createdAt":"2019-02-11T13:46:42.622Z"},{"_id":"5c617c9daf92700ace9265bd","input":"7878191013020b152e04c7027d04c8087abe2029142d00020022914a0d0a","tag":"GPS Info","case":"10","date":"2019-02-11T13:46:04.000Z","noSatellites":7,"gps":[23.19314222222222,79.0343288888889],"speed":41,"course":"142d","language":"English","output":"787805100022150c0D0A","imei":"0358739053342797","device":"C1","createdAt":"2019-02-11T13:46:05.121Z"},{"_id":"5c617c89af92700ace9265af","input":"7878191013020b152d2cc7027cf844087ab4402b1418000200216fb30d0a","tag":"GPS Info","case":"10","date":"2019-02-11T13:45:44.000Z","noSatellites":7,"gps":[23.19136222222222,79.03292444444445],"speed":43,"course":"1418","language":"English","output":"78780510002127970D0A","imei":"0358739053342797","device":"C1","createdAt":"2019-02-11T13:45:45.201Z"},{"_id":"5c617c0eaf92700ace926583","input":"78780a13c00404000200206c620d0a","tag":"Status Info","case":"13","terminalInfo":"c0","voltage":"Medium","gsmStrength":"Strong signal","output":"787805130020d97a0D0A","imei":"0358739053342797","device":"C1","gps":[23.12723777777778,79.03085333333334],"createdAt":"2019-02-11T13:43:42.413Z"},{"_id":"5c617b59af92700ace926549","input":"78780a13c004030002001f95ca0d0a","tag":"Status Info","case":"13","terminalInfo":"c0","voltage":"Medium","gsmStrength":"Good signal","output":"78780513001f100e0D0A","imei":"0358739053342797","device":"C1","gps":[23.12723777777778,79.03085333333334],"createdAt":"2019-02-11T13:40:41.545Z"},{"_id":"5c617aa7af92700ace926516","input":"78780a13c004040002000ea41e0d0a","tag":"Status Info","case":"13","terminalInfo":"c0","voltage":"Medium","gsmStrength":"Strong signal","output":"78780513000e11060D0A","imei":"0358739053342797","device":"C1","gps":[23.12723777777778,79.03085333333334],"createdAt":"2019-02-11T13:37:43.049Z"},{"_id":"5c617a4caf92700ace9264ee","input":"7878191013020b15240ec4027b3564087aa5b034140100020006ee050d0a","tag":"GPS Info","case":"10","date":"2019-02-11T13:36:14.000Z","noSatellites":4,"gps":[23.12723777777778,79.03085333333334],"speed":52,"course":"1401","language":"English","output":"787805100006722a0D0A","imei":"0358739053342797","device":"C1","createdAt":"2019-02-11T13:36:12.522Z"},{"_id":"5c617a48af92700ace9264ed","input":"7878191013020b152409c4027b30bc087aa58034140300020004b3b70d0a","tag":"GPS Info","case":"10","date":"2019-02-11T13:36:09.000Z","noSatellites":4,"gps":[23.126575555555558,79.03082666666666],"speed":52,"course":"1403","language":"English","output":"78780510000451380D0A","imei":"0358739053342797","device":"C1","createdAt":"2019-02-11T13:36:08.379Z"}]
     
    this.checked = false;
    this.token = this.localStorageService.getLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token.token}`
      })
    };
    return this.http.get<any>(this.url,httpOptions).subscribe(
      res => {
        if(res){
         this.data = res.result;
        }
      },
      err => {

      }
  )    
  
  }

 

  changed(e:any){
    this.dta = [];
    this.deviceData = [];
    this.token = this.localStorageService.getLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token.token}`
      })
    };
   
    console.log(e.target.value);    
    for(var i=1; i<5; i++){
      this.http.get<any>(this.deviceUrl+'device='+e.target.value+'&page='+i,httpOptions).subscribe(
        res => {
          if(res){
            this.dta.push(res.result);
            setTimeout( () => {
              this.deviceData = this.dta.flat(1);
            },3000)
          }
        },
        err => {
  
        }
      )
    }
    setTimeout( () => {
      if(this.deviceData.length == 0){
        alert("NO DATA AVAILABLE");
      }
    },5000)
  }



}
