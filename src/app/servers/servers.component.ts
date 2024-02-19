import { Component } from '@angular/core';
import { ServerComponent } from '../server/server.component';
import { TodoComponent } from '../todo/todo.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [ServerComponent, TodoComponent, MatButtonModule],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.scss',
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName: string = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdatedServer(e: Event) {
    this.serverName = (<HTMLInputElement>e.target).value;
  }
}
