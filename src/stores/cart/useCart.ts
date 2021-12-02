import create from 'zustand';
import { persist } from 'zustand/middleware';

import Product from '@models/Product';

export interface StateCart {
  coupons: string[];
  products: Product[];
}

type State = {
  cart: StateCart;
  add: (product: Product) => void;
  remove: (productId: string) => void;
  removeMany: (productId: string[]) => void;
  clean: () => void;
  addCoupon: (coupon: string) => void;
  removeCoupon: (coupon: string) => void;
};

export const useCart = create<State>(
  persist(
    (set, get) => {
      const add = (product: Product) => {
        const state = get();
        set(() => {
          return {
            cart: {
              ...state.cart,
              products: [...state.cart.products, product],
            },
          };
        });
      };

      const remove = (productId: string) => {
        const state = get();
        set(() => {
          return {
            cart: {
              ...state.cart,
              coupons: [],
              products: state.cart.products.filter(
                productCart => productCart.id !== productId,
              ),
            },
          };
        });
      };

      const removeMany = (productIds: string[]) => {
        const state = get();
        set(() => {
          return {
            cart: {
              ...state.cart,
              coupons: [],
              products: state.cart.products.filter(productCart => {
                console.log(productCart.id, productIds);
                return !~productIds.indexOf(productCart.id);
              }),
            },
          };
        });
      };

      const addCoupon = (coupon: string) => {
        const state = get();
        set(() => ({
          cart: {
            ...state.cart,
            coupons: [coupon],
          },
        }));
      };

      const removeCoupon = (coupon: string) => {
        const state = get();
        set(() => {
          return {
            cart: {
              ...state.cart,
              coupons: state.cart.coupons.filter(code => code !== coupon),
            },
          };
        });
      };

      const clean = () => {
        set(() => ({
          cart: {
            coupons: [],
            products: [],
          },
        }));
      };

      return {
        cart: {
          coupons: [],
          products: [],
        },
        add,
        remove,
        clean,
        addCoupon,
        removeCoupon,
        removeMany,
      };
    },
    {
      name: 'alphatrading:cart',
      getStorage: () => localStorage,
    },
  ),
);
