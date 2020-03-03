import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dep-details',
  template: `
  <div>
  <p>
      dep-details works!
  </p>
  <h4> You've selected : {{depId}} </h4>

  </div>
    
  `,
  styles: []
})
export class DepDetailsComponent implements OnInit {
  public depId;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this._route.snapshot.paramMap.get('id'));
    this.depId = id;
  }

}
