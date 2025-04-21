import { TESTID } from '@app/shared';
import Image from '@atlaskit/image';
import { Box, Flex, Text, xcss } from '@atlaskit/primitives';
import { token } from '@atlaskit/tokens';
import type { FullContext } from '@forge/bridge/out/types';
import { DuckImage } from './DuckImage'; // png/gif/any other image usage example
import Logo from '/public/icons/addon.svg?react'; // svg usage example from /public

interface Props {
  context?: FullContext;
}

const GenericPlaceholder = ({ context }: Props) => {
  return (
    <Box
      testId={TESTID.APP_WRAPPER}
      xcss={xcss({
        border: `1px solid ${token('color.border')}`,
        borderRadius: '5px',
        backgroundColor: 'color.background.accent.blue.subtle',
        padding: 'space.200',
      })}
    >
      <Flex justifyContent="space-evenly" gap="space.100" alignItems="center">
        <Logo fill={token('color.icon')} stroke={token('color.border')} />
        <Flex direction="column">
          <Text size="small">{`context.extension.type: "${String(context?.extension.type)}"`}</Text>
          <Text size="small">{`context.moduleKey: "${String(context?.moduleKey)}"`}</Text>
        </Flex>
        <Image src={DuckImage} width="36px" height="36px" />
      </Flex>
    </Box>
  );
};

export default GenericPlaceholder;
