import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent {
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService){

  }

  searchByCountry(term: string): void{
    this.countriesService.searchByCountry(term)
      .subscribe(
        countries => {
          this.countries = countries;
        }
      );
  }
}

