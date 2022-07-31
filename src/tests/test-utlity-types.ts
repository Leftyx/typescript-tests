/*
   Ref:        https://www.typescriptlang.org/docs/handbook/utility-types.html
   Tutorial:   https://www.youtube.com/watch?v=tD7DM99nH30
*/
interface User {
   id: string;
   name: string;
   email?: string;
}

// With this approach we would have to keep our optionals in sync with the User class
// Adding a property would force us to add it here too.
interface UserOptionals1 {
   id?: string;
   name?: string;
   email?: string;
}

// Partial allows us to define a type similar to the one referenced, with all the properties optional
type UserOptionals = Partial<User>;

// Another utility type oposite to Partial is Required<Type>, with all the properties required
type UserAllRequired = Required<User>;

type JustEmailAndName = Pick<User, 'email' | 'name'>;

const mergeWrongApproach = (user: User, overrides: UserOptionals1): User => {
   return {
      ...user,
      ...overrides,
   };
};

const mergeRightApproach = (user: User, overrides: UserOptionals): User => {
   return {
      ...user,
      ...overrides,
   };
};

export const runner = (): void => {
   const user: User = { id: 'USR001', name: 'John Smith', email: 'john.smith@example.com' };
   const updates: UserOptionals1 = { email: 'john.smith@thecompany.com' };
   console.log('Merge Result 1:', mergeWrongApproach(user, updates));
   console.log('Merge Result 2:', mergeRightApproach(user, updates));
};
