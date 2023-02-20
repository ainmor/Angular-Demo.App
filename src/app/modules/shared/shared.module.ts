import {NgModule} from "@angular/core";
import {HeaderComponent} from "./layout/header/header.component";
import { FooterComponent } from './layout/footer/footer.component';
import { ProfileEditorComponent } from './layout/profile-editor/profile-editor.component';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {BirthdayPipe} from "./pipes/birthday.pipe";


const components = [
  HeaderComponent,
  FooterComponent,
  ProfileEditorComponent,
];

const pipes = [
  BirthdayPipe
]

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
  declarations: [
    ...components,
    ...pipes],
  exports:[...components]
})
export class SharedModule {}
