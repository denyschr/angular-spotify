import { Component, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, JwtService } from '@services';

@Component({
  selector: 'sf-login',
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss'
})
export class LoginPage implements OnInit {
  private readonly _router = inject(Router);
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _authService = inject(AuthService);
  private readonly _jwtService = inject(JwtService);

  constructor() {
    this._activatedRoute.queryParams.pipe(takeUntilDestroyed()).subscribe(params => {
      const code: string | undefined = params['code'];
      if (code) {
        this._authService.generateToken(code).subscribe(res => {
          const accessToken = res.access_token;
          const refreshToken = res.refresh_token;
          this._jwtService.saveAccessToken(accessToken);
          this._jwtService.saveRefreshToken(refreshToken);
          this.verify();
        });
      }
    });
  }

  ngOnInit(): void {
    this.verify();
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
