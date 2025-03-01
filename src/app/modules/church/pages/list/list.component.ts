import { Component } from '@angular/core';
import { Church } from 'src/domain/church';
import { Router } from '@angular/router';
import { ChurchService } from 'src/service/church-service';

@Component({
    selector: 'app-Department-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ChurchListComponent {

    churchs: Church[] = []

    constructor(private churchService: ChurchService, private router: Router) { }

    ngOnInit() {
        this.churchs = this.churchService.getData();
    }

    edit(id: number): void {
        this.router.navigate([`church-edit/${id}`]);
    }

    register(): void {
        this.router.navigate([`church-register`]);
    }
}
