import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit{
  //Emitimos un valor
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  //Recibimos el valor placeholder
  @Input() placeholder: string = "";

  //Es un observable el subject por decirlo de alguna manera y asi se crea pero es especial
  //Se emitira cuando dejamos de escribir para este caso de uso
  debouncer: Subject<string> = new Subject();

  termino: string = '';
  
  ngOnInit() {
    //Se ejecuta una unica vez cuando el componente es creado
    this.debouncer
    .pipe(debounceTime(300))//Cuanto tiempo queremos que pase antes de emitir el siguiente valor
    .subscribe( valor => {//Se queda escuchando desde que se ejecuta por primera vez
      this.onDebounce.emit(valor)
    });
  }

  buscar(){
    this.onEnter.emit( this.termino );
  }

  teclaPresionada(){
    this.debouncer.next(this.termino);
  }

}
