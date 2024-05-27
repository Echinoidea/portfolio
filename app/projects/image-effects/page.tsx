'use client';

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import Image from 'next/image';

import GuiImage from '@/public/image-effects/gui.png';

function ImageCarousel({
  imagePaths,
}: {
  imagePaths: string[];
}) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      className="w-full max-w-screen-xl"
    >
      <CarouselContent >
        {imagePaths.map((imagePath, index) => (
          <CarouselItem key={index} className="basis-1/4">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-2">
                <img
                  src={imagePath}
                  alt=""
                  className=""
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

function ImageCarouselComparison({
  imagePaths,
}: {
  imagePaths: string[];
}) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      className="w-full max-w-screen-xl"
    >
      <CarouselContent >
        {imagePaths.map((imagePath, index) => (
          <CarouselItem key={index} className="basis-1/2 ">
          <div className="p-1">
            <Card className="m-20">
              <CardContent className="flex aspect-square items-center justify-center p-6 ">
                <img
                  src={imagePath}
                  alt=""
                  className="object-scale-down max-h-full"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

function ImageComparison({
  image1Path,
  image2Path,
  caption,
}:
{
  image1Path: string,
  image2Path: string,
  caption?: string,
}) {
  return(
    <div className="flex flex-col items-center">
      <div className='flex flex-row items-center'>
        <img
          src={image1Path}
          alt="Image A"
        />
        <img
          src={image2Path}
          alt="Image B"
        />
      </div>
      {caption}
    </div>
    
  )
}

function ImageCaption({
  imagePath,
  caption,
}:
{
  imagePath: string,
  caption?: string,
}) {
  return(
    <div className="flex flex-col items-center">
      <img
          src={imagePath}
          alt={imagePath}
        />
      {caption}
    </div>
  )
}


import { CodeBlock, CopyBlock,dracula } from "react-code-blocks";
import { ReactNode } from "react";
import my_code from './codeblocks'

const favoriteImages : string[] = [
  '/image-effects/favorites/1.jpg', 
  '/image-effects/favorites/2.png', 
  '/image-effects/favorites/3.jpg', 
  '/image-effects/favorites/5.jpg',
  '/image-effects/favorites/6.jpg',
  '/image-effects/favorites/7.jpg'
]

const gmSanFranImages : string[] = [
  '/image-effects/gmSanFran/1.jpg', 
  '/image-effects/gmSanFran/2.jpg', 
  '/image-effects/gmSanFran/3.jpg', 
  '/image-effects/gmSanFran/4.jpg', 
  '/image-effects/gmSanFran/5.jpg', 
  '/image-effects/gmSanFran/6.jpg', 
  '/image-effects/gmSanFran/7.jpg', 
  '/image-effects/gmSanFran/8.jpg', 
]

const vashComparison = [
  '/image-effects/trigun/vash.jpg', 
  '/image-effects/trigun/vash pop art.jpg', 
]

const evaVariants = [
  '/image-effects/evaVariants/1.jpg', 
  '/image-effects/evaVariants/2.jpg', 
  '/image-effects/evaVariants/3.jpg', 
  '/image-effects/evaVariants/4.jpg', 
  '/image-effects/evaVariants/5.jpg', 
  '/image-effects/evaVariants/6.jpg', 
  '/image-effects/evaVariants/7.jpg', 
  '/image-effects/evaVariants/8.jpg', 
  '/image-effects/evaVariants/9.jpg', 
  '/image-effects/evaVariants/10.jpg', 
  '/image-effects/evaVariants/11.jpg', 
  '/image-effects/evaVariants/12.jpg', 
  '/image-effects/evaVariants/13.jpg', 
  '/image-effects/evaVariants/14.jpg', 
  '/image-effects/evaVariants/15.jpg', 
  '/image-effects/evaVariants/16.jpg', 
  '/image-effects/evaVariants/17.jpg', 
]

export default function Project() {
  return (
    <main className="flex flex-col min-h-screen gap-16">
      {/* HEADER AND CAROUSEL  */}
      <div>
        <h1 className='text-4xl'>Image Effects</h1>
        <a href='https://github.com/Echinoidea/ImageEffects'>https://github.com/Echinoidea/ImageEffects</a>
      </div>
      
      <div className="flex flex-col items-center">
        <ImageCarousel imagePaths={favoriteImages}/>
      </div>

      {/* TEXT SECTION 1*/}
      <div className="flex flex-col items-center gap-8">
        <div className='max-w-2xl'>
          <span >I wrote this program in C# and used WPF for the GUI. I made this for a couple of reasons: 
          1. I wanted to get back into C#. 2. I wanted to make something that had a visible result. 
          I was inspired by this blog to make a project like this.</span>&nbsp;
          <a href='https://softwarebydefault.com' className="underline">softwarebydefault.com</a>
        </div>

        <div className='flex flex-col items-center'>
          <Image
            src={GuiImage}
            width={750}
            height={500}
            alt="gui"
          />
          ImageEffects.exe
        </div>

        <div className='max-w-2xl'>
          This is probably my favorite personal project. I've spent hours doing different combinations of effects and I have lots of ideas for new filters that I haven't 
          implemented yet. 

          <br/><br/>

          My favorite feature are the bitwise operators. The function compares each pixel's RGB values to the selected comparison color like this
          <br/>
          <code>r1 | r2, g1 | g2, b1 | b2</code>
          
        </div>
      </div>


      <ImageComparison image1Path={vashComparison[0]} image2Path={vashComparison[1]} caption="Vash the Stampede - AND(Crimson); Shift(left, 1)"/>
      <div className='flex flex-col items-center'>
        One of my favorite uses for this program is making these stencil/pop-art style images. The process works best on images with flat colors and clean lines.
        Anime is a good subject for this.
      </div>

      <div className="flex flex-col items-center">
        Here's the implementation of the or operation on the pixels of a bitmap.
        <CodeBlock text={my_code['function_bitmapOR']} language="csharp"/>
      </div>


      <div className="flex flex-col items-center">
        The effects of each operation is really interesting:<br/><br/>
        <div className="flex flex-col max-w-2xl">
          
          <div><strong>OR</strong> - Black is replaced with the selected color, and white remains the same. <br/></div>
          <ImageCaption imagePath='/image-effects/or and xor demo/OR purple.jpg' caption="OR purple"/>
          <br/>
          AND - Overlays the entire image with the selected color<br/>
          XOR - Does an inversion effect where black is set to the selected color, and white is the selected color's complement.<br/>
        </div>
      </div>


      <div className="flex flex-col items-center">
        <div className="flex flex-col max-w-2xl">
          Another option is to perform a variant of one of the bitwise operators on the image. A variant being one of the 2^6 combinations of the formula 
          <code>a | b, c | d, e | f</code>
          <br></br>
          OR variant 1, for example, is 
          <code>r1 | r1, r1 | r1, r1 | r1</code>
          And variant 2 is
          <code>r1 | r1, r1 | r1, r1 | r2</code>
          And so on.
          <br></br>
          Unfortunately, my function still generates duplicates, so here are the unique outputs of this image compared to the color Peach Puff with OR.
        </div>
        <ImageCarousel imagePaths={evaVariants}/>
      </div>


      {/* GALLERY */}
      <p className="text-3xl">Gallery</p>

      <div className="flex flex-col items-center">
        <ImageCarousel imagePaths={gmSanFranImages}/>
      </div>
    </main>
  );
}