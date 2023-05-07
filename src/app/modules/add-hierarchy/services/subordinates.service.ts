import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISubordinates } from '../interfaces/subordinates.interface';

@Injectable({
  providedIn: 'root'
})
export class SubordinatesService {
  SUBORDINATES_LIST: ISubordinates[] = [
    {ID: 4320, name: 'Hierarchy name goes here', responsibleImage: 'assets/images/user.png', responsibleName: 'Mohammad', subordinates: 12},
    {ID: 4321, name: 'Hierarchy name goes here', responsibleImage: 'assets/images/user.png', responsibleName: 'Mohammad', subordinates: 12},
    {ID: 4322, name: 'Hierarchy name goes here', responsibleImage: 'assets/images/user.png', responsibleName: 'Mohammad', subordinates: 12},
    {ID: 4323, name: 'Hierarchy name goes here', responsibleImage: 'assets/images/user.png', responsibleName: 'Mohammad', subordinates: 12},
    {ID: 4324, name: 'Hierarchy name goes here', responsibleImage: 'assets/images/user.png', responsibleName: 'Mohammad', subordinates: 12},
    {ID: 4325, name: 'Hierarchy name goes here', responsibleImage: 'assets/images/user.png', responsibleName: 'Mohammad', subordinates: 12},
    {ID: 4326, name: 'Hierarchy name goes here', responsibleImage: 'assets/images/user.png', responsibleName: 'Mohammad', subordinates: 12}
  ];
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.post(`${environment.api}/subordinates.php`, null).pipe(
      map((res: any) => res.data)
    )
  }

  getSubordinates(): ISubordinates[] {
    return this.SUBORDINATES_LIST;
  }

  removeSubordinates(subordinates: ISubordinates[]) {
    subordinates.forEach(subordinate => {
      this.SUBORDINATES_LIST = this.SUBORDINATES_LIST.filter((s: ISubordinates) => s.ID !== subordinate.ID)
    })
  }

}
