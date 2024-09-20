import Resolver from '@forge/resolver';

const resolver = new Resolver();

export const handler = resolver.getDefinitions();
