import loremIpsum from './lorem-ipsum';

export default loremIpsum.map((l, i) => ({
  id: i + 1,
  ...l
}));
