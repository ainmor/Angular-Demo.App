import {NgModule} from "@angular/core";
import {HeaderComponent} from "./layout/header/header.component";
import { FooterComponent } from './layout/footer/footer.component';
import { ProfileEditorComponent } from './layout/profile-editor/profile-editor.component';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";


const components = [
  HeaderComponent,
  FooterComponent,
  ProfileEditorComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [...components],
  exports:[...components]
})
export class SharedModule {}
