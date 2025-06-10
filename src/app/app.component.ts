import { Component } from '@angular/core';
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private database: DatabaseService) {
    this.initializeApp();
  }

  async initializeApp() {
    try {
      await this.database.initializeDatabase();
      console.log('Database initialized successfully');
    } catch (error) {
      console.error('Database initialization failed', error);
    }
  }
}