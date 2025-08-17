export const getAllCategories = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const categories = await fetch(`${baseUrl}/api/categories`, { cache: 'no-store' });
  const { data } = await categories.json();
  return data;
};
