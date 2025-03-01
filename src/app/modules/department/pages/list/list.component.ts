import { Component } from '@angular/core';
import { Department } from 'src/domain/department';
import { DepartmentService } from 'src/service/department-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-Department-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class DepartmentListComponent {

    departments: Department[] = []

    constructor(private DepartmentService: DepartmentService, private router: Router) { }

    ngOnInit() {
        this.departments = this.DepartmentService.getData();
    }

    edit(id: number): void {
        this.router.navigate([`department-edit/${id}`]);
    }

    register(): void {
        this.router.navigate([`department-register`]);
    }
}
