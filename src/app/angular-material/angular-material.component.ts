import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogData } from './angular-material.interface';
import { DialogOverviewExampleComponent } from './dialog-overview-example/dialog-overview-example.component';


@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrl: './angular-material.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
})


export class AngularMaterialComponent implements DialogData {

  constructor(public dialog: MatDialog) { }
  familyName!: string;
  name!: string;

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleComponent, {
      data: { name: this.name, familyName: this.familyName },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.familyName = result;
    });
  }
}


