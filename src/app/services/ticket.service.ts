import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ticket } from '../core/models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private ticketsSubject = new BehaviorSubject<Ticket[]>([]);
  tickets$ = this.ticketsSubject.asObservable();

  private nextId = 1;

  constructor() {
    this.loadMock();
  }

  private async loadMock() {
    try {
      const response = await fetch('/mock/tickets.json');
      const data: Ticket[] = await response.json();

      this.ticketsSubject.next(data);

      // 🔑 Define o próximo ID corretamente
      const maxId = data.length
        ? Math.max(...data.map(ticket => ticket.id))
        : 0;

      this.nextId = maxId + 1;

    } catch (error) {
      console.error('Erro ao carregar mock de tickets', error);
    }
  }

  addTicket(ticket: Omit<Ticket, 'id'>) {
    const newTicket: Ticket = {
      ...ticket,
      id: this.nextId++
    };

    const current = this.ticketsSubject.value;
    this.ticketsSubject.next([...current, newTicket]);
  }
}
