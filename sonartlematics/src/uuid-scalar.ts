import { GraphQLScalarType } from 'graphql';

const UUID_2 = () => {
  const caracteres = 'abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ012346789';
  let UUID_2 = '';
  for (let i = 0; i < 4; i++) {
    UUID_2 += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  //console.log(UUID_2); To test the UUID
  return UUID_2;
};

export const CustomUuidScalar = new GraphQLScalarType({
  name: 'UUID',
  description: 'A simple UUID parser',
  serialize: () => UUID_2(),
  parseValue: () => UUID_2(),
  parseLiteral: () => UUID_2(),
});
