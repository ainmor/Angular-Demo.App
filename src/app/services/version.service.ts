import {Injectable} from "@angular/core";

// this allows us to add the dependency inject
@Injectable({providedIn: 'root'})
export class VersionService {
  private version = '1.0.0';

  public getVersion(): string {
    return this.version;
  }

}

