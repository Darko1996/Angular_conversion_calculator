import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {MediaObserver} from "@angular/flex-layout";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private mediaSubscription: Subscription;
  private activeMediaQuery = '';

  title = 'conversion-calculator';
  deviceXs: boolean;

  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit() {
    this.mediaSubscription = this.mediaObserver
      .asObservable()
      .subscribe((change) => {
        this.deviceXs = change[0].mqAlias === 'xs';
        this.activeMediaQuery = change[0].mqAlias ? `'${change[0].mqAlias}' = (${change[0].mediaQuery})` : '';
        console.log('activeMediaQuery', this.activeMediaQuery);
      });
  }

  ngOnDestroy() {
    this.mediaSubscription.unsubscribe();
  }
}
