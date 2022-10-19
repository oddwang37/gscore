export type Product = {
  id: number;
  sitesCount: number;
  name: string;
  prices: [{ id: number; isActive: boolean; productId: number; price: string }];
};

export type Products = Product[];

const data = [
  {
    id: 1,
    sitesCount: 1,
    name: 'One cite',
    prices: [{ id: 1, isActive: true, productId: 1, price: '52' }],
  },
  {
    id: 2,
    sitesCount: 3,
    name: 'Three cites',
    prices: [{ id: 2, isActive: true, productId: 2, price: '17' }],
  },
  {
    id: 3,
    sitesCount: 7,
    name: 'Seven sites',
    prices: [{ id: 3, isActive: true, productId: 3, price: '58' }],
  },
];
