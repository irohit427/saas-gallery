import { getTags } from '@/actions/getTags';
import TabSwitcher from '@/components/tabSwitcher';
import React from 'react'

const Gallery = async() => {

  const tags = await getTags();
  
  return (
    <div className='flex flex-col items-center w-[80%] mx-auto'>
      <TabSwitcher data={tags} />
    </div>
  )
}

export default Gallery