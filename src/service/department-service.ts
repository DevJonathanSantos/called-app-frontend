import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from 'src/domain/department';
@Injectable({
    providedIn: 'root'
})
export class DepartmentService {

    users: Department[] = []

    constructor(private http: HttpClient) { }

    getData(): Department[] {
        this.users = [
            { id: 1, name: 'Manutenção', description: 'Departamento de manutenção', createdAt: new Date(), updatedAt: new Date() },
            { id: 2, name: 'Informatica', description: 'Departamento de informatica', createdAt: new Date(), updatedAt: new Date() },
            { id: 3, name: 'Juridico', description: 'Departamento de juridico', createdAt: new Date(), updatedAt: new Date() },
            { id: 4, name: 'Compras', description: 'Departamento de Compras', createdAt: new Date(), updatedAt: new Date() },
        ]

        return this.users;
    }

    getById(id: number): Department | undefined {

        let department = this.getData().find(f => f.id === id)
        return department
    }
};