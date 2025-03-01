import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Department } from 'src/domain/department';
import { Profile } from 'src/domain/profile';
import { DepartmentService } from 'src/service/department-service';
import { ProfileService } from 'src/service/profile-service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/service/user-service';
import { User } from 'src/domain/user';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class UserDetailComponent {

    constructor(
        private userService: UserService,
        private departmentService: DepartmentService,
        private profileService: ProfileService,
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private fb: FormBuilder,) {
    }

    departments: Department[] = []
    profiles: Profile[] = []

    formGroup: FormGroup = new FormGroup({})
    user: User | undefined;
    isNewuser: boolean = false

    async ngOnInit() {
        const userId = this.activatedRoute.snapshot.paramMap.get('id');

        if (userId)
            this.user = this.userService.getById(Number(userId));
        else {
            this.isNewuser = true;
        }
        this.departments = this.departmentService.getData();
        this.profiles = this.profileService.getData();

        this.createForm();
    }

    createForm(): void {
        this.formGroup = this.fb.group({
            name: new FormControl(this.user?.name, Validators.required),
            email: new FormControl(this.user?.email, [Validators.required, Validators.email]),
            department: new FormControl(this.user?.departmentId, Validators.required),
            profile: new FormControl(this.user?.profileId, Validators.required),
            createdAt: new FormControl(this.user?.createdAt, Validators.required),
            updatedAt: new FormControl(this.user?.updatedAt, Validators.required),
        });
    }

    delete(): void {
        this.back();
    }

    back(): void {
        this.location.back();
    }
}
