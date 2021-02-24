import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MyserviceService } from '../services/myservice.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  tutorials: any;
  constructor(private myService: MyserviceService) { }

  ngOnInit() {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.myService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.tutorials = data;
    });
  }

}
