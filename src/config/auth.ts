export const TOKEN_KEY = '@AlphaTrading:token';

export const getToken = (): string => {
  if (typeof window !== 'undefined') {
    return (
      document.cookie.match(`(^|;)\\s*${TOKEN_KEY}\\s*=\\s*([^;]+)`)?.pop() || ''
    );
  }

  return '';
};

export const isAuthenticated = () => getToken() !== '';

export const setToken = (value: string) => {
  if (typeof window !== 'undefined') {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 5);
    document.cookie = `${TOKEN_KEY}=${value}; domain=${
      window.location.hostname
    }; expires=${expires.toUTCString()}; path=/;`;
  }
};

export const removeToken = () => {
  if (typeof window !== 'undefined') {
    document.cookie = `${TOKEN_KEY}=; domain=${window.location.hostname}; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
  }
};
