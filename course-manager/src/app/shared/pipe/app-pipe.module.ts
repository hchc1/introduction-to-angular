import { NgModule } from "@angular/core";
import { DashReplacePipe } from "./dashreplace.pipe";
@NgModule({
  declarations: [
    DashReplacePipe,
  ],
  exports: [
    DashReplacePipe
  ]
})
export class AppPipeModule {

}