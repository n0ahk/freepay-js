import axios from "axios";
import paymentlink from "./interfaces/paymentlink";
import authorizationCapture from "./interfaces/authorizationCapture";
import creditAuthorization from "./interfaces/creditAuthorization";
import makeAuthorization from "./interfaces/makeAuthorization";
export default class freepay {
  constructor(private key: string) {
    this.key = key;
  }

  private api = axios.create({
    url: "https://mw.freepay.dk/api",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(this.key),
    },
  });

  async paymentlink(options: paymentlink): Promise<JSON> {
    try {
      let data: object = {
        Amount: options.Amount,
        Currency: options.Currency,
        SaveCard: options?.SaveCard,
        OrderNumber: options.OrderNumber,
        CustomerAcceptUrl: options.CustomerAcceptUrl,
        CustomerDeclineUrl: options.CustomerDeclineUrl,
        ServerCallbackUrl: options.ServerCallbackUrl,
        BillingAddress: {
          AddressLine1: options?.BillingAddress?.AddressLine1,
          AddressLine2: options?.BillingAddress?.AddressLine2,
          AddressLine3: options?.BillingAddress?.AddressLine3,
          City: options?.BillingAddress?.City,
          Country: options?.BillingAddress?.Country,
        },
        ShippingAddress: {
          AddressLine1: options?.ShippingAddress?.AddressLine1,
          AddressLine2: options?.ShippingAddress?.AddressLine2,
          AddressLine3: options?.ShippingAddress?.AddressLine3,
          City: options?.ShippingAddress?.City,
          Country: options?.ShippingAddress?.Country,
        },
        RecurringPayment: {
          Expiry: options?.RecurringPayment?.Expiry,
          PaymentFrequencyDays: options?.RecurringPayment?.PaymentFrequencyDays,
        },
        EnforceLanguage: options?.EnforceLanguage,
      };
      const response = await axios.post("https://gw.freepay.dk/api/payment", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa(this.key),
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async getAuthorization(authorizationIdentifier: string) {
    try {
      const response = await this.api.get(`/authorization/${authorizationIdentifier}`);
      return response.data;
    } catch (error) {
      throw Error(error);
    }
  }
  async voidAuthorization(authorizationIdentifier: string) {
    try {
      const response = await this.api.delete(`/authorization/${authorizationIdentifier}`);
      return response.data;
    } catch (error) {
      throw Error(error);
    }
  }
  async getAuthorizationCapture(authorizationIdentifier: string, captureId: string) {
    try {
      const response = await this.api.get(`/authorization/${authorizationIdentifier}/capture/${captureId}`);
      return response.data;
    } catch (error) {
      throw Error(error);
    }
  }
  async getAuthorizationCaptures(authorizationIdentifier: string) {
    try {
      const response = await this.api.get(`/authorization/${authorizationIdentifier}/capture`);
      return response.data;
    } catch (error) {
      throw Error(error);
    }
  }
  async captureAuthorization(authorizationIdentifier: string, options: authorizationCapture) {
    try {
      const response = await this.api.post(`/authorization/${authorizationIdentifier}/capture`, {
        Amount: options.Amount,
      });
      return response.data;
    } catch (error) {
      throw Error(error);
    }
  }
  async getAuthorizationCredit(authorizationIdentifier: string, creditId: string) {
    try {
      const response = await this.api.get(`/authorization/${authorizationIdentifier}/credit/${creditId}`);
      return response.data;
    } catch (error) {
      throw Error(error);
    }
  }
  async getAuthorizationCredits(authorizationIdentifier: string) {
    try {
      const response = await this.api.get(`/authorization/${authorizationIdentifier}/credit`);
      return response.data;
    } catch (error) {
      throw Error(error);
    }
  }
  async creditAuthorization(authorizationIdentifier: string, options: creditAuthorization) {
    try {
      const response = await this.api.post(`https://mw.freepay.dk/api/authorization/${authorizationIdentifier}/credit`, {
        Amount: options.Amount,
        Comment: options?.Comment,
      });
      return response.data;
    } catch (error) {
      throw Error(error);
    }
  }
  async getRecurringPayment(tokenId: string) {
    try {
      const response = await this.api.get(`/recurring/${tokenId}`);
      return response.data;
    } catch (error) {
      throw Error(error);
    }
  }
  async deleteRecurringPayment(tokenId: string) {
    try {
      const response = await this.api.delete(`/recurring/${tokenId}`);
      return response.data;
    } catch (error) {
      throw Error(error);
    }
  }
  async makeAuthorization(tokenId: string, options: makeAuthorization) {
    try {
      const response = await this.api.post(`/recurring/${tokenId}/authorize`);
      return response.data;
    } catch (error) {
      throw Error(error);
    }
  }
}
