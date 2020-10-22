import { Organization, User } from "./models/models";
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { UserConsumer } from "./consumers/user.consumer";
import { OrganizationConsumer } from "./consumers/organization.consumer";

// export namespace EucliaAccounts{
// export module EucliaAccounts{

    export interface IEucliaAccounts{
        getUser(id:string, token:string):Promise< User >;
        getOrganization(id:string, token:string):Promise<Organization>;
    }
    
    
    export class EucliaAccountsImplementation implements IEucliaAccounts{
    
        private basePath:string;
        private client: AxiosInstance;
        private userConsumer: UserConsumer;
        private orgConsumer: OrganizationConsumer;
    
        constructor(basePath:string, client:AxiosInstance, userConsumer:UserConsumer, orgConsumer:OrganizationConsumer ){
            this.basePath = basePath;
            this.client = client;
            this.userConsumer = userConsumer;
            this.orgConsumer = orgConsumer;
        }
    
        public getUser(id:string, token:string):Promise< User >{
            return this.userConsumer.getWithIdParam(id, token);
        }
     
        public getOrganization(id:string, token:string):Promise<Organization>{
            return this.orgConsumer.getPromiseWithId(id, token);
        }
    
    }
    
    export class EucliaAccountsFactory{
    
        private client:IEucliaAccounts

        constructor(basePath:string){
            const config: AxiosRequestConfig = {
                baseURL: basePath,
            };
            const axiosC: AxiosInstance = axios.create(config);
            const userConsumer:UserConsumer = new UserConsumer(axiosC, basePath);
            const orgConsumer:OrganizationConsumer = new OrganizationConsumer(axiosC, basePath);
            this.client = new EucliaAccountsImplementation(basePath, axiosC, userConsumer,orgConsumer);
        }
    
        public getClient(){
            return this.client;
        }

    }
// }
