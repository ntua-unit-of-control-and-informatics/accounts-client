import { Observable } from 'rxjs';
import axios, { AxiosAdapter, AxiosInstance } from 'axios';
import { User } from '../models/user';
import { BaseConsumer } from './base.consumer';


export interface IUserConsumer{
    (params:URLSearchParams, token:string):Promise< User >;
    (id:string, token:string):Promise<User>;
}


export class UserConsumer extends BaseConsumer<User> {

    constructor(_httpClient:AxiosInstance, _accountsBase:string){
            super(_httpClient, "users", _accountsBase)
    }

    

} 