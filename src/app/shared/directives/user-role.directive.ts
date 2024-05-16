import {
  Directive,
  Injectable,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

type UserRole = 'admin' | 'user';

interface User {
  name: string;
  role: UserRole;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  public user: User = {
    name: 'Max',
    role: 'admin',
  };
}

@Directive({
  selector: '[appUserRole]',
})
export class UserRoleDirective {
  private hasView: boolean = false;

  @Input() set appUserRole(role: UserRole) {
    const user = this.userService.user;
    if (user.role === role && !this.hasView) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (user.role !== role && this.hasView) {
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  }

  constructor(
    private templateRef: TemplateRef<HTMLElement>,
    private viewContainerRef: ViewContainerRef,
    private userService: UserService
  ) {}
}
