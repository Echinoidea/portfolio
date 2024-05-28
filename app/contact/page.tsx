"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner"


export default function Contact() {
  async function handleSubmit(e: any) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: "0ddc070f-0d27-4b96-8659-b7053a646e43",
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        }),
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
        e.target.reset();
        
    }
    toast("Message sent")
}
  
  return (
    <main className="flex min-h-screen flex-col gap-8">
      <h1 className='text-4xl'>Contact Me</h1>

      <div className="flex flex-col items-center gap-8">
        <form className="flex flex-col gap-6 items-center w-full max-w-screen-md" onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="full name"/>
          <Input type="email" name="email" placeholder="email@website.com"/>
          <Textarea name="message" placeholder="your message" className='h-52'/>
          <Button type="submit" variant={"outline"}>Send</Button>
        </form>
      </div>
    </main>
  )
}