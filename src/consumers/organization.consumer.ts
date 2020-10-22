import { Observable } from 'rxjs';
import axios, { AxiosAdapter, AxiosInstance } from 'axios';
import { Organization } from '../models/organization';
import { BaseConsumer } from './base.consumer';

export interface IUserConsumer{
    (params:URLSearchParams, token:string):Promise< Organization >;
}

export class OrganizationConsumer extends BaseConsumer<Organization> {

    constructor(_httpClient:AxiosInstance, _accountsBase:string){
            super(_httpClient, "organizations/", _accountsBase)
    }

} 