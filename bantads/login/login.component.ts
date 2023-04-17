

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

  login() {
    let login = new Login(this.user.email, this.user.password);
    this.loginService.login(login).subscribe((usuario) => {
      if (usuario != null) {
        this.loginService.usuarioLogado = usuario;
        if (usuario.perfil == 'ADMIN') {
          this.router.navigate(['/admin']);
        } else if (usuario.perfil == 'MANAGER') {
          this.router.navigate(['/manager']);
        } else {
          this.router.navigate(['/overview']);
        }
      }
    });
  }

