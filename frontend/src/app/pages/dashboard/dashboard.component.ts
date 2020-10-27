import { asNativeElements, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { addClass } from '@syncfusion/ej2-base';
import { FormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DashboardService } from '@core/services/sample/dashboard.service';
import { Post } from '@core/models/Post';
import { from, Subscription } from 'rxjs';
import { AlertService } from '../../@core/services/sample/alert.service';
import { Chart } from "chart.js";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService, AlertService],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  dateForm: FormGroup;
  public date: Date = new Date();
  mySimpleFormat: any;
  d: Post;
  posts: Post[] = [];
  postsfinal: any = [];
  productslist = new Array();
  categorieslist = new Array();
  message: any;
  private subscription: Subscription;
  //piechart
  public pieChartLabels: string[] =[]
  public pieChartData: number[] = [];
  public pieChartType: string = 'pie';
  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
};
  
    
  

  constructor(private formBuilder: FormBuilder, private myap: DashboardService, private alertService: AlertService) {}
  title = 'app';
  public minDate: Date = new Date('11/07/2018');
  public maxDate: Date = new Date('12/31/2020');
  public placeholder: string = 'Choose a Date';

  ngOnInit() {
    this.d = new Post();
    this.dateForm = new FormGroup({
      date: new FormControl(''),
    });
    this.dateForm = this.formBuilder.group({
      date: '',
    });

    this.subscription = this.alertService.getAlert().subscribe((message) => {
      switch (message && message.type) {
        case 'success':
          message.cssClass = 'alert alert-success';
          break;
        case 'error':
          message.cssClass = 'alert alert-danger';
          break;
      }

      this.message = message;
    });
  }

  GetFormattedDate(str: string) {
    var monthalpha = str.substring(4, 7);
    var day = str.substring(8, 10);
    var year = str.substring(11, 15);
    var month = '';
    if (monthalpha == 'Jan') month = '01';
    else if (monthalpha == 'Feb') month = '02';
    else if (monthalpha == 'Mar') month = '03';
    else if (monthalpha == 'Apr') month = '04';
    else if (monthalpha == 'May') month = '05';
    else if (monthalpha == 'Jun') month = '06';
    else if (monthalpha == 'Jul') month = '07';
    else if (monthalpha == 'Aug') month = '08';
    else if (monthalpha == 'Sep') month = '09';
    else if (monthalpha == 'Oct') month = '10';
    else if (monthalpha == 'Nov') month = '11';
    else if (monthalpha == 'Dec') month = '12';
    var res = year + '-' + month + '-' + day;
    return res;
  }

  onSubmit() {
    this.date = this.dateForm.value;
    var s = this.date['date'].toString();

    this.mySimpleFormat = this.GetFormattedDate(s);
    console.log(this.mySimpleFormat);

    this.myap.getPostsList().subscribe(
      (data) => {
        this.posts = data;
        this.posts = Object.keys(data).map(function (posts) {
          let items = data[posts];
          return items;
        });
        this.postsfinal = this.posts[0];

        for (let i = 0; i < this.postsfinal.length; i++) {
         
          if (this.postsfinal[i].day == this.mySimpleFormat) 
          this.productslist.push(this.postsfinal[i]);
        }
        if (this.productslist.length == 0) {
          this.alertService.error('There are no products on this date!', true);
        } else {
          this.alertService.success('here are the products of this date!', true);
          
        }
        
      for(let i = 0; i < this.productslist.length; i++){
        if (this.productslist[i].category_id in this.categorieslist)
        continue
        else {
        this.categorieslist.push(this.productslist[i].category_id)
        } 

      } 
      let d= {}
      this.pieChartLabels=this.categorieslist;
      console.log(this.categorieslist)
      
      for(let i=0; i<this.categorieslist.length; i++){
        let count =0
        for(let j=0; j<this.productslist.length; j++){
          if (this.productslist[j].category_id ==this.categorieslist[i])
            count ++;
        }
        d[this.categorieslist[i]] = count
        
      }
      
      this.pieChartData = Object.values(d);
      }
      
      ,

      (error) => console.log(error)
    );
   
   
    this.postsfinal = [];
    this.productslist = [];
    this.categorieslist = []
  }




   // events
   public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
