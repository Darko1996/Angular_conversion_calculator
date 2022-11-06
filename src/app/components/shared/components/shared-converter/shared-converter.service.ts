import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {Convert} from "./shared-converter.model";

@Injectable({
  providedIn: 'root'
})
export class SharedConverterService {

  constructor() { }

  private actionsSubject = new Subject<Convert>();
  actionObservable$ = this.actionsSubject.asObservable();

  sendAction(action: Convert): void {
    this.actionsSubject.next(action);
  }
}
