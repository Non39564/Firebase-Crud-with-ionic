import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PlaceService {
  placeList: AngularFireList<any>;
  placeRef: AngularFireObject<any>;
  //sortcollection: any;

  constructor(private db: AngularFireDatabase, private ngFirestore: AngularFirestore) { }

  //sortcollection = this.ngFirestore.collection('Story', ref => ref.orderBy('Date'));

  // Create
  createPlace(place: any) {
    return this.ngFirestore.collection('Story').add(place);
  }

  // Getdata
  getData() {
    return this.ngFirestore.collection('Story').snapshotChanges();
  }

  // Getdatasort
  getDataSort() {
    return this.ngFirestore.collection('Story', ref => ref.orderBy('Date')).snapshotChanges();
  }

  // Update
  updateUser(id, updatedata: any) {
    return this.ngFirestore.doc('Story/'+id).update(updatedata);
  }

  // Delete
  deleteUser(delid) {
    return this.ngFirestore.doc('Story/'+delid).delete();
  }
}
