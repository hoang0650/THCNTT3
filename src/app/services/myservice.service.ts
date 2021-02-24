import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import mydata from 'app/model/mydata';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  private dbPath = '/mydata';

  mydataRef: AngularFireList<mydata> = null;

  constructor(private db: AngularFireDatabase) {
    this.mydataRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<mydata> {
    return this.mydataRef;
  }
}
