import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Department } from 'src/domain/department';
import { Profile } from 'src/domain/profile';
import { DepartmentService } from 'src/service/department-service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DepartmentDetailComponent {

    constructor(
        private departmentService: DepartmentService,
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private fb: FormBuilder,) {
    }

    departments: Department[] = []
    profiles: Profile[] = []

    formGroup: FormGroup = new FormGroup({})
    Department: Department | undefined;
    isNewDepartment: boolean = false

    async ngOnInit() {
        const departmentId = this.activatedRoute.snapshot.paramMap.get('id');

        if (departmentId)
            this.Department = this.departmentService.getById(Number(departmentId));
        else {
            this.isNewDepartment = true;
        }
        this.departments = this.departmentService.getData();

        this.createForm();
    }

    createForm(): void {
        this.formGroup = this.fb.group({
            name: new FormControl(this.Department?.name, Validators.required),
            description: new FormControl(this.Department?.description, Validators.required),
            createdAt: new FormControl(this.Department?.createdAt, Validators.required),
            updatedAt: new FormControl(this.Department?.updatedAt, Validators.required),
        });
    }

    delete(): void {
        this.back();
    }

    back(): void {
        this.location.back();
    }
}
