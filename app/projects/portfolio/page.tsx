export default function Project() {
  return (
    <main className="flex flex-col min-h-screen gap-8">
      {/* HEADER */}
      <div>
        <h1 className='text-4xl text-green-600'>Portfolio</h1>
        <a href='https://github.com/Echinoidea/Portfolio'>https://github.com/Echinoidea/Portfolio</a>
      </div>
      
      {/* TEXT SECTION 1 --- INTRO */}
      <div className="flex flex-col items-center">
        <div className='max-w-2xl'>
          <p>I created this website with Next.js and componenets from shadcn-ui.</p> 
        </div>
      </div>
      
      {/* IMAGE GRID SECTION */}
    </main>
  )
}