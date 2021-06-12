import paymentlink from "./interfaces/paymentlink";
import authorizationCapture from "./interfaces/authorizationCapture";
import creditAuthorization from "./interfaces/creditAuthorization";
import makeAuthorization from "./interfaces/makeAuthorization";
import authorization from "./interfaces/authorization";
export default class freepay {
    private key;
    constructor(key: string);
    private api;
    paymentlink(options: paymentlink): Promise<JSON>;
    getAuthorization(authorizationIdentifier: string): Promise<authorization>;
    voidAuthorization(authorizationIdentifier: string): Promise<JSON>;
    getAuthorizationCapture(authorizationIdentifier: string, captureId: string): Promise<JSON>;
    getAuthorizationCaptures(authorizationIdentifier: string): Promise<JSON>;
    captureAuthorization(authorizationIdentifier: string, options: authorizationCapture): Promise<JSON>;
    getAuthorizationCredit(authorizationIdentifier: string, creditId: string): Promise<JSON>;
    getAuthorizationCredits(authorizationIdentifier: string): Promise<JSON>;
    creditAuthorization(authorizationIdentifier: string, options: creditAuthorization): Promise<JSON>;
    getRecurringPayment(tokenId: string): Promise<JSON>;
    deleteRecurringPayment(tokenId: string): Promise<JSON>;
    makeAuthorization(tokenId: string, options: makeAuthorization): Promise<JSON>;
}
