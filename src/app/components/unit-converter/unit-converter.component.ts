import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {slideIn} from "../../animations/animations";
import {ConvertedCurrencies} from "../currency-converter/currencies.model";
import {SharedConverterService} from "../shared/components/shared-converter/shared-converter.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {Convert} from "../shared/components/shared-converter/shared-converter.model";

@UntilDestroy()
@Component({
  selector: 'app-unit-converter',
  templateUrl: './unit-converter.component.html',
  styleUrls: ['./unit-converter.component.scss'],
  animations: [slideIn],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnitConverterComponent implements OnInit {
  units: string[] = ['m', 'yd', 'in'];
  convertedResults: ConvertedCurrencies;

  constructor(private sharedConvertedService: SharedConverterService,
              private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.localStorageListener();
    this.converterListener();
  }

  converterListener(): void {
    this.sharedConvertedService.actionObservable$.pipe(
      untilDestroyed(this),
    ).subscribe((action: Convert) => {
      console.log('action', action);

      this.convertUnits(action);
    });
  }

  convertUnits(data: Convert): void {
    const fromUnit = data.fromField;
    const toUnit = data.toField;
    let result = 0;
    let amount = data.amount;

    //Convert from Inches to other
    if(fromUnit === "in" && toUnit ==="cm"){
      result = amount * 2.54;
    }
    else if(fromUnit === "in" && toUnit ==="km"){
      result = amount / 39370;
    }
    else if(fromUnit === "in" && toUnit ==="yd"){
      result = amount * 0.027778;
    }
    else if(fromUnit === "in" && toUnit ==="m"){
      result= amount / 39.370;
    }
    else if(fromUnit === "in" && toUnit ==="in"){
      result = amount;
    }

    //Convert from Meters to other
    if(fromUnit === "m" && toUnit ==="in"){
      result = amount * 39.370;
    }
    else if(fromUnit === "m" && toUnit ==="km"){
      result = amount / 1000;
    }
    else if(fromUnit === "m" && toUnit ==="yd"){
      result = amount * 1.09361;
    }
    else if(fromUnit === "m" && toUnit ==="cm"){
      result= amount / 0.01;
    }
    else if(fromUnit === "m" && toUnit === "m"){
      result = amount;
    }

    //Convert from Yard to other
    if(fromUnit === "yd" && toUnit ==="in"){
      result = amount * 36;
    }
    else if(fromUnit === "yd" && toUnit ==="m"){
      result = amount / 1.0936;
    }
    else if(fromUnit === "yd" && toUnit ==="km"){
      result = amount / 1093.6;
    }
    else if(fromUnit === "yd" && toUnit ==="cm"){
      result= amount / 0.010936;
    }
    else if(fromUnit === "yd" && toUnit === "yd"){
      result = +fromUnit;
    }

    //Convert from CM to other
    if(fromUnit === "cm" && toUnit ==="in"){
      result = amount * 0.39370;
    }
    else if(fromUnit === "cm" && toUnit ==="m"){
      result = amount / 100;
    }
    else if(fromUnit === "cm" && toUnit ==="km"){
      result = amount / 100000;
    }
    else if(fromUnit === "cm" && toUnit ==="yd"){
      result= amount / 0.010936;
    }
    else if(fromUnit === "cm" && toUnit === "cm"){
      result = amount;
    }

    //Convert from KM to other
    if(fromUnit === "km" && toUnit ==="in"){
      result = amount * 3280.8;
    }
    else if(fromUnit === "km" && toUnit ==="m"){
      result = amount / 1000;
    }
    else if(fromUnit === "km" && toUnit ==="cm"){
      result = amount * 100000;
    }
    else if(fromUnit === "km" && toUnit ==="yd"){
      result= amount / 1093.6;
    }
    else if(fromUnit === "km" && toUnit === "km"){
      result = amount;
    }

    result.toFixed(5);

    this.convertedResults = {
      "base": data.fromField,
      "target": data.toField,
      "base_amount": data.amount,
      "converted_amount": result,
    };
  }

  localStorageListener(): void {
    let storedUnits = JSON.parse(localStorage.getItem("units") || '[]');
    if (!storedUnits.length) {
      localStorage.setItem("units", JSON.stringify(this.units));
    } else {
      this.units = storedUnits;
      this.changeDetectorRef.detectChanges();
    }
  }
}
