import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-8">
      {/* <h1 className='text-4xl'>Home</h1> */}

      <div className="flex flex-col items-center gap-16">
        <div className='flex flex-col max-w-3xl text-lg'>
          <p>I'm Gabriel. I'm interested in web and game development.</p>
          <p>I'm a college senior in Florida and I'm looking for an internship.</p>
          <br/>
          <p>Thanks for checking out my website. I'm going to be updating it regularly with new projects.</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl font-medium mb-4">Featured Pages</p>
          
          <Link href="/projects/image-effects" className="text-xl w-full">
            <Card className="px-16 py-4 w-full">
              Image Effects
            </Card>
          </Link> 

          <Link href="/experience/midas" className="text-xl w-full">
            <Card className="px-16 py-4 w-full">
              Project MIDAS
            </Card>
          </Link>
        </div>
      </div>
    </main>
  );
}
