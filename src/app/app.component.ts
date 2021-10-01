
import { Component, ViewContainerRef, ComponentFactoryResolver} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'route-moduel-prac';


  constructor(private viewContainer:ViewContainerRef,
    private cfr:ComponentFactoryResolver){

    }

    async loadAdmin(){
      this.viewContainer.clear();
      const {AdminlistComponent} = await import('./adminlist/adminlist.component')
      this.viewContainer.createComponent(
        this.cfr.resolveComponentFactory(AdminlistComponent)
      )
    }
    async loadUser(){
      this.viewContainer.clear();
      const {UserlistComponent} = await import('./userlist/userlist.component')
      this.viewContainer.createComponent(
        this.cfr.resolveComponentFactory(UserlistComponent)
      )
    }
}


//What is routing module
//what module with routing file
//Define routing inside module
//Make routing link
//Test

//Group Routing
  //Make one more Module and route for it
  //Make  Grouped route


//Lazy loading-- use for laod component when need not during run project
  //make a module
  //Make two component
  //Use module in lazy loading way
  //Make routing
  //Make routing link


//Lazy loading component
  //Make two component
  //make two button for loading component
  // write component loading function


