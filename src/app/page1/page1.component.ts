import {
  Component,
  OnInit,
  style,
  trigger,
  state,
  transition,
  animate,
  keyframes
} from '@angular/core';
import {ECharts} from "echarts";
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
  animations:[
    trigger("loginState",[
      state("inactive",style({
        transform:"scale(1)"
      })),
      state("active",style({
        transform:"scale(1.5)"
      })),
      transition("inactive=>active",animate("100ms ease-in")),
      transition("active=>inactive",animate("100ms ease-out")),
    ]),
    trigger("signal",[
      state("green",style({
        "background":"#360"
      })),
      state("red",style({
        background:"#f00"
      })),
      transition("*=>*",animate(5000,keyframes([
        style({"transform":"scale(0)"}),
        style({"transform":"scale(0.3)"}),
        style({"transform":"scale(0.6)"}),
        style({"transform":"scale(0.8)"}),
        style({"transform":"scale(1)"})
      ])))
    ])
  ]
})
export class Page1Component implements OnInit {
  private loginBtnState:string = "inactive";
  private isRed:boolean = false;
  private bgStyle:string = "green";
  constructor() { }

  ngOnInit() {
  }
  toggleLoginState(state:boolean){
    this.loginBtnState = state ? "active":"inactive";
  }
  toggleFn(){
    this.isRed = !this.isRed;
    this.bgStyle = this.isRed ? "red":"green";
  }
}
