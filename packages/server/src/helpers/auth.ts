import crypt from 'bcryptjs';

export const hashPassword = async (password: string) => {
  const salted = await crypt.genSalt(10);
  return await crypt.hash(password, salted);
};

export const comparePassword = async (password: string, hashed: string) =>
  await crypt.compare(password, hashed);
