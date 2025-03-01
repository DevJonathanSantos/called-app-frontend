import { Component } from '@angular/core';
import { Church } from 'src/domain/church';
import { Router } from '@angular/router';
import { CalledService } from 'src/service/called-service';
import { Called } from 'src/domain/called';

@Component({
    selector: 'app-Department-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class CalledListComponent {

    calleds: Called[] = []

    constructor(private calledService: CalledService, private router: Router) { }

    ngOnInit() {
        this.calleds = this.calledService.getData();
    }

    edit(id: number): void {
        this.router.navigate([`called-edit/${id}`]);
    }

    register(): void {
        this.router.navigate([`called-register`]);
    }
}
