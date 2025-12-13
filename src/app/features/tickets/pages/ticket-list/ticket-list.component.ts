import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../../../../core/models/ticket.model';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { SearchInputComponent } from '../../../../shared/components/search-input/search-input.component';
import { TicketTableComponent } from '../../../../shared/components/ticket-table/ticket-table.component';


@Component({
    standalone: true,
    selector: 'app-ticket-list',
    imports: [CommonModule, TableModule, CardModule, PageHeaderComponent, SearchInputComponent, TicketTableComponent],
    templateUrl: './ticket-list.component.html',
    styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

    tickets: Ticket[] = [];
    loading = true;
    filterValue = '';

    onSearch(value: string): void {
        this.filterValue = value;
    }

    constructor(
        private http: HttpClient,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
        this.http.get<Ticket[]>('/mock/tickets.json').subscribe(data => {
            this.tickets = data;
            this.loading = false;
            this.cdr.detectChanges();
        });
    }
}
