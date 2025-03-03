export const waitFor = async (time: number) => {
  return await new Promise((res) => setTimeout(res, time * 1000));
};
