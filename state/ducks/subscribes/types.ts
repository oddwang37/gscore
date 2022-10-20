export type Status = 'INACTIVE' | 'HOLD' | 'ACTIVE';

export type Code = {
  id: number;
  code: string;
  origin: null;
  status: Status;
  subscribeId: number;
  userId: number;
};

export type Codes = Code[];

export type Subscribe = {
  id: number;
  userId: number;
  productId: number;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  status: Status;
  codes: Codes;
};

export type Subscribes = Subscribe[];
