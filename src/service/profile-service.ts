import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from 'src/domain/profile';
@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    users: Profile[] = []

    constructor(private http: HttpClient) { }

    getData(): Profile[] {
        this.users = [
            { id: 1, name: 'Administrador', description: 'description', createdAt: new Date(), updatedAt: new Date() },
            { id: 1, name: 'Assessor', description: 'description', createdAt: new Date(), updatedAt: new Date() },
            { id: 1, name: 'Local', description: 'description', createdAt: new Date(), updatedAt: new Date() },
        ]

        return this.users;
    }
};