import { Component, Input, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { Ticket } from '../../../core/models/ticket.model';

@Component({
    selector: 'app-ticket-table',
    standalone: true,
    imports: [CommonModule, TableModule, CardModule],
    templateUrl: './ticket-table.component.html',
    styleUrls: ['./ticket-table.component.scss']
})
export class TicketTableComponent {
    @Input() tickets: Ticket[] = [];
    @Input() loading = false;
    @Input() globalFilter = '';

    @ViewChild('table') table!: Table;

    ngOnChanges(): void {
        if (this.table) {
            this.table.filterGlobal(this.globalFilter, 'contains');
        }
    }
}
