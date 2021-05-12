export default interface paymentlink {
  [key: string]: any;
  Amount: number;
  Currency: string;
  OrderNumber: string;
  SaveCard: boolean | null;
  CustomerAcceptUrl: URL;
  CustomerDeclineUrl: URL;
  ServerCallbackUrl: URL;
  BillingAddress: {
    AddressLine1: string | null;
    AddressLine2: string | null;
    AddressLine3: string | null;
    City: string | null;
    PostCode: string | null;
    Country: string | null;
  };
  ShippingAddress: {
    AddressLine1: string | null;
    AddressLine2: string | null;
    AddressLine3: string | null;
    City: string | null;
    PostCode: string | null;
    Country: string | null;
  };
  RecurringPayment: {
    Expiry: string | null;
    PaymentFrequencyDays: number | null;
  };
  EnforceLanguage: string | null;
}
