import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';


const STORAGE_KEY = '6274';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  currentUser:any;
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public storeOnLocalStorage(token:any): void {
    this.currentUser = this.storage.get(STORAGE_KEY) || [];

    this.currentUser = {
      token: token
  };

  this.storage.set(STORAGE_KEY, this.currentUser);
  console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
  return this.storage.get(STORAGE_KEY);

  }

  public getLocalStorage(){
    return this.storage.get(STORAGE_KEY);
  }

}
