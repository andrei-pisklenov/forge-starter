import { FlagsProvider } from '@atlaskit/flag';
import { view } from '@forge/bridge';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';

import '@atlaskit/css-reset';
import './styles.css';

void view.theme.enable().then(() => {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  root.render(
    <FlagsProvider>
      <App />
    </FlagsProvider>,
  );
});
