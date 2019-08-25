import { Component} from '@angular/core';;
import { TouchSequence } from 'selenium-webdriver';
import { timeout } from 'q';

@Component({
  selector: 'app-tf',
  templateUrl: './tf.component.html',
  styleUrls: ['./tf.component.css']
})
export class TfComponent {

 
public zahl1: number;
public zahl2: number;
public ergebnis: number;
public rechenOperation;
public rechenZeichen;
history= [];

plus=0;
minus=0;
mal=0;
geteilt=0;


addition(){
 this.rechenOperation="Addition";
 this.rechenZeichen= "+";
 this.plus++;
 this.ergebnis= (+this.zahl1) + (+this.zahl2);
 this.history.push({num1: this.zahl1, num2: this.zahl2, result: this.ergebnis, zeit: new Date(), art: this.rechenOperation, zeichen: this.rechenZeichen}); 
 
 
}

subtraktion(){
  this.rechenOperation="Subtraktion";
  this.rechenZeichen="-";
  this.minus++;
  this.ergebnis= this.zahl1 - this.zahl2;
  this.history.push({num1: this.zahl1, num2: this.zahl2, result: this.ergebnis, zeit: new Date(), art: this.rechenOperation, zeichen: this.rechenZeichen}); 

  
}

multiplikation(){
  this.rechenOperation="Multiplikation";
  this.rechenZeichen="*";
  this.mal++;
  this.ergebnis= this.zahl1 * this.zahl2;
  this.history.push({num1: this.zahl1, num2: this.zahl2, result: this.ergebnis, zeit: new Date(), art: this.rechenOperation, zeichen: this.rechenZeichen}); 
  
}

division(){
  this.rechenOperation="Division"
  this.rechenZeichen="/";
  this.geteilt++;
  this.ergebnis= this.zahl1 / this.zahl2;
  this.history.push({num1: this.zahl1, num2: this.zahl2, result: this.ergebnis, zeit: new Date(), art: this.rechenOperation, zeichen: this.rechenZeichen}); 

}

reset(){
  this.zahl1=0;
  this.zahl2=0;
  this.ergebnis=0;
}

deleteHistory(){
  this.history= [];
  this.plus=0;
  this.minus=0;
  this.mal=0;
  this.geteilt=0;
}

}
