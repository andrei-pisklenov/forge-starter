import { store } from '@/app/store/store';
import { FlagsProvider } from '@atlaskit/flag';
import type { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

export const Providers = ({ children }: PropsWithChildren) => (
  <Provider store={store}>
    <FlagsProvider>
      {children}
    </FlagsProvider>
  </Provider>
);
