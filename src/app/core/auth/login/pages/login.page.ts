import { ChangeDetectionStrategy, Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, JwtService } from '@services';

@Component({
  selector: 'sf-login',
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPage {
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _authService: AuthService,
    private _jwtService: JwtService
  ) {
    this._route.queryParams.pipe(takeUntilDestroyed()).subscribe(params => {
      const code: string | undefined = params['code'];
      if (code) {
        this._authService
          .generateToken(code)
          .pipe(takeUntilDestroyed())
          .subscribe(res => {
            this._jwtService.saveAccessToken(res.access_token);
            this._jwtService.saveRefreshToken(res.refresh_token);
            this.verify();
          });
      }
    });
  }

  private verify(): void {
    const accessToken = this._jwtService.getAccessToken();
    if (accessToken) {
      this._router.navigate(['.']);
    }
  }

  public onLogin(): void {
    window.location.href = this._authService.getAuthUrl();
  }
}
