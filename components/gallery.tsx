'use client';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Tag } from '@/types';
import LightGalleryComponent from "lightgallery/react";
import { LightGallery } from "lightgallery/lightgallery";
import { useRef } from "react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import { Eye } from 'lucide-react';

const Gallery = ({
  images,
  tags
}: {
  images: any;
  tags: Tag[]
}) => {
  const [imgs, setImgs] = useState(images);

  const [selectedTab, setSelectedTab] = useState('all');

  const lightboxRef = useRef<LightGallery | null>(null);

  const filterImages = (tagId: string) => {
    if (tagId != 'all')
      images = images.filter((image: any) => image.tagId == tagId)
    setImgs(images)
    setSelectedTab(tagId)
  }

  useEffect(() => {

  }, [])
  return (
    <>
      <div className='flex flex-row gap-10 py-8 text-lg'>
        {
          tags.map((tag) => (<p key={tag.id} className={`hover:cursor-pointer ${tag.id == selectedTab ? 'font-bold': 'font-light'}`} onClick={() => filterImages(tag.id)}>{tag.name}</p>))
        }
      </div>
      <div className='grid grid-cols-12 w-full pb-10'>
        {
          imgs.map((image: any, idx: any) => {
            return <div key={image.id} className='
              col-span-6 sm:col-span-4 lg:col-span-3 
              aspect-square relative'>
              <Image
                alt="Image"
                className='w-[100%] h-[80%] object-cover p-1 relative'
                src={image.url}
                fill
              />
              <div
                className="absolute w-full h-full inset-0 bg-transparent cursor-pointer opacity-0 hover:opacity-75 transition-all duration-300 ease-in-out"
                onClick={() => {
                  lightboxRef.current?.openGallery(idx);
                }}
              >
                <Eye className='m-32 bg-zinc-800 text-white p-1 rounded-full scale-150'/>
              </div>
            </div>
          })
        }
      </div>
      <LightGalleryComponent
        onInit={(ref) => {
          if (ref) {
            lightboxRef.current = ref.instance;
          }
        }}
        speed={500}
        plugins={[lgThumbnail, lgZoom,]}
        dynamic
        dynamicEl={imgs.map((image: any) => ({
          src: image.url,
          thumb: image.url,
          subHtml: `
            <div>
              <h3>${image.title}</h3>
              <p>${image.description}</p>
            <div>
          `
        }))}
      />
    </>
  )
}

export default Gallery