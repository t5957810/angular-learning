import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AdHostDirective } from './ad-host.directive';
import { DynamicAdComponent } from './dynamic-ad/dynamic-ad.component';

@Component({
  selector: 'app-angular-dynamic',
  templateUrl: './angular-dynamic.component.html',
  styleUrls: ['./angular-dynamic.component.css']
})
export class AngularDynamicComponent implements OnInit {
  dynamicAdComponent = DynamicAdComponent;
  isLoad = false;
  @ViewChild(AdHostDirective) appAdHost: AdHostDirective;
  fatherArray = [
    {id: 1, name: '園丁'},
    {id: 2, name: '律師'},
    {id: 3, name: '祭司'},
    {id: 4, name: '盲女'},
    {id: 5, name: '前鋒'},
    {id: 6, name: '傭兵'},
    {id: 7, name: '空軍'},
    {id: 8, name: '魔術師'},
    {id: 9, name: '冒險家'},
    {id: 10, name: '機械師'},
    {id: 11, name: '慈善家'},
    {id: 12, name: '醫生'},
    {id: 13, name: '幸運兒'}
  ];
  constructor( private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {

  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicAdComponent);
    const viewContainerRef = this.appAdHost.viewContainerRef;
    // viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<DynamicAdComponent>componentRef.instance).data = this.fatherArray;
    this.isLoad = true;
  }

}

