import Button, { IconButton } from '@atlaskit/button/new';
import Heading from '@atlaskit/heading';
import CrossIcon from '@atlaskit/icon/core/cross';
import { Box, Flex, xcss } from '@atlaskit/primitives';
import { token } from '@atlaskit/tokens';
import { Modal as ModalDialogClass, router, showFlag, view } from '@forge/bridge';
import type { FullContext } from '@forge/bridge/out/types';
import { lazy, Suspense } from 'react';

const GenericPlaceholder = lazy(() => import('@/components/GenericPlaceholder/GenericPlaceholder'));

interface Props {
  context: FullContext;
}

const JiraIssuePanel = ({ context }: Props) => {
  const showFlagClickHandler = () => {
    const flag = showFlag({
      id: 'success-flag',
      title: 'showFlag example',
      type: 'info',
      description: 'The showFlag bridge method enables UI Kit and custom UI apps to open flags in the product\'s flag group.',
      actions: [
        {
          text: 'Open "Forge Starter" git repo',
          onClick: () => {
            // Use the router's open method to go to a external page
            void router.open('https://github.com/andrei-pisklenov/forge-starter');
          },
        },
      ],
      isAutoDismiss: true,
    });

    setTimeout(() => void flag.close(), 5000);
  };

  const showModalClickHandler = () => {
    const modal = new ModalDialogClass({
      resource: 'ui',
      onClose: (payload) => {
        // eslint-disable-next-line no-console
        console.log('onClose called with', payload);
      },
      size: 'medium',
      context: {
        customKey: 'custom-value',
      },
    });

    void modal.open();
  };

  const closeModalDialogHandler = async () => {
    await view.close();
  };

  // this is Modal Dialog
  if (context.extension.modal) return (
    <Flex
      direction="column"
      xcss={xcss({
        width: '100%',
        height: '100%',
      })}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        xcss={xcss({
          padding: 'space.200',
          borderBottom: `1px solid ${token('color.border')}`,
        })}
      >
        <Heading size="medium">Modal Dialog Example</Heading>
        <IconButton
          label="close"
          appearance="subtle"
          icon={CrossIcon}
          onClick={closeModalDialogHandler}
        />
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        xcss={xcss({
          padding: 'space.200',
          flex: 1,
          width: '100%',
          height: '100%',
        })}
      >
        <Suspense fallback={<>Loading...</>}><GenericPlaceholder context={context} /></Suspense>
      </Flex>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        xcss={xcss({
          padding: 'space.200',
          borderTop: `1px solid ${token('color.border')}`,
        })}
      >
        <Box></Box>
        <Button appearance="primary" autoFocus={true} onClick={closeModalDialogHandler}>
          OK
        </Button>
      </Flex>
    </Flex>
  );

  // this is standart Issue Panel
  return (
    <Flex direction="column" gap="space.100">
      <GenericPlaceholder context={context} />
      <Flex gap="space.100">
        <Button onClick={showFlagClickHandler}>showFlag</Button>
        <Button onClick={showModalClickHandler}>Modal dialog</Button>
      </Flex>
    </Flex>
  );
};

export default JiraIssuePanel;
