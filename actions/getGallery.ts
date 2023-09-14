const URL=`${process.env.NEXT_PUBLIC_API_URL}`;

export const getGallery = async () => {
  const res = await fetch(URL);
  return res.json();
};