import { assert, expect } from "chai";
import { EucliaAccounts } from '../src/EucliaAccounts'
import {User} from '../src/models/user'

describe('client', function() {
    const accClient:EucliaAccounts.IEucliaAccounts = new  EucliaAccounts.EucliaAccountsFactory("https://accountsapi.jaqpot.org").getClient();
    // const accClient:EucliaAccounts.IEucliaAccounts = new  EucliaAccounts.EucliaAccountsFactory("http://localhost:8006").getClient();

    it('Testing get user', function() {
        let user = accClient.getUser("2425d760-018d-408a-ae0b-cde4c56354b9","eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ3Ujh3X1lGOWpKWFRWQ2x2VHF1RkswZkctQXROQUJsb3FBd0N4MmlTTWQ4In0.eyJleHAiOjE2MDMyMjk2NDQsImlhdCI6MTYwMzIyMjQ0NCwiYXV0aF90aW1lIjoxNjAzMjIyNDQ0LCJqdGkiOiIyYTcyZjE4Mi0xNGMyLTQxZGItOGI0OC0zYzc0Y2NhMDMzYWEiLCJpc3MiOiJodHRwczovL2xvZ2luLmphcXBvdC5vcmcvYXV0aC9yZWFsbXMvamFxcG90IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjI0MjVkNzYwLTAxOGQtNDA4YS1hZTBiLWNkZTRjNTYzNTRiOSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImphcXBvdC1hY2NvdW50cyIsIm5vbmNlIjoiYjYxNDkxMzEzMjI0YTI0YWVkNmY1Zjk4NjE2MTdkNmIzYVVoa0E0YXgiLCJzZXNzaW9uX3N0YXRlIjoiMThkZGU1YjMtMGFhZC00ZjFlLWIxNWMtYjE5MmIwNmRkY2Q2IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyInKiciLCIqIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgamFxcG90LWFjY291bnRzIGVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJQYW50ZWxpcyBLYXJhdHphcyIsInByZWZlcnJlZF91c2VybmFtZSI6InBhbnRlbGlzcGFua2EiLCJnaXZlbl9uYW1lIjoiUGFudGVsaXMiLCJmYW1pbHlfbmFtZSI6IkthcmF0emFzIiwiZW1haWwiOiJwYW50ZWxpc3BhbmthQGdtYWlsLmNvbSJ9.nSRkXy4WdAA2DyqFpPrxkHuYH5YxoxQkaWx8nthvQkMd_itiiYOftrWr0ez7KPc9y2Fba8vYqoBEmsVgUUce5YEQ6vgujbFWiwDB5mXPRvdQc2D9Ktq-eh7iPSjJKXpQTLcrN39ovGo6LcHNjB6KAGWmVp0aFck0l6ZZcVSX2QcvDSWfAp3HEs2coPC1NrcDfToLJmsJaKIpOypFrorpeY9iMZmX2B_WEwzIbl2sf9sd3w-ifNGRd1ehGmuAhMYpMq98eyWSyBTT18TKDCNznM8JA0waXr6kuqUkc_i73GepXMUHraqlXKvAbqTzNnX3nwTowXSGFzhwSh5b-ak99g")
        user.then(resp =>{
            console.log(resp)
            expect(resp._id).to.equal("2425d760-018d-408a-ae0b-cde4c56354b9")
        })
    });
  });