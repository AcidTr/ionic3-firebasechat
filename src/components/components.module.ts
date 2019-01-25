import { NgModule } from '@angular/core';
import { CustomLoggedHeaderComponent } from './custom-logged-header/custom-logged-header.component';
import { IonicModule } from 'ionic-angular';
import { MessageBoxComponent } from './message-box/message-box.component';

@NgModule({
	declarations: [CustomLoggedHeaderComponent,
    MessageBoxComponent],
	imports: [IonicModule],
	exports: [CustomLoggedHeaderComponent,
    MessageBoxComponent]
})
export class ComponentsModule {}
