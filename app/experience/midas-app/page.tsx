export default function Experience() {
  return (
    <main className="flex min-h-screen flex-col gap-8">
      <h1 className='text-4xl text-green-600'>Project MIDAS - Mobile Developer</h1>

      <div className="flex flex-col items-center">
        <div className='flex flex-col max-w-3xl'>
          <p>
            Project MIDAS uses data from a third-party for some of their analysis. So, to reduce costs and use more bespoke data, we are developing an app that
            will host a questionaire our research group is developing. The questionaire will start with a lot of questions, and over a few trials, less important
            questions will be filtered out and a small but potent survey will have been created.
          </p>
          <br></br>
          <p>
            The data from this survey will replace the data from the third-party. The app will be used heavily initially to replace the old data, and then on a rolling
            basis as students leave and join schools.
          </p>
          <br></br>
          <p>
            To keep a similar tech stack, we plan on using React Native with Expo to develop the app. Development is planned to begin in mid-June and finish by the end of the summer.
          </p>
        </div>
      </div>
    </main>
  )
}