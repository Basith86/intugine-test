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

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private http: HttpClient, private localStorageService: LocalStorageService) { }



  token: any;
  url = 'https://dl5opah3vc.execute-api.ap-south-1.amazonaws.com/latest/devices'
  data: any;
  lat: number = 51.673858;
  lng: number = 7.815982;
  latA: 51.673858;
  lngA: 7.815982;

  latB: 51.373858;
  lngB: 7.215982;

  deviceUrl = 'https://dl5opah3vc.execute-api.ap-south-1.amazonaws.com/latest?'
  deviceData: any;
  dta: any;

  checked: Boolean;
  halt: any;
  string: any;
  map: any;
  len: any;

  icon: any;

  firstD:any;
  lastD:any;
  dist:any;
  created:any;
  aa:any;
  bb:any;
  gps:any;
  firstLat:any;
  firstLng:any;
  lastLat:any;
  lastLng:any;

  timpestamplist:any;
  addDatecode:any;
  splitTime:any;


  ngOnInit() {

    this.deviceData = [
      {
        "_id": "5c754406856be00ac86ab006",
        "input": "7878058a012b6b160d0a",
        "date": "190226134958",
        "case": "8A",
        "tag": "Time Check Packet info",
        "output": "78780B8A190226134958012b86f50D0A",
        "imei": "0358739053368495",
        "device": "C4",
        "gps": [
          13.013673333333333,
          80.1999111111111
        ],
        "battery": 20,
        "createdAt": "2019-02-26T13:49:58.350Z"
      },
      {
        "_id": "5c754405856be00ac86ab000",
        "input": "78781101035873905336849520203201012a4ae40d0a",
        "tag": "Login",
        "case": "01",
        "imei": "0358739053368495",
        "model": "2020",
        "tzl": "3201",
        "timezone": 8,
        "output": "78780501012a5fd50D0A",
        "device": "C4",
        "createdAt": "2019-02-26T13:49:57.649Z"
      },
      {
        "_id": "5c7543f9856be00ac86aafd0",
        "input": "7878058a0127a17a0d0a",
        "date": "190226134945",
        "case": "8A",
        "tag": "Time Check Packet info",
        "output": "78780B8A190226134945012736730D0A",
        "imei": "0358739053368495",
        "device": "C4",
        "gps": [
          13.013673333333333,
          80.1999111111111
        ],
        "battery": 20,
        "createdAt": "2019-02-26T13:49:45.769Z"
      },
      {
        "_id": "5c7543f9856be00ac86aafc6",
        "input": "78781101035873905336849520203201012680880d0a",
        "tag": "Login",
        "case": "01",
        "imei": "0358739053368495",
        "model": "2020",
        "tzl": "3201",
        "timezone": 8,
        "output": "78780501012695b90D0A",
        "device": "C4",
        "createdAt": "2019-02-26T13:49:45.025Z"
      },
      {
        "_id": "5c7543f2856be00ac86aafa8",
        "input": "78780a1380000400020125f5bd0d0a",
        "tag": "Status Info",
        "case": "13",
        "terminalInfo": "80",
        "voltage": "No power(shutdown)",
        "battery": 20,
        "gsmStrength": "Strong signal",
        "output": "787805130125970f0D0A",
        "imei": "0358739053368495",
        "device": "C4",
        "gps": [
          13.013673333333333,
          80.1999111111111
        ],
        "createdAt": "2019-02-26T13:49:38.368Z"
      },
      {
        "_id": "5c7543f1856be00ac86aaf9c",
        "input": "7878058a012493e10d0a",
        "date": "190226134937",
        "case": "8A",
        "tag": "Time Check Packet info",
        "output": "78780B8A190226134937012431880D0A",
        "imei": "0358739053368495",
        "device": "C4",
        "gps": [
          13.013673333333333,
          80.1999111111111
        ],
        "battery": 20,
        "createdAt": "2019-02-26T13:49:37.569Z"
      },
      {
        "_id": "5c7543f0856be00ac86aaf92",
        "input": "787811010358739053368495202032010123d7250d0a",
        "tag": "Login",
        "case": "01",
        "imei": "0358739053368495",
        "model": "2020",
        "tzl": "3201",
        "timezone": 8,
        "output": "787805010123c2140D0A",
        "device": "C4",
        "createdAt": "2019-02-26T13:49:36.908Z"
      },
      {
        "_id": "5c7543e9856be00ac86aaf87",
        "input": "78780a138000040002012281020d0a",
        "tag": "Status Info",
        "case": "13",
        "terminalInfo": "80",
        "voltage": "No power(shutdown)",
        "battery": 20,
        "gsmStrength": "Strong signal",
        "output": "787805130122e3b00D0A",
        "imei": "0358739053368495",
        "device": "C4",
        "gps": [
          13.013673333333333,
          80.1999111111111
        ],
        "createdAt": "2019-02-26T13:49:29.989Z"
      },
      {
        "_id": "5c7543e9856be00ac86aaf82",
        "input": "7878058a0121c44c0d0a",
        "date": "190226134929",
        "case": "8A",
        "tag": "Time Check Packet info",
        "output": "78780B8A1902261349290121f3ab0D0A",
        "imei": "0358739053368495",
        "device": "C4",
        "gps": [
          13.013673333333333,
          80.1999111111111
        ],
        "battery": 20,
        "createdAt": "2019-02-26T13:49:29.209Z"
      },
      {
        "_id": "5c7543e8856be00ac86aaf79",
        "input": "787811010358739053368495202032010120e5be0d0a",
        "tag": "Login",
        "case": "01",
        "imei": "0358739053368495",
        "model": "2020",
        "tzl": "3201",
        "timezone": 8,
        "output": "787805010120f08f0D0A",
        "device": "C4",
        "createdAt": "2019-02-26T13:49:28.469Z"
      }
    ]

    this.halt = {
      "result": [
        "2019-02-11T13:47:50.141Z",
        "2019-02-11T13:47:25.117Z",
        "2019-02-11T13:46:42.622Z",
        "2019-02-11T13:46:05.121Z",
        "2019-02-11T13:45:45.201Z",
        "2019-02-11T13:43:42.413Z",
        "2019-02-11T13:40:41.545Z",
        "2019-02-11T13:37:43.049Z",
        "2019-02-11T13:36:12.522Z",
        "2019-02-11T13:36:08.379Z"
      ]
    }

    this.string = this.halt.result.map( (t) => {
      var a= t.split('T'); 
      var b = a[1].split('.'); 
      return b[0];
  })

  this.firstD = this.string[0].split(':');
  this.lastD = this.string[this.string.length-1].split(':');
  
  this.dist = this.calcCrow(23.198137777777777, 79.03949333333334 ,79.03949333333334, 23.126575555555558).toFixed(1);

  if( ((this.firstD[0]-this.lastD[0])>0 || (this.firstD[1]-this.lastD[1]>5)) && this.dist*1000<301){
    this.icon =  { url: 'https://assetsstatic.s3.ap-south-1.amazonaws.com/lhalt.svg', scaledSize: {height: 40, width: 40}  
  } 
}

    // this.string = this.halt.result.map( (obj) => {
    //   return JSON.stringify(obj)})

    //   this.map = this.string.reduce(function(prev, cur) {
    //     prev[cur] = (prev[cur] || 0) + 1;
    //     return prev;
    //   }, {});

    //   this.len = Object.entries(this.map);

    //   if(this.len[0].length<3){
    //     this.icon =  { url: 'https://assetsstatic.s3.ap-south-1.amazonaws.com/lhalt.svg', scaledSize: {height: 40, width: 40}    
    //   }
    //   } else {
    //     this.icon =  { url: 'https://assetsstatic.s3.ap-south-1.amazonaws.com/lhalt.svg', scaledSize: {height: 40, width: 40}   
    //   }
    // }

    this.checked = false;
    this.token = this.localStorageService.getLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token.token}`
      })
    };
    return this.http.get<any>(this.url, httpOptions).subscribe(
      res => {
        if (res) {
          this.data = res.result;
        }
      },
      err => {

      }
    )

  }



  changed(e: any) {


    this.dta = [];
    this.deviceData = [];
    this.token = this.localStorageService.getLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token.token}`
      })
    };

    console.log(e.target.value);
      this.http.get<any>(this.deviceUrl + 'device=' + e.target.value + '&page=' + 1, httpOptions).subscribe(
        res => {
          if (res) {

            this.timpestamplist = res.result.map( (a) => {
              if(a.date){  return a.date } else { return a.createdAt }
           })

           this.splitTime = this.timpestamplist.map( (s) => {
             if(s.includes('T')){
              var a = s.split('T');
             var b = a[1].split('.') ; 
             var c = b[0].replace(':',''); 
             var d = c.replace(':',''); 
             return JSON.parse(d);
             }
            
        })

        this.addDatecode = res.result.forEach( (value,i) => {
          value.datecode = this.splitTime[i]
      })

      res.result.sort(function(a,b){
        var c = a.datecode;
        var d = b.datecode;
        return c-d;
        });

        res.result.reverse();


            this.created = res.result.map( (c) => {
              return c.createdAt;
          })

          this.halt = {
            "result": [
              this.created
            ]
          }
          
          this.string = this.halt.result[0].map( (t) => {
             this.aa = t.split('T'); 
            this.bb = this.aa[1].split('.'); 
            return this.bb[0];
        })
      
        this.firstD = this.string[0].split(':');
        this.lastD = this.string[this.string.length-1].split(':');
        
        this.gps = res.result.map( (t) => {
          return  t.gps
        })

        this.firstLat = this.gps[0][0];
        this.firstLng = this.gps[0][1];
        this.lastLat = this.gps[this.gps.length-1][0];
        this.lastLng = this.gps[this.gps.length-1][1];

        this.dist = this.calcCrow(this.firstLat, this.firstLng , this.lastLat, this.lastLng).toFixed(1);
      
        if( ((this.firstD[0]-this.lastD[0])>0 || (this.firstD[1]-this.lastD[1]>5)) && this.dist*1000<301){
          this.icon =  { url: 'https://assetsstatic.s3.ap-south-1.amazonaws.com/lhalt.svg', scaledSize: {height: 40, width: 40}  
        } 
      } else {
        this.icon =  { url: 'https://assetsstatic.s3.ap-south-1.amazonaws.com/navigation.svg', scaledSize: {height: 40, width: 40} 
      }
    }

            this.dta.push(res.result);
            this.deviceData = this.dta.flat(1);
            // setTimeout(() => {
            //   this.deviceData = this.dta.flat(1);
            // }, 3000)
          }
        },
        err => {

        }
      )
    

    // setTimeout(() => {
    //   if (this.deviceData.length == 0) {
    //     alert("NO DATA AVAILABLE");
    //   }
    // }, 10000)
  }

  calcCrow(lat1, lon1, lat2, lon2) 
    {
      var R = 6371; // km
      var dLat = this.toRad(lat2-lat1);
      var dLon = this.toRad(lon2-lon1);
      var lat11 = this.toRad(lat1);
      var lat22 = this.toRad(lat2);

      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat11) * Math.cos(lat22); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      return d;
    }

    // Converts numeric degrees to radians
     toRad(Value) 
    {
        return Value * Math.PI / 180;
    }



}
