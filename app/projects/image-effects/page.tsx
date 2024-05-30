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
import Image, { StaticImageData } from 'next/image';
import { CodeBlock, CopyBlock,dracula } from "react-code-blocks";

import GuiImage from '@/public/image-effects/gui.png';
import "./images";
import my_code from './codeblocks'


import { fav1, fav2, fav3, fav4, fav5, fav6, fav7, fav8, fav9, fav10, fav11, fav12, fav13, fav14 } from "./images";
import { tg1, tg2 } from "./images"
import { jackorigin, jack1, jack2, jack3, jack4, jack5, jack6} from "./images";
import { bitwiseOrigin, orDemo, andDemo, xorDemo} from "./images";
import { eva1, eva2, eva3, eva4, eva5, eva6, eva7, eva8, eva9, eva10, eva11, eva12, eva13, eva14, eva15, eva16, eva17} from "./images";

function ImageCarousel({
  images,
}: {
  images: StaticImageData[];
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
        {images.map((image, index) => (
          <CarouselItem key={index} className="max-sm:basis-full basis-1/4">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-2">
              <Image
                src={image}
                width={250}
                height={250}
                alt=""
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
  image1,
  image2,
  caption,
}:
{
  image1: StaticImageData,
  image2: StaticImageData,
  caption?: string,
}) {
  return(
    <div className="flex flex-col items-center">
      <div className='flex md:flex-row flex-col items-center'>
        <Image
          src={image1}
          alt=""
        />
        <Image
          src={image2}
          alt=""
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

function ImageCaption2({
  image,
  width,
  height,
  max_h,
  caption,
}:
{
  image: StaticImageData;
  width: number;
  height: number;
  max_h?: number;
  caption?: string;
}) {
  return(
    <div className="flex flex-col items-center">
      <Image
        src={image}
        width={width}
        height={height}
        alt={""}
        className="max-h-96"
      />
      {caption}
    </div>
  )
}

export default function Project() {
  return (
    <main className="flex flex-col min-h-screen gap-16">
      {/* HEADER AND CAROUSEL  */}
      <div>
        <h1 className='text-4xl'>Image Effects</h1>
        <a href='https://github.com/Echinoidea/ImageEffects'>https://github.com/Echinoidea/ImageEffects</a>
      </div>
      
      <div className="flex flex-col items-center">
        {/* <ImageCarousel imagePaths={favoriteImages}/> */}
        <ImageCarousel images={[fav1, fav2, fav3, fav5, fav6, fav7, fav8, fav9, fav10, fav11, fav12, fav13, fav14]}/>
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
          <p>ImageEffects.exe</p>
        </div>

        <div className='max-w-2xl'>
          <p>This is probably my favorite personal project. I've spent hours doing different combinations of effects and I have lots of ideas for new filters that I haven't 
          implemented yet. </p>

          <br/><br/>

          <p>My favorite feature are the bitwise operators. The function compares each pixel's RGB values to the selected comparison color like this</p>
          <br/>
          <code>r1 | r2, g1 | g2, b1 | b2</code>
          
        </div>
      </div>

      <div className='flex flex-col items-center max-w-screen-xl'>
        <ImageComparison image1={tg1} image2={tg2} caption="Vash the Stampede - AND(Crimson); Shift(left, 1)"/>
      </div>
      

      <div className='flex flex-col items-center'>
      <p>One of my favorite uses for this program is making these stencil/pop-art style images. The process works best on images with flat colors and clean lines.
        Anime is a good subject for this.</p>
      </div>

      <div className="flex flex-col items-center max-md:hidden">
        <p>Here's the implementation of the or operation on the pixels of a bitmap.</p>
        <CodeBlock text={my_code['function_bitmapOR']} language="csharp"/>
      </div>


      <div className="flex flex-col items-center">
        <p>The effects of each operation is really interesting:</p><br/>
        <div className="flex flex-col max-w-2xl gap-4">
          <ImageCaption2 image={bitwiseOrigin} width={1728} height={2592} caption="Black to White Gradient"/>

          <div>
          <p>OR - Replaces dark with selected color</p>
          <ImageCaption2 image={orDemo} width={1728} height={2592} caption="OR(aqua)"/>
          </div>

          <div>
          <p>AND - Overlays the entire image with the selected color</p>
          <ImageCaption2 image={andDemo} width={1728} height={2592} caption="AND(aqua)"/>
          </div>

          <div>
          <p>XOR - Does an inversion effect where black is set to the selected color, and white is the selected color's complement.</p>
          <ImageCaption2 image={xorDemo} width={1728} height={2592} caption="XOR(aqua)"/>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-lg font-bold">Techniques</p><br/>
        <div className="flex flex-col max-w-2xl gap-4">
        <ImageCaption2 image={jackorigin} width={1639} height={922} caption="Original"/>
          <ImageCaption2 image={jack2} width={1639} height={922} caption="Stencil art - Shift(left, 1), AND(strong color), Shift(left, 1)"/>
          <ImageCaption2 image={jack3} width={1639} height={922} caption="Sepia background - Shift(left, 2), AND(light color)"/>
          <ImageCaption2 image={jack4} width={1639} height={922} caption="Light stencil - Shift(left, 2), AND(light color), OR(main color[red])"/>
          <ImageCaption2 image={jack5} width={1639} height={922} caption="Invert - XOR(white)"/>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col max-w-2xl">
          <p>Another option is to perform a variant of one of the bitwise operators on the image. A variant being one of the 2^6 combinations of the formula </p>
          <code>a | b, c | d, e | f</code>
          <p>OR variant 1, for example, is </p>
          <code>r1 | r1, r1 | r1, r1 | r1</code>
          <p>And variant 2 is</p>
          <code>r1 | r1, r1 | r1, r1 | r2</code>
          <p>And so on.</p>
          <p>Unfortunately, my function still generates duplicates, so here are the unique outputs of this image compared to the color Peach Puff with OR.</p>
        </div>
        <ImageCarousel images={[eva1, eva2, eva3, eva4, eva5, eva6, eva7, eva8, eva9, eva10, eva11, eva12, eva13, eva14, eva15, eva16, eva17]}/>
      </div>
    </main>
  );
}