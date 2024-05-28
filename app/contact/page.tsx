import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col gap-8">
      <h1 className='text-4xl'>Contact Me</h1>

      <div className="flex flex-col items-center gap-8">
        <form className="flex flex-col gap-6 items-center w-full max-w-screen-md">
          <Input type="text" placeholder="full name"/>
          <Input type="email" placeholder="email@website.com"/>
          <Textarea placeholder="your message" className='h-52'/>
          <Button type="submit" variant={"outline"}>Send</Button>
        </form>
      </div>
    </main>
  )
}