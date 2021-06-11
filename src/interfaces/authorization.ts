enum cardType {
  Unknown = -1,
  AmericanExpressDanish = 0,
  AmericanExpressForeign = 1,
  DinersDanish = 2,
  DinersForeign = 3,
  MastercardForeign = 4,
  MastercardDanish = 5,
  VisaDankort = 6,
  VisaElectronDanish = 7,
  VisaElectronForeign = 8,
  VisaDanish = 9,
  VisaForeign = 10,
  JCB = 11,
  ElectronOrVisaForeign = 12,
  Dankort = 13,
  MaestroDanish = 14,
  MaestroForeign = 15,
  MastercardDebitDanish = 16,
}

export default interface authorization {
  AuthorizationID: number;
  MerchantNumber: number;
  AuthorizationIdentifier: string;
  DateCreated: string;
  DateAuthorized: string;
  DateCaptured: string;
  Currency: string;
  OrderID: string;
  CardType: cardType;
  AuthorizationAmount: number;
  IsCaptured: boolean;
  CaptureAmount: number;
  CaptureErrorCode: number;
  IsSubscription: boolean;
  DateSubscriptionExpires: string;
  DateCredited: string;
  MaskedPan: string;
  Used3dSecure: boolean;
  Acquirer: string;
  Status: string;
  PaymentIdentifier: string;
  Wallet: string;
  WalletProvider: number;
  CardExpiryDate: string;
  GetFormattedAmount: number;
}
