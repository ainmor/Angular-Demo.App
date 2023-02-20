import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {VersionService} from "../../../../services/version.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  // @Input() - is called input directive
  @Input() title: string | undefined;

  array = [1, 2, 3, 4];
  dateValue = '2022-10-05T14:48:00.000Z';
  capitalText = 'CAPITAL TEXT';

  amount = '99';

  number = 2223423.222323434;

  version: string | undefined;

  birthday:Date = new Date(1988, 3, 14);

  // the constructor is used for something else not for initializing the member variable unlike other programming language
  constructor(private versionService: VersionService) {
  }

  ngOnInit() : void {
    this.title = "This is a header [modified]";
    this.version = this.versionService.getVersion();
    console.log(this.title);
  }

  ngOnDestroy() : void {
  }
}



