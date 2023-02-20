import {Component, OnDestroy, OnInit} from '@angular/core';
import {VersionService} from "../../../../services/version.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  constructor(private versionService: VersionService) {
  }

  version : string | undefined;
  ngOnInit() : void {
    this.version = this.versionService.getVersion();
    console.log("ngOnit is called in footer");
  }

  ngOnDestroy() : void {

  }
}
