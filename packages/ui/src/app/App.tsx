import { TESTID } from '@app/shared';
import { Box, Text } from '@atlaskit/primitives';
import Spinner from '@atlaskit/spinner';
import { view } from '@forge/bridge';
import type { FullContext } from '@forge/bridge/out/types';
import { useEffect, useState } from 'react';

export const App = () => {
  const [context, setContext] = useState<FullContext>();

  useEffect(() => {
    void view.getContext().then(setContext);
  }, []);

  if (!context) {
    return <Spinner size="large" />;
  }

  return (
    <Box testId={TESTID.APP_WRAPPER}>
      <Text>{`This is "${String(context.extension.type)}"`}</Text>
    </Box>
  );
};
