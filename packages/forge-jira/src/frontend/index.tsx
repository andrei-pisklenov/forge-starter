import { invoke } from '@forge/bridge';
import ForgeReconciler, { Frame, Text } from '@forge/react';
import React, { useEffect, useState } from 'react';

const UIKitPage = () => {
  const [data, setData] = useState<string | undefined>();

  useEffect(() => {
    void invoke('getText', { example: 'from UI Kit' }).then((str) => {
      setData(String(str));
    });
  }, [setData]);

  return (
    <>
      <Text>[UI Kit] Hello world!</Text>
      <Text>{data ?? 'Loading...'}</Text>

      {/* setting the Custom UI resource property to the target frame resource key declared in the manifest.yml file */}
      <Frame resource="ui" />
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <UIKitPage />
  </React.StrictMode>,
);
