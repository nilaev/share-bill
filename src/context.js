import { createContext } from 'react';

export const context = createContext({
  data: null,
  dataUpdate: () => {}
});
