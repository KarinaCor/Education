import { configureStore } from '@reduxjs/toolkit';
import { productApi } from './products/productsOperations';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const contactsConfig = {
//   key: 'contacts',
//   storage,
//   // whitelist: ['contacts'],
// };
const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  productApi.middleware,
];
export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer
    
  },
  middleware
});

// export const persistor = persistStore(store);
