"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class freepay {
    constructor(key) {
        this.key = key;
        this.api = axios_1.default.create({
            url: "https://mw.freepay.dk/api",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Basic " + btoa(this.key),
            },
        });
        this.key = key;
    }
    paymentlink(options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = {
                    Amount: options.Amount,
                    Currency: options.Currency,
                    SaveCard: options === null || options === void 0 ? void 0 : options.SaveCard,
                    OrderNumber: options.OrderNumber,
                    CustomerAcceptUrl: options.CustomerAcceptUrl,
                    CustomerDeclineUrl: options.CustomerDeclineUrl,
                    ServerCallbackUrl: options.ServerCallbackUrl,
                    BillingAddress: {
                        AddressLine1: (_a = options === null || options === void 0 ? void 0 : options.BillingAddress) === null || _a === void 0 ? void 0 : _a.AddressLine1,
                        AddressLine2: (_b = options === null || options === void 0 ? void 0 : options.BillingAddress) === null || _b === void 0 ? void 0 : _b.AddressLine2,
                        AddressLine3: (_c = options === null || options === void 0 ? void 0 : options.BillingAddress) === null || _c === void 0 ? void 0 : _c.AddressLine3,
                        City: (_d = options === null || options === void 0 ? void 0 : options.BillingAddress) === null || _d === void 0 ? void 0 : _d.City,
                        Country: (_e = options === null || options === void 0 ? void 0 : options.BillingAddress) === null || _e === void 0 ? void 0 : _e.Country,
                    },
                    ShippingAddress: {
                        AddressLine1: (_f = options === null || options === void 0 ? void 0 : options.ShippingAddress) === null || _f === void 0 ? void 0 : _f.AddressLine1,
                        AddressLine2: (_g = options === null || options === void 0 ? void 0 : options.ShippingAddress) === null || _g === void 0 ? void 0 : _g.AddressLine2,
                        AddressLine3: (_h = options === null || options === void 0 ? void 0 : options.ShippingAddress) === null || _h === void 0 ? void 0 : _h.AddressLine3,
                        City: (_j = options === null || options === void 0 ? void 0 : options.ShippingAddress) === null || _j === void 0 ? void 0 : _j.City,
                        Country: (_k = options === null || options === void 0 ? void 0 : options.ShippingAddress) === null || _k === void 0 ? void 0 : _k.Country,
                    },
                    RecurringPayment: {
                        Expiry: (_l = options === null || options === void 0 ? void 0 : options.RecurringPayment) === null || _l === void 0 ? void 0 : _l.Expiry,
                        PaymentFrequencyDays: (_m = options === null || options === void 0 ? void 0 : options.RecurringPayment) === null || _m === void 0 ? void 0 : _m.PaymentFrequencyDays,
                    },
                    EnforceLanguage: options === null || options === void 0 ? void 0 : options.EnforceLanguage,
                };
                const response = yield axios_1.default.post("https://gw.freepay.dk/api/payment", data, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Basic " + btoa(this.key),
                    },
                });
                return response.data;
            }
            catch (error) {
                return error;
            }
        });
    }
    getAuthorization(authorizationIdentifier) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.api.get(`/authorization/${authorizationIdentifier}`);
                return response.data;
            }
            catch (error) {
                throw Error(error);
            }
        });
    }
    voidAuthorization(authorizationIdentifier) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.api.delete(`/authorization/${authorizationIdentifier}`);
                return response.data;
            }
            catch (error) {
                throw Error(error);
            }
        });
    }
    getAuthorizationCapture(authorizationIdentifier, captureId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.api.get(`/authorization/${authorizationIdentifier}/capture/${captureId}`);
                return response.data;
            }
            catch (error) {
                throw Error(error);
            }
        });
    }
    getAuthorizationCaptures(authorizationIdentifier) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.api.get(`/authorization/${authorizationIdentifier}/capture`);
                return response.data;
            }
            catch (error) {
                throw Error(error);
            }
        });
    }
    captureAuthorization(authorizationIdentifier, options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.api.post(`/authorization/${authorizationIdentifier}/capture`, {
                    Amount: options.Amount,
                });
                return response.data;
            }
            catch (error) {
                throw Error(error);
            }
        });
    }
    getAuthorizationCredit(authorizationIdentifier, creditId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.api.get(`/authorization/${authorizationIdentifier}/credit/${creditId}`);
                return response.data;
            }
            catch (error) {
                throw Error(error);
            }
        });
    }
    getAuthorizationCredits(authorizationIdentifier) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.api.get(`/authorization/${authorizationIdentifier}/credit`);
                return response.data;
            }
            catch (error) {
                throw Error(error);
            }
        });
    }
    creditAuthorization(authorizationIdentifier, options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.api.post(`https://mw.freepay.dk/api/authorization/${authorizationIdentifier}/credit`, {
                    Amount: options.Amount,
                    Comment: options === null || options === void 0 ? void 0 : options.Comment,
                });
                return response.data;
            }
            catch (error) {
                throw Error(error);
            }
        });
    }
    getRecurringPayment(tokenId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.api.get(`/recurring/${tokenId}`);
                return response.data;
            }
            catch (error) {
                throw Error(error);
            }
        });
    }
    deleteRecurringPayment(tokenId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.api.delete(`/recurring/${tokenId}`);
                return response.data;
            }
            catch (error) {
                throw Error(error);
            }
        });
    }
    makeAuthorization(tokenId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.api.post(`/recurring/${tokenId}/authorize`);
                return response.data;
            }
            catch (error) {
                throw Error(error);
            }
        });
    }
}
exports.default = freepay;
