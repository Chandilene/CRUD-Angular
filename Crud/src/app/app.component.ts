import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserFormComponentComponent } from './user-form-component/user-form-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserFormComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Crud';
}
