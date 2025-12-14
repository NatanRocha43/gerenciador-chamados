import { Routes } from '@angular/router';
import { TicketListComponent } from './features/tickets/pages/ticket-list/ticket-list.component';
import { TicketCreateComponent } from './features/tickets/pages/ticket-create/ticket-create.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tickets', pathMatch: 'full' },
  { path: 'tickets', component: TicketListComponent },
  { path: 'tickets/new', component: TicketCreateComponent }
];
