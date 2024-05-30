import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";

import { ReactNode } from "react";

function Post({
  title,
  date,
  category,
  children,
}: {
  title: string;
  date: string;
  category: string;
  children: ReactNode
}) {
  return (
    <Card className='flex flex-col min-w-full'>
      <CardHeader>
        <h2 className='text-lg'>{title}</h2>
        <h3 className="text-md">{date} | {category}</h3>
      </CardHeader>

      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}

export default function Blog() {
  return (
    <main className="flex flex-col min-h-screen gap-8">
      {/* <h1 className='text-4xl'>The Coder School - Coding Coach</h1> */}
      
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-8 max-w-screen-lg w-full">
          <Post title='Seamless Texture Generator' date='5/28/2024' category="Tech">
            <p>This website has helped me a few times when prototyping games.</p>
            <a href="https://www.imgonline.com.ua/eng/make-seamless-texture.php">https://www.imgonline.com.ua/eng/make-seamless-texture.php</a>
          </Post>
          <Post title='River Runner' date='5/23/2024' category="Tech">
            <p>Follow a drop of water's path to an ocean from anywhere in the world.</p>
            <a href="https://river-runner-global.samlearner.com">https://river-runner-global.samlearner.com</a>
          </Post>
          
          <Post title='Tamriel Rebuilt' date='5/23/2024' category="Modding">
            <p>My favorite mod for my favorite game. It's been in development for 18 years now.</p>
            <a href="https://www.tamriel-rebuilt.org">https://www.tamriel-rebuilt.org</a>
            <div className="flex flex-col items-center pt-10">
              <img
                src='https://www.tamriel-rebuilt.org/sites/default/files/forumfiles/small_pr_2023-04_01_future_map.jpg'
                alt=""
              />
            </div>
          </Post>
          
          <Post title='wurstcaptures.untergrund C one-liner sound' date='5/23/2024' category="Music">
            <p>Generate sound using one line of C of bitwise operations and math.</p>
            <a href="https://wurstcaptures.untergrund.net/music/">https://wurstcaptures.untergrund.net/music/</a>
            <div className="flex flex-col items-center pt-10">
              <img
                src='/blog/c-oneliner.png'
                alt=""
              />
            </div>
          </Post>
          
          <Post title='First Post' date='5/23/2024' category="Misc.">
            <p>Hi, this is my first post. This blog feels a little bit cheesy but it's more for myself than anything.</p>
          </Post>
        </div>
      </div>
      
    </main>
  )
}