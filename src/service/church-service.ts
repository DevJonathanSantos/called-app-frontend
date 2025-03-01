import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Church } from 'src/domain/church';
@Injectable({
    providedIn: 'root'
})
export class ChurchService {

    users: Church[] = []

    constructor(private http: HttpClient) { }

    getData(): Church[] {
        this.users = [
            { id: 1, name: 'Leonidas', groupId: 8, createdAt: new Date(), updatedAt: new Date() },
            { id: 2, name: 'Piracuama', groupId: 8, createdAt: new Date(), updatedAt: new Date() },
            { id: 3, name: 'Vila castelo', groupId: 8, createdAt: new Date(), updatedAt: new Date() },
            { id: 4, name: 'Pazzine', groupId: 8, createdAt: new Date(), updatedAt: new Date() },
        ]

        return this.users;
    }

    getById(id: number): Church | undefined {

        let department = this.getData().find(f => f.id === id)
        return department
    }
};