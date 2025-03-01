import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/domain/user';
import { Observable, map, take } from 'rxjs';

interface ApiResponse<T> {
    data: T; // Substitua 'any' pelo tipo real esperado para a propriedade 'data'
}

@Injectable({
    providedIn: 'root',
})
export class UserService {
    users: User[] = [];

    constructor(private http: HttpClient) {}

    getAll(): Observable<User[]> {
        return this.http
            .get<ApiResponse<User[]>>('https://localhost:44313/api/user')
            .pipe(map((res: ApiResponse<User[]>) => res.data))
            .pipe(take(1));
    }

    Add(): Observable<void> {
        return this.http
            .get<ApiResponse<any>>('https://localhost:44313/api/user', {})
            .pipe(map((res: ApiResponse<any>) => res.data))
            .pipe(take(1));
    }

    getData(): User[] {
        this.getAll();
        // this.users = [
        //     {
        //         id: 1,
        //         name: 'Jonathan Oliveira',
        //         email: 'email@teste.com',
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //         departmentName: 'Tecnologia',
        //         profileName: 'Admin',
        //     },
        //     {
        //         id: 2,
        //         name: 'Serena Oliveira',
        //         email: 'email@teste.com',
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //         departmentName: 'Tecnologia',
        //         profileName: 'Admin',
        //     },
        //     {
        //         id: 3,
        //         name: 'Viuva Negra',
        //         email: 'email@teste.com',
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //         departmentName: 'Tecnologia',
        //         profileName: 'Admin',
        //     },
        //     {
        //         id: 4,
        //         name: 'Hall Jordam',
        //         email: 'email@teste.com',
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //         departmentName: 'Tecnologia',
        //         profileName: 'Admin',
        //     },
        //     {
        //         id: 5,
        //         name: 'Jenks Oliveira',
        //         email: 'email@teste.com',
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //         departmentName: 'Tecnologia',
        //         profileName: 'Admin',
        //     },
        //     {
        //         id: 6,
        //         name: 'Miriane Oliveira',
        //         email: 'email@teste.com',
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //         departmentName: 'Tecnologia',
        //         profileName: 'Admin',
        //     },
        //     {
        //         id: 7,
        //         name: 'Bianca Oliveira',
        //         email: 'email@teste.com',
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //         departmentName: 'Tecnologia',
        //         profileName: 'Admin',
        //     },
        //     {
        //         id: 8,
        //         name: 'Giovanna Oliveira',
        //         email: 'email@teste.com',
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //         departmentName: 'Tecnologia',
        //         profileName: 'Admin',
        //     },
        //     {
        //         id: 9,
        //         name: 'Weley Sena',
        //         email: 'email@teste.com',
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //         departmentName: 'Tecnologia',
        //         profileName: 'Admin',
        //     },
        //     {
        //         id: 10,
        //         name: 'Peter Parker',
        //         email: 'email@teste.com',
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //         departmentName: 'Tecnologia',
        //         profileName: 'Admin',
        //     },
        //     {
        //         id: 11,
        //         name: 'Tony Stark',
        //         email: 'email@teste.com',
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //         departmentName: 'Tecnologia',
        //         profileName: 'Admin',
        //     },
        //     {
        //         id: 12,
        //         name: 'Bruce Weny',
        //         email: 'email@teste.com',
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //         departmentName: 'Tecnologia',
        //         profileName: 'Admin',
        //     },
        //     {
        //         id: 12,
        //         name: 'Stan Lee',
        //         email: 'email@teste.com',
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //         departmentName: 'Tecnologia',
        //         profileName: 'Admin',
        //     },
        //     {
        //         id: 13,
        //         name: 'Miriane Oliveira',
        //         email: 'email@teste.com',
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //         departmentName: 'Tecnologia',
        //         profileName: 'Admin',
        //     },
        //     {
        //         id: 14,
        //         name: 'Bianca Oliveira',
        //         email: 'email@teste.com',
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //         departmentName: 'Tecnologia',
        //         profileName: 'Admin',
        //     },
        //     {
        //         id: 15,
        //         name: 'Giovanna Oliveira',
        //         email: 'email@teste.com',
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //         departmentName: 'Tecnologia',
        //         profileName: 'Admin',
        //     },
        //     {
        //         id: 16,
        //         name: 'Weley Sena',
        //         email: 'email@teste.com',
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //         departmentName: 'Tecnologia',
        //         profileName: 'Admin',
        //     },
        //     {
        //         id: 17,
        //         name: 'Peter Parker',
        //         email: 'email@teste.com',
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //         departmentName: 'Tecnologia',
        //         profileName: 'Admin',
        //     },
        //     {
        //         id: 18,
        //         name: 'Tony Stark',
        //         email: 'email@teste.com',
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //         departmentName: 'Tecnologia',
        //         profileName: 'Admin',
        //     },
        //     {
        //         id: 19,
        //         name: 'Bruce Weny',
        //         email: 'email@teste.com',
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //         departmentName: 'Tecnologia',
        //         profileName: 'Admin',
        //     },
        //     {
        //         id: 20,
        //         name: 'Stan Lee',
        //         email: 'email@teste.com',
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //         departmentName: 'Tecnologia',
        //         profileName: 'Admin',
        //     },
        // ];

        return this.users;
    }

    getById(id: number): User | undefined {
        let user = this.getData().find(f => f.id === id);

        if (user) {
            user.departmentId = 2;
            user.profileId = 2;
        }

        return user;
    }
}
