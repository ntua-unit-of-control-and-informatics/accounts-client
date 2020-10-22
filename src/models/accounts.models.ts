export interface ErrorReport {
    message?:string
	status?:Number
}

export interface Invitation{
    _id?:string
    From?:string
    To?:string
    EmailTo?:string
    Body?:string
    Viewed?:boolean
    InvitationTo?:string
}

export interface Meta {
    description?: string  
	picture?:string 
	date?:Number
	subjects?:Array<string>
	audiences?:Array<string>
	about?:string
	city?:string 
	country?:string
	github?:string
	website?:string
	linkedin?:string
}
