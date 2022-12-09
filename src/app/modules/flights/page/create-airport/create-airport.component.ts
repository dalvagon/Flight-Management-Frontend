import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { AirportService } from 'src/app/data/service/airport.service';

@Component({
  selector: 'app-create-airport',
  templateUrl: './create-airport.component.html',
  styleUrls: ['./create-airport.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateAirportComponent implements OnInit {
  @Input() display: boolean = false;
  @Output() output: EventEmitter<boolean> = new EventEmitter();
  form = this.fb.group({
    name: ['', [Validators.required]],
    addressId: ['', [Validators.required]],
    city: ['', [Validators.required]],
  });

  constructor(
    private airportService: AirportService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  close(): void {
    this.display = false;
    this.output.emit(this.display);
  }

  submit(): void {
    const name = this.form.get('name')!.value;
    const addressId = this.form.get('addressId')!.value;
    const city = this.form.get('city')!.value;

    let formData = new FormData();
    if (name && addressId && city) {
      formData.append('name', name);
      formData.append('addressId', addressId);
      formData.append('city', city);
      this.airportService
        .createAirport(formData)
        .pipe(first())
        .subscribe((response) => console.log(response));

      this.display = false;
      this.output.emit(this.display);

      window.location.reload();
    }
  }
}
