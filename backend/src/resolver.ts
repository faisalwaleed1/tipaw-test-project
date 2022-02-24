const { prisma } =  require('./database.js');

const resolvers = {
  Query: {
    allUsers: async () => {
      const users = await prisma.user.findMany();

      return users;
    }
  },
  Mutation: {
    createUser: async (_, args) => {
      const newUser = {
        email: args.InputUser.email,
        firstName: args.InputUser.firstName,
        lastName: args.InputUser.lastName,
        phoneNumber: args.InputUser.phoneNumber,
        password: args.InputUser.password,
      };

      const createdUser = await prisma.user.create({ data: newUser });

      return createdUser;
    },
  },
  User: {
    firstName: (parent) => parent.firstName,
    lastName: (parent) => parent.lastName,
    email: (parent) => parent.email,
    phoneNumber: (parent) => parent.phoneNumber,
    password: (parent) => parent.password,
  },
}

export = {
  resolvers,
}

