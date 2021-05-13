import paymentlink from "./interfaces/paymentlink";
import authorizationCapture from "./interfaces/authorizationCapture";
import creditAuthorization from "./interfaces/creditAuthorization";
import makeAuthorization from "./interfaces/makeAuthorization";
export default class freepay {
    private key;
    constructor(key: string);
    private api;
    paymentlink(options: paymentlink): Promise<JSON>;
    getAuthorization(authorizationIdentifier: string): Promise<any>;
    voidAuthorization(authorizationIdentifier: string): Promise<any>;
    getAuthorizationCapture(authorizationIdentifier: string, captureId: string): Promise<any>;
    getAuthorizationCaptures(authorizationIdentifier: string): Promise<any>;
    captureAuthorization(authorizationIdentifier: string, options: authorizationCapture): Promise<any>;
    getAuthorizationCredit(authorizationIdentifier: string, creditId: string): Promise<any>;
    getAuthorizationCredits(authorizationIdentifier: string): Promise<any>;
    creditAuthorization(authorizationIdentifier: string, options: creditAuthorization): Promise<any>;
    getRecurringPayment(tokenId: string): Promise<any>;
    deleteRecurringPayment(tokenId: string): Promise<any>;
    makeAuthorization(tokenId: string, options: makeAuthorization): Promise<any>;
}
