import { Injectable } from '@angular/core';
import { setCheckNoChangesMode } from '@angular/core/src/render3/state';

@Injectable({
  providedIn: 'root'
})
export class NavProviderService {
  private name: string;

  constructor() { }


  public setName(name: string) {
    debugger;
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}


