import { useQuery } from 'react-query';

import { APIError } from '@config/api';

import Product from '@models/Product';

import services from '@services';

const useProduct = (slug?: string) => {
  return useQuery<Product, APIError, Product>(
    ['fetchProduct', String(slug)],
    () => services.product.getByIdOrSlug(String(slug)),
    { retry: false },
  );
};

export default useProduct;
