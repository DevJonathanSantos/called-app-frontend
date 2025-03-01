import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { User } from 'src/domain/user';
import { UserService } from 'src/service/user-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})
export class UserListComponent {
    users: User[] = [];

    constructor(
        private userService: UserService,
        private router: Router
    ) {}

    ngOnInit() {
        this.getUsers();
    }

    getUsers(): void {
        this.userService.getAll().subscribe(item => {
            this.users = item;
        });
    }

    edit(id: number): void {
        this.router.navigate([`user-edit/${id}`]);
    }

    register(): void {
        this.router.navigate([`user-register`]);
    }
}
