export const createCustomer = async ({ email, name }: any) => {
  const uniqueId = new Date().getTime().toString();

  return await prisma.customer.create({
    data: {
      id: uniqueId,
      email: email,
      name: name,
    } as any,
  });
};
