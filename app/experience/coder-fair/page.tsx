export default function Experience() {
    return (
      <main className="flex min-h-screen flex-col gap-8">
        <h1 className='text-4xl text-green-600'>The Coder School - The Coder Fair Website/App</h1>
  
        <div className="flex flex-col items-center">
          <div className='flex flex-col max-w-3xl gap-4'>
            
            <p>
              Every year at the Coder School, there is a coder fair. During the coder fair, all the students can display and showcase their projects from the past year.
            </p>

            <br/>

            <p>
                We are developing a website using Next.js where students can upload their projects with videos, descriptions, and what they learned. Students may also 
                search for other student's projects for inspiration or learning. Additionally, there will be a voting system to determine 'winners' of the coder fair.
                Lastly, there will be a share function, where you can generate a link that will direct to an isolated profile page.
            </p>
          </div>
        </div>
      </main>
    )
  }