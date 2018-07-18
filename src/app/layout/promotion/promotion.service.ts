import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { Promotion } from './promotion';
@Injectable()
export class PromotionService {
dataPromtion: Array<Promotion> =  [
    {uuid: '1', name: 'This is promotion 1 ', brief: 'This is descipriotn 1',
    fromDate: new Date().getTime(), toDate: new Date().getTime(), priority: 1, fromHours: new Date().getTime(),
    toHours: new Date().getTime(), dayOfWeeks: [ 4, 5, 6, 8] },
    {uuid: '2', name: 'This is promotion 2', brief: '',
    fromDate: new Date().getTime(), toDate: new Date().getTime(), priority: 1, fromHours: new Date().getTime(),
    toHours: new Date().getTime(), dayOfWeeks: [2, 5, 6, 8] },
    {uuid: '3', name: 'This is promotion 3 ', brief: 'This is descipriotn 4',
    fromDate: new Date().getTime(), toDate: new Date().getTime(), priority: 1, fromHours: new Date().getTime(),
    toHours: new Date().getTime(), dayOfWeeks: [] },
    {uuid: '4', name: 'This is promotion 4 ', brief: 'This is descipriotn 5',
    fromDate: new Date().getTime(), toDate: new Date().getTime(), priority: 1, fromHours: new Date().getTime(),
    toHours: new Date().getTime(), dayOfWeeks: [2, 3, 6, 8] },
    {uuid: '5', name: 'This is promotion 5 ', brief: 'T',
    fromDate: new Date().getTime(), toDate: new Date().getTime(), priority: 1, fromHours: new Date().getTime(),
    toHours: new Date().getTime(), dayOfWeeks: [2, 3, 4, 5, 6, 8] },
    {uuid: '7', name: 'This is promotion 7 ', brief: 'This is descipriotn 7',
    fromDate: new Date().getTime(), toDate: new Date().getTime(), priority: 1, fromHours: new Date().getTime(),
    toHours: new Date().getTime(), dayOfWeeks: [2, 3, 4, 5, 6, 8] },
    {uuid: '8', name: 'This is promotion 8 ', brief: 'This is descipriotn 8',
    fromDate: new Date().getTime(), toDate: new Date().getTime(), priority: 1, fromHours: new Date().getTime(),
    toHours: new Date().getTime(), dayOfWeeks: [] },
];
constructor() {
    const data = JSON.parse(localStorage.getItem('record'));
    if(data){
        return;
    }
    localStorage.setItem('record', JSON.stringify(this.dataPromtion));
}
 getLists() {
    console.log(JSON.parse(localStorage.getItem('record')));
     return  JSON.parse(localStorage.getItem('record'));
 }
 save(promotion: Promotion): boolean {
    const arrays = this.getLocal();
     const objectOld = arrays.find( p => p.uuid === promotion.uuid);
     
     if ( objectOld ) {
         const position = arrays.indexOf(objectOld);
         arrays[position] = promotion;
         console.log(arrays);
         localStorage.setItem('record', JSON.stringify(arrays));
         return true;
     } else {
        this.dataPromtion.push(promotion);
        localStorage.setItem('record', JSON.stringify(this.dataPromtion));
        return false;
     }
 }
 remove(uuid: string): Array<Promotion> {
    const arrays =  this.getLocal();
    arrays.splice(arrays.indexOf(arrays.find(p => p.uuid === uuid)), 1);
    localStorage.setItem('record', JSON.stringify(arrays));
    return this.getLocal();
 }
 getById(uuid: string): Promotion {
     return this.getLocal().find( p => p.uuid === uuid);
 }
 getLocal(): Array<Promotion> {
     return JSON.parse(localStorage.getItem('record');
 }
}
