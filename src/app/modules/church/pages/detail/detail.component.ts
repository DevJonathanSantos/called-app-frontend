import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Church } from 'src/domain/church';
import { Profile } from 'src/domain/profile';
import { ChurchService } from 'src/service/church-service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class ChurchDetailComponent {

    constructor(
        private ChurchService: ChurchService,
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private fb: FormBuilder,) {
    }

    churchs: Church[] = []
    profiles: Profile[] = []

    formGroup: FormGroup = new FormGroup({})
    Church: Church | undefined;
    isNewChurch: boolean = false

    async ngOnInit() {
        const ChurchId = this.activatedRoute.snapshot.paramMap.get('id');

        if (ChurchId)
            this.Church = this.ChurchService.getById(Number(ChurchId));
        else {
            this.isNewChurch = true;
        }
        this.churchs = this.ChurchService.getData();

        this.createForm();
    }

    createForm(): void {
        this.formGroup = this.fb.group({
            name: new FormControl(this.Church?.name, Validators.required),
            groupId: new FormControl(this.Church?.groupId, Validators.required),
            createdAt: new FormControl(this.Church?.createdAt, Validators.required),
            updatedAt: new FormControl(this.Church?.updatedAt, Validators.required),
        });
    }

    delete(): void {
        this.back();
    }

    back(): void {
        this.location.back();
    }
}
