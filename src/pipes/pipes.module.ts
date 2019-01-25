import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CapitalizePipe } from './capitalize/captalize.pipe';
@NgModule({
	declarations: [CapitalizePipe],
	imports: [IonicModule],
	exports: [CapitalizePipe]
})
export class PipesModule {}
