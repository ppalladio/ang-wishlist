import { Component } from '@angular/core';
import { ServerComponent } from '../server/server.component';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [ServerComponent, TodoComponent],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.scss',
})
export class ServersComponent {}
