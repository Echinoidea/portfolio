import Image from "next/image"
import midasScreenshot  from '@/public/midas/midas screenshot.png';

export default function Experience() {
  return (
    <main className="flex min-h-screen flex-col gap-8">
      <h1 className='text-4xl text-green-600'>Project MIDAS - Web Developer</h1>

      <div className="flex flex-col items-center">
        <div className='flex flex-col max-w-3xl gap-4'>
          <p>
            Project MIDAS is a school psychology research project where student behavior and academic behavior is collected and analyzed
            to create a future risk predictor index. This data can then be used to proactively help these at risk groups by knowing where to allocate funds,
            refocusing curriculums, and so on.
          </p>

          <p>
            I'm working with one other developer and a group of researchers to create a website using Next.js that will be used by school counsellors, teachers, and researchers. 
          </p>
          <br></br>
          <p>The main features are as follows: </p>

          <div>
          <p>
            - Dashboards for different subsets of the population going from school, grade, classroom, and then individual students.
          </p>
          <p>
            - Student data uploading and data validation.
          </p>
          <p>
            - Secure and authorized login system. Student mental health and academic data is very protected and users are only able to access data from the
            school they belong to.
          </p>
          </div>

          <div>
            <p>Tech stack and Libraries:</p>
            <p>- Next.js with TypeScript</p>
            <p>- Next UI</p>
            <p>- Tailwind CSS</p>
            <p>- PostgreSQL with Supabase</p>
            <p>- Nivo (for charts)</p>
            <p>- NextAuth (for authentication)</p>
          </div>

          <p>Projected minimum viable product release date is July 1st for trialing. 10 schools are participating in the trial.</p>
        </div>
      </div>
    </main>
  )
}