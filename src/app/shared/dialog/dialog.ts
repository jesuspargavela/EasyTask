import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dialog',
  standalone: false,
  templateUrl: './dialog.html',
  styleUrl: './dialog.css',
})
export class Dialog {
  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;

  showModal(): void {
    this.dialog.nativeElement.showModal();
  }

  closeModal(): void {
    if (!this.dialog.nativeElement.open) return;
    this.dialog.nativeElement.close();
  }
}
