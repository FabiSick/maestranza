// sqlite.service.ts
import { Injectable } from '@angular/core';
import { 
  CapacitorSQLite, 
  SQLiteConnection,
  SQLiteDBConnection 
} from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class SQLiteService {
  private sqlite = new SQLiteConnection(CapacitorSQLite);

  async createConnection(
    dbName: string,
    encrypted: boolean,
    mode: string,
    version: number
  ): Promise<SQLiteDBConnection> {
    const db = await this.sqlite.createConnection(
      dbName,
      encrypted,
      mode,
      version,
      false
    );
    
    await db.open();
    return db;
  }
}