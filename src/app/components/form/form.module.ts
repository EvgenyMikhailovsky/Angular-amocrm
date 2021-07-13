import { NgModule } from "@angular/core";
import { ErrorComponent } from "../error/error.component";
import { FormComponent } from "./form.component";

@NgModule({
  declarations: [
    FormComponent,
    ErrorComponent
  ],
  imports: [],
  providers: [],
  bootstrap: [FormComponent]
})
export class FormModule { }