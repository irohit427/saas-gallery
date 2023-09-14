import { Tag } from "@/types";
const URL=`${process.env.NEXT_PUBLIC_API_URL}/images`;

export const getImages = async (): Promise<Tag[]> => {
  const res = await fetch(URL);
  return res.json();
};