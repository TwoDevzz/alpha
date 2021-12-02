/// <reference types="react-scripts" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      /**
       * API Base url
       */
      NEXT_PUBLIC_API_URL: string;

      /**
       * Cookie baseurl domain
       */
      NEXT_PUBLIC_COOKIE_DOMAIN: string;

      /**
       * Product default url
       */
      NEXT_PUBLIC_PRODUCT_DEFAULT: string;

      /**
       * AlphaAcademy default url
       */
      NEXT_PUBLIC_ACADEMY_URL: string;
    }
  }
}

export {};
