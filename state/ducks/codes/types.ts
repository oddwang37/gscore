type Status = 'ACTIVE' | 'HOLD' | 'INACTIVE';

export type Code = {
  id: number;
  code: string;
  origin: null;
  status: Status;
  subscribeId: number;
  userId: number;
};

export type Codes = Code[];
