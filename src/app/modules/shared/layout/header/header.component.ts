import {Component, Input, OnDestroy, OnInit} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  // @Input() - is called input directive
  @Input() title: string | undefined;

  array = [1, 2, 3, 4];

  // the constructor is used for something else not for initializing the member variable unlike other programming language
  constructor() {
  }

  ngOnInit() : void {
    this.title = "This is a header [modified]";
    console.log(this.title);
  }

  ngOnDestroy() : void {
  }
}



