export interface Invitation{
    _id?:string
    From?:string
    To?:string
    EmailTo?:string
    Body?:string
    Viewed?:boolean
    InvitationTo?:string
}

// Id                string `json:"_id" bson:"_id"`
// From              string `json:"from" bson:"from"`
// To                string `json:"to" bson:"to"`
// EmailTo           string `json:"email_to" bson:"email_to"`
// Body              string `json:"body" bson:"body"`
// Type              string `json:"type" bson:"type"`
// Viewed            string `json:"viewed" bson:"viewed"`
// InvitationTo      string `json:"invitationTo" bson:"invitation_to"`
// AffiliationFromTo string `json:"affiliationFromTo" bson:"affiliation_from_to"`