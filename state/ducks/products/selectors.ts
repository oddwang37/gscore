import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'state/store';

export const list = (state: RootState) => state.products.list;

export const selectedProductId = (state: RootState) => state.products.selectedId;

export const selectedProduct = createSelector(
  [list, selectedProductId],
  (list, selectedProductId) => {
    return list.find((product) => selectedProductId === product.id);
  },
);
