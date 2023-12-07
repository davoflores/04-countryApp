import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of } from "rxjs";
import { Country } from "../interfaces/country";

const URL = 'https://restcountries.com/v3.1/';

@Injectable({ providedIn: 'root' })
export class CountriesService {

    constructor(private http: HttpClient){
    }

    searchByCapital(term: string): Observable<Country[]> {
        const solicitud: string = URL + 'capital/' + term;
        return this.http.get<Country[]>(solicitud)
            .pipe(
                catchError( () => of([]) )
            );
    }

    searchByCountry(term: string): Observable<Country[]> {
        const solicitud: string = URL + 'name/' + term;
        return this.http.get<Country[]>(solicitud)
            .pipe(
                catchError( () => of([]) )
            );
    }

    searchByRegion(term: string): Observable<Country[]> {
        const solicitud: string = URL + 'region/' + term;
        return this.http.get<Country[]>(solicitud)
            .pipe(
                catchError( () => of([]) )
            );
    }
}
