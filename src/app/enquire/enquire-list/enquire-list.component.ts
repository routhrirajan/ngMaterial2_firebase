import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEnquireUser } from 'app/enquire';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from 'app/shared';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { EnquiryService } from '../services';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'app-enquiry-list',
    templateUrl: 'enquire-list.component.html'
})
export class EnquireListComponent implements OnInit {
    enquiries: Observable<IEnquireUser[]>;
    displayedColumns: string[] = ['fullName', 'email', 'mobile', 'aid', 'pan','action'];
    
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    
    dataSource: MatTableDataSource<IEnquireUser>;
    totalCount: number;
    destroy$:Subject<void> = new Subject();
    constructor(private route: ActivatedRoute,
        private _userService: AuthenticationService,
        private _enquireService: EnquiryService
    ) { 
        
    }

    ngOnInit() {
        this.dataSource = new MatTableDataSource([]);
        this._enquireService.getEnquiredList().pipe(takeUntil(this.destroy$)).subscribe(data => this.dataSource.data = data);     
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }

    ngOnDestroy() {
        this.destroy$.next();
    }
    
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
        }
    }

    CreateUser(email: string) {
        const password = this.randomPassword(6);
        this._userService.emailSignUp(email, password);
    }
    randomPassword(length: number): string {
        const chars = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890';
        let pass = '';
        for (let x = 0; x < length; x++) {
            const i = Math.floor(Math.random() * chars.length);
            pass += chars.charAt(i);
        }
        return pass;
    }

    onRowClicked(row){
        console.log('Row clicked: ', row);
    }
}
