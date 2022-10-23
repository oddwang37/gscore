export type Status = 'INACTIVE' | 'HOLD' | 'ACTIVE';

export type Code = {
  id: number;
  code: string;
  origin: null;
  status: Status;
  subscribeId: number;
  userId: number;
};

export type Product = {
  id: number;
  sitesCount: number;
  name: string;
  prices: [{id: number, isActive: boolean, price: string}]
}
export type Codes = Code[];

export type Subscribe = {
  id: number;
  userId: number;
  productId: number;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  status: Status;
  product: Product;
  codes: Codes;
};

export type Subscribes = Subscribe[];
