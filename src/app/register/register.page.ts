import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class RegisterPage implements OnInit {
  public assets: string = environment.assets;

  constructor(private route:Router) { }

  ngOnInit() {
  }

  public home() {
    setTimeout(() => {
      this.route.navigate(['/home'])
    }, 1000)
  }
}
