import { getImages } from '@/actions/getImages';
import { Tag } from '@/types';
import React from 'react'
import Gallery from './gallery';


interface TagsProps {
  data: Tag[];
}
const TabSwitcher: React.FC<TagsProps> = async ({
  data
}) => {
  data = [{
    name: 'All',
    id: 'all',
  }, ...data];

  const images = await getImages();
  
  return (
    <>
      <Gallery images={images} tags={data} />    
    </>
  )
}

export default TabSwitcher