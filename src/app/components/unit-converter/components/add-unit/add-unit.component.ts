import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddUnitComponent implements OnInit {
  units: string[];
  newUnits: string[] = ['cm', 'km'];
  unit: string;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.localStorageListener();
  }

  localStorageListener(): void {
    this.units = JSON.parse(localStorage.getItem("units") || '[]');
  }

  addNewUnit(): void {
    if (this.units.find(e => e === this.unit)) {
      console.log('Already exist');
      return;
    } else {
      this.units.push(this.unit);
    }
    console.log('->', this.units);
    localStorage.setItem("units", JSON.stringify(this.units));
    this.changeDetectorRef.detectChanges();
  }

}
