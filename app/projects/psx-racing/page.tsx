export default function Project() {
  return (
    <main className="flex flex-col min-h-screen gap-8">
      {/* HEADER */}
      <div>
        <h1 className='text-4xl text-green-600'>PSX Racing</h1>
      </div>
      
      {/* TEXT SECTION 1 --- INTRO */}
      <div className="flex flex-col items-center gap-4">
        <div className='max-w-2xl'>
          <p>I love Need for Speed III and I love drum and bass music so I wanted to make my own PS1 style racing game with DnB that I've made.</p>
          <p>This is a new project and I'm just prototyping right now. I'll be updating this page as I continue development.</p>
        </div>

        <video width="800" height="800" controls preload="none">
          <source src="/psx-racing/full.mp4" type="video/mp4" />
        </video>

        <div className='max-w-2xl'>
          <p>
            This will be my first full game made with Godot. I'm planning on making this a fully fleshed-out 
            racing game with a decent amount of levels, cars, music, and game modes
          </p><br/>
          <p>
            My biggest roadblock is learning how to use Blender to make my own assets. The assets in the video are public assets.
            I'm okay with this project taking a year or so. I have a lot of art and music to make for it. Fortunately, I'm already 
            pretty experienced in making electronic music so that shouldn't be too much of an issue.
          </p><br/>
          <p>
            I'm not planning on selling this game or anything. It's just for me to enjoy making and playing myself.
          </p>
        </div>
      </div>
      
      {/* IMAGE GRID SECTION */}
    </main>
  )
}