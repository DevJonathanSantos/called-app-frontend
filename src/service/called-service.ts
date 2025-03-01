import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Church } from 'src/domain/church';
import { Called } from 'src/domain/called';
@Injectable({
    providedIn: 'root'
})
export class CalledService {

    calleds: Called[] = []

    constructor(private http: HttpClient) { }

    status = [
        { id: 1, name: 'Aberto' },
        { id: 2, name: 'Concluido' },
        { id: 3, name: 'Aguardando análise' },
    ]

    getData(): Called[] {
        this.calleds = [
            { id: 1, subject: 'Portão com problema', createdBy: 'Tecnologia - Jonathan Oliveira', currentResponsible: 'Juridico', statusId: this.status[2].id, statusName: this.status[2].name, createdAt: new Date(), updatedAt: new Date() },
            { id: 2, subject: 'Troca de cartucho da impresora', createdBy: 'Adm local - Silvano de Leme', currentResponsible: 'Tecnologia', statusId: this.status[1].id, statusName: this.status[1].name, createdAt: new Date(), updatedAt: new Date() },
            { id: 1, subject: 'Compra de material', createdBy: 'Manutenção - José da Silva', currentResponsible: 'Compras', statusId: this.status[1].id, statusName: this.status[1].name, createdAt: new Date(), updatedAt: new Date() },
        ]

        return this.calleds;
    }

    getById(id: number): Called | undefined {

        let called = this.getData().find(f => f.id === id)
        return called
    }
};