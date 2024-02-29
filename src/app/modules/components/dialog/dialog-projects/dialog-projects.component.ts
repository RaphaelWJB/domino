import { Component, Inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Iprojects } from '../../interface/IProjects';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit{

  constructor(
    private _dialogRef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) private _data:Iprojects) {}

  public getData = signal<Iprojects | null>(null);
  public closeDialog(){
    return this._dialogRef.close();
  }


  ngOnInit(): void {
    
    this.getData.set(this._data);

  }

}
