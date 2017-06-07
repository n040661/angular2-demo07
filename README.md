### `angular2`中使用自带的动画

### 一、在组件中创建一个动画
```javascript
import {Component,OnInit,style,trigger,state,transition,animate,keyframes} from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
  animations:[
	//可以设置多个动画
    trigger("动画名称",[
      state("状态名称",style({
        transform:"scale(1)" //设置样式
      })),
      state("active",style({
        transform:"scale(1.5)" //设置样式
      })),
	  //设置从一个状态到另外一个状态的运动效果，非必填字段
      transition("inactive=>active",animate("100ms ease-in")),
      transition("active=>inactive",animate("100ms ease-out")),
    ])
  ]
})
```

### 二、在`html`页面中使用动画
```html
<!--可以加上事件修改动画的状态，下面就加了一个鼠标移入与移出的事件-->
<div class="box" [@动画名称]="动画句柄名称" (mouseenter)="toggleLoginState(true)" (mouseleave)="toggleLoginState(false)"></div>
```

### 三、操作动画
```javascript
export class Page1Component implements OnInit {
  private loginBtnState:string = "inactive";
  constructor() { }

  ngOnInit() {
  }
  //绑定事件
  toggleLoginState(state:boolean){
    this.loginBtnState = state ? "active":"inactive";
  }
}
```

