import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-process-list-tablist',
  templateUrl: './process-list-tablist.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessListTablistComponent {
  files: File[] = []; 

  onSelect(event: any) {  
    this.files.push(...event.addedFiles);   
  } 
  
  onRemove(event: any) {  
    this.files.splice(this.files.indexOf(event), 1);  
  }    
}
