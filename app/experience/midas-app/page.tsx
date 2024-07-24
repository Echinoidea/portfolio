export default function Experience() {
  return (
    <main className="flex min-h-screen flex-col gap-8">
      <h1 className='text-4xl text-green-600'>SAEBRS Early Childhood - Web Dev & Research</h1>

      <div className="flex flex-col items-center">
        <div className='flex flex-col max-w-3xl gap-4'>
          
          <p>
            The MIDAS team previously developed a K-12 student mental health screening system called SAEBRS. This is the foundation of the MIDAS analytical model. 
            We are beginning a new project to extend the SAEBRS index for young children in pre-kindergarten. This will be done through a number of evolving surveys
            given to caretakers and preschool teachers over the course of a year. 
          </p>

          <br/>
          <p>
            I am working with two other developers to develop a cross-platform web-based app using React Native and the Expo framework. 
          </p>

          <br/><br/>

          <p>
            The project is split into two parts:
          </p>
          <br/>
          <div className='flex flex-col gap-2'>
            <p>
              1: Survey mobile app - The app that teachers and caretakers will be provided to complete surveys.
            </p>
            <p>
              2: Admin dashboard - Where the research team can monitor survey progress, upload new surveys, and view survey data.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}