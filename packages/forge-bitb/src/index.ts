import Resolver from '@forge/resolver';

const resolver = new Resolver();

resolver.define('getText', () => {
  // console.log(req);
  return 'Hello, world!';
});

export const handler = resolver.getDefinitions();
