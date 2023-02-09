import bcrypt from 'bcrypt';

export const generateSalt = async () => await bcrypt.genSalt(10);
export const generateHash = async (password: string, salt: any) => await bcrypt.hash(password, salt);

export const hashPassword = async (password: string) => {
  if (!password) {
    throw new Error('Password was not provided');
  }
  const salt = await generateSalt();
  return await generateHash(password, salt);
};

export const verifyPassword = async (candidate: any, actual: any) => {
  return await bcrypt.compare(candidate, actual);
};
