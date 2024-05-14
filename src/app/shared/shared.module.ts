import { NgModule } from '@angular/core';
import { AsyncCityPipe } from './pipes/async-city.pipe';
import { CityPipe } from './pipes/city.pipe';
import { StatusColorPipe } from './pipes/status-color.pipe';
import { StatusFilterPipe } from './pipes/status-filter.pipe';

@NgModule({
  declarations: [CityPipe, StatusColorPipe, StatusFilterPipe, AsyncCityPipe],
  imports: [],
  exports: [CityPipe, StatusColorPipe, StatusFilterPipe, AsyncCityPipe],
})
export class SharedModule {}
