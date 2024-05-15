import { NgModule } from '@angular/core';
import { AsyncCityPipe } from './pipes/async-city.pipe';
import { CityPipe } from './pipes/city.pipe';
import { StatusColorPipe } from './pipes/status-color.pipe';
import { StatusFilterPipe } from './pipes/status-filter.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { TooltipDirective } from './directives/tooltip.directive';

@NgModule({
  declarations: [
    CityPipe,
    StatusColorPipe,
    StatusFilterPipe,
    AsyncCityPipe,
    HighlightDirective,
    TooltipDirective,
  ],
  imports: [],
  exports: [
    CityPipe,
    StatusColorPipe,
    StatusFilterPipe,
    AsyncCityPipe,
    HighlightDirective,
    TooltipDirective,
  ],
})
export class SharedModule {}
