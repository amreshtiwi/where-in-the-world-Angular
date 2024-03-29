import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, Subject,switchMap, filter, withLatestFrom, map ,combineLatest, tap, of, catchError, throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {


  modeSet = (localStorage.getItem('darkMode') === null); //false light mode --- ture dark mode 
  mode = this.modeSet ? 'light' : localStorage.getItem('darkMode');
  themeValue = new BehaviorSubject(this.mode);
  // modeFlag = false;
  // modeValue = new BehaviorSubject(this.mode);
  // backgroundStyles : Record<string, string> = {
  //   'background' : '#fafafa',
  //   'color' : 'black'
  // };
  // elementStyles : Record<string, string> = {
  //   'background' : '#ffffff',
  //   'color' : 'black'
  // };


  searchValue = new BehaviorSubject('');
  filterValue = new BehaviorSubject('FilterBy');
  counrtyCode = new Subject<string>();
  favouritesCountries?: Country[] ;

  countries$ = this.searchValue.pipe(
    switchMap((searchValue)=>{
      let api = "https://restcountries.com/v3.1/" + (searchValue.trim() ? "name/" + searchValue : "all");
      console.log("this is api"+api)
      return this.httpClient.get<Country[]>(api).pipe(
        catchError(err =>{
          // console.log(err);
          return [];
        })
      );
    }),
    
  );

  
  filteredCountries$ = combineLatest([this.countries$, this.filterValue]).pipe(
    map(([countries,filterValue])=>{
          return countries.filter((country) =>{
            if(filterValue !== 'FilterBy'){
              return country.region.includes(filterValue);
            }
            return country.region.includes('');
          })
        }),
  );

  themebackground$ = this.themeValue.pipe(
    switchMap((theme) => {
      if(theme === 'light'){
        return of(
          {
            'background': '#fafafa',
            'color': 'black'
          }
        );
      }else{
        return of(
          {
            'background': '#202c37',
            'color': 'white'
          }
        );
      }
    }),
  );

  themeElement$ = this.themeValue.pipe(
    tap((theme)=>{
      if(theme === 'light'){
        document.body.style.backgroundColor = "#fafafa";
      }else{
        document.body.style.backgroundColor = "#202c37";
      }
    }),
    switchMap((theme) => {
      if(theme === 'light'){
        return of(
          {
            'background': '#ffffff',
            'color': 'black'
          }
        );
      }else{
        return of(
          {
            'background': '#2b3945',
            'color': 'white'
          }
        );
      }
    }),
  );

  addToFavourties(){
    
  }

  getDetails(code:string){
    let api = "https://restcountries.com/v3.1/alpha/"+code;
    return this.httpClient.get<Country[]>(api);
  }


  setTheme(theme:string){
    this.themeValue.next(theme);
  }

  constructor(private httpClient:HttpClient) {
   }

}


export interface Country {
  name: Name
  tld: string[]
  cca2: string
  ccn3: string
  cca3: string
  cioc: string
  independent: boolean
  status: string
  unMember: boolean
  currencies: Currencies
  idd: Idd
  capital: string[]
  altSpellings: string[]
  region: string
  subregion: string
  languages: Languages
  translations: Translations
  latlng: number[]
  landlocked: boolean
  borders: string[]
  area: number
  demonyms: Demonyms
  flag: string
  maps: Maps
  population: number
  gini: Gini
  fifa: string
  car: Car
  timezones: string[]
  continents: string[]
  flags: Flags
  coatOfArms: CoatOfArms
  startOfWeek: string
  capitalInfo: CapitalInfo
}

export interface Name {
  common: string
  official: string
  nativeName: NativeName
}

export interface NativeName {
  ara: Ara
}

export interface Ara {
  official: string
  common: string
}

export interface Currencies {
  MRU: Mru
}

export interface Mru {
  name: string
  symbol: string
}

export interface Idd {
  root: string
  suffixes: string[]
}

export interface Languages {
  ara: string
}

export interface Translations {
  ara: Ara2
  bre: Bre
  ces: Ces
  cym: Cym
  deu: Deu
  est: Est
  fin: Fin
  fra: Fra
  hrv: Hrv
  hun: Hun
  ita: Ita
  jpn: Jpn
  kor: Kor
  nld: Nld
  per: Per
  pol: Pol
  por: Por
  rus: Rus
  slk: Slk
  spa: Spa
  swe: Swe
  tur: Tur
  urd: Urd
  zho: Zho
}

export interface Ara2 {
  official: string
  common: string
}

export interface Bre {
  official: string
  common: string
}

export interface Ces {
  official: string
  common: string
}

export interface Cym {
  official: string
  common: string
}

export interface Deu {
  official: string
  common: string
}

export interface Est {
  official: string
  common: string
}

export interface Fin {
  official: string
  common: string
}

export interface Fra {
  official: string
  common: string
}

export interface Hrv {
  official: string
  common: string
}

export interface Hun {
  official: string
  common: string
}

export interface Ita {
  official: string
  common: string
}

export interface Jpn {
  official: string
  common: string
}

export interface Kor {
  official: string
  common: string
}

export interface Nld {
  official: string
  common: string
}

export interface Per {
  official: string
  common: string
}

export interface Pol {
  official: string
  common: string
}

export interface Por {
  official: string
  common: string
}

export interface Rus {
  official: string
  common: string
}

export interface Slk {
  official: string
  common: string
}

export interface Spa {
  official: string
  common: string
}

export interface Swe {
  official: string
  common: string
}

export interface Tur {
  official: string
  common: string
}

export interface Urd {
  official: string
  common: string
}

export interface Zho {
  official: string
  common: string
}

export interface Demonyms {
  eng: Eng
  fra: Fra2
}

export interface Eng {
  f: string
  m: string
}

export interface Fra2 {
  f: string
  m: string
}

export interface Maps {
  googleMaps: string
  openStreetMaps: string
}

export interface Gini {
  "2014": number
}

export interface Car {
  signs: string[]
  side: string
}

export interface Flags {
  png: string
  svg: string
}

export interface CoatOfArms {
  png: string
  svg: string
}

export interface CapitalInfo {
  latlng: number[]
}

