import { Providers } from '@/app/Providers';
import { view } from '@forge/bridge';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import { isDevTunnelActive } from './shared/lib/isDevTunnelActive';

import '@atlaskit/css-reset';
import './styles.css';

isDevTunnelActive();

void view.theme.enable().then(() => { // https://developer.atlassian.com/platform/forge/design-tokens-and-theming/
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  root.render(
    <Providers>
      <App />
    </Providers>,
  );
});
