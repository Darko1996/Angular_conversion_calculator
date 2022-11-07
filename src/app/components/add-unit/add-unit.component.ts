import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {slideIn} from "../../animations/animations";

@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.scss'],
  animations: [slideIn],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddUnitComponent implements OnInit {
  units: string[];
  newUnits: string[] = ['cm', 'km'];
  unit: string;

  constructor(private changeDetectorRef: ChangeDetectorRef, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.localStorageListener();
  }

  localStorageListener(): void {
    this.units = JSON.parse(localStorage.getItem("units") || '[]');
  }

  addNewUnit(): void {
    if (this.units.find(e => e === this.unit)) {
      this._snackBar.open('Unit already exist', 'Close', { duration: 1500 });
      return;
    } else {
      this.units.push(this.unit);
      localStorage.setItem("units", JSON.stringify(this.units));
      this._snackBar.open('You successfully added new unit', 'Close', { duration: 1500 });
      this.changeDetectorRef.detectChanges();
    }
  }
}
