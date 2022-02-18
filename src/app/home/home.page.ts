import { Place } from './../shared/place';
import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PlaceService } from '../shared/place.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as _ from 'lodash';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  stdobj: any;
  filterTerm: string;
  visible = false;

  constructor(private apiservice: PlaceService, private alertCtrl: AlertController,
    private router: Router, private ngFirestore: AngularFirestore) { }

  ngOnInit() {
    this.apiservice.getData().subscribe((res) => {
      this.stdobj = res.map((t) => ({
          id: t.payload.doc.id,
          place: t.payload.doc.data()['Place'.toString()],
          time: t.payload.doc.data()['Time'.toString()],
          date: t.payload.doc.data()['Date'.toString()]
        }));
        console.log(this.stdobj);
      });

    }//method

    toggle() {
      this.visible = !this.visible;
     }

    sort(){
      this.apiservice.getDataSort().subscribe((res) => {
        this.stdobj = res.map((t) => ({
            id: t.payload.doc.id,
            place: t.payload.doc.data()['Place'.toString()],
            time: t.payload.doc.data()['Time'.toString()],
            date: t.payload.doc.data()['Date'.toString()]
          }));
          console.log(this.stdobj);
        });
    }

    async presentPromptAdd() {
      const alert = this.alertCtrl.create({
        subHeader: 'Add',
        inputs: [
          {
            name: 'place',
            placeholder: 'Place'
          },
          {
            name: 'date',
            type: 'date'
          },
          {
            name: 'time',
            placeholder: 'Time'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Add',
            handler: data => {
              const tmpdata = {};
               tmpdata['Place'.toString()] = data.place;
               tmpdata['Date'.toString()] = data.date;
               tmpdata['Time'.toString()] = data.time;
                  this.apiservice.createPlace(tmpdata);
                  console.log(tmpdata);
            }
          }
        ]
      });
      (await alert).present();
    }

    async presentConfirmDelete(delid: any) {
      const alert = this.alertCtrl.create({
        subHeader: 'Delete', // Header
        message: 'Do you want to delete?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Delete',
            handler: () => {
              //console.log('Buy clicked');

              this.apiservice.deleteUser(delid);
            }
          }
        ]
      });
      (await alert).present();
    }

    //async presentPromptEdit(id, name, age, address) {
      async presentPromptEdit(tmp) {
        const alert = this.alertCtrl.create({
          subHeader: 'Edit on '+ tmp.date,
          inputs: [
            {
              name: 'place',
              placeholder: tmp.place
            },
            //{
            //  name: 'date',
            //  type: 'date'
            //},
            {
              name: 'time',
              placeholder: 'Time'
            }
          ],
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: data => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Add',
              handler: data => {
                const updatedata = {};
                 updatedata['Place'.toString()] = data.place;
                 updatedata['Date'.toString()] = tmp.date;
                 updatedata['Time'.toString()] = data.time;
                    this.apiservice.updateUser(tmp.id, updatedata);
                    console.log(updatedata);
              }
            }
          ]
        });
      (await alert).present();
    }

}//class
