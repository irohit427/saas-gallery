import { Tag } from "@/types";
const URL=`${process.env.NEXT_PUBLIC_API_URL}/tags`;

export const getTags = async (): Promise<Tag[]> => {
  const res = await fetch(URL);
  return res.json();
};