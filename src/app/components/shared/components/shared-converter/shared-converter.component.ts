import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {SharedConverterService} from "./shared-converter.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-shared-converter',
  templateUrl: './shared-converter.component.html',
  styleUrls: ['./shared-converter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedConverterComponent implements OnInit {
  @Input() items: string[];
  @Input() convertedResults: any;
  @Input() converterType: 'currency' | 'unit';
  @Input() amount?: number;
  @Input() fromField?: string;
  @Input() toField?: string;
  @Input() name: string;

  form: FormGroup;

  constructor(private sharedConvertedService: SharedConverterService,
              private formBuilder: FormBuilder,
              private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      amount: [this.amount, [Validators.required]],
      fromField: [this.fromField, [Validators.required]],
      toField: [this.toField, [Validators.required]],
    });
  }

  switchCurrencies(): void {
    this.form.patchValue({
      fromField: this.form.value.toField,
      toField: this.form.value.fromField
    })
  }

  submitForm(): void {
    this.form.markAllAsTouched();
    this.changeDetectorRef.detectChanges();

    if (this.form.invalid) { return; }

    this.sharedConvertedService.sendAction(this.form.value);
  }
}
