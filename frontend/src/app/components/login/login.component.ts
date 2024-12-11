import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = ''; // Holds the username input value
  password: string = ''; // Holds the password input value
  error: string = ''; // Holds error messages to display on the page

  login() {
    console.log('Attempting login with:', this.username, this.password); // Debugging log

    fetch('/api/auth', { // Proxy ensures this routes to the backend
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: this.username, password: this.password }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json(); // Parse the JSON response
        } else {
          throw new Error('Unauthorized'); // Handle invalid credentials
        }
      })
      .then((data) => {
        console.log('Login successful:', data); // Debugging log
        localStorage.setItem('token', data.token); // Store the JWT token in localStorage
        window.location.href = '/dashboard'; // Redirect to the dashboard
      })
      .catch((err) => {
        console.error('Login error:', err); // Debugging log
        this.error = 'Invalid credentials'; // Display error message
      });
  }
}

