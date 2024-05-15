import { NgModule } from '@angular/core';
import { AsyncCityPipe } from './pipes/async-city.pipe';
import { CityPipe } from './pipes/city.pipe';
import { StatusColorPipe } from './pipes/status-color.pipe';
import { StatusFilterPipe } from './pipes/status-filter.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { TooltipDirective } from './directives/tooltip.directive';
import { UserRoleDirective } from './directives/user-role.directive';
import { ClickWithWarningDirective } from './directives/click-with-warning.directive';

@NgModule({
  declarations: [
    CityPipe,
    StatusColorPipe,
    StatusFilterPipe,
    AsyncCityPipe,
    HighlightDirective,
    TooltipDirective,
    UserRoleDirective,
    ClickWithWarningDirective,
  ],
  imports: [],
  exports: [
    CityPipe,
    StatusColorPipe,
    StatusFilterPipe,
    AsyncCityPipe,
    HighlightDirective,
    TooltipDirective,
    UserRoleDirective,
    ClickWithWarningDirective,
  ],
})
export class SharedModule {}
