import Image from "next/image"
import earnings  from '@/public/courier-path/earnings.png';
import orders  from '@/public/courier-path/orders.png';

export default function Project() {
    return (
      <main className="flex flex-col min-h-screen gap-8">
        {/* HEADER */}
        <div>
          <h1 className='text-4xl text-green-600'>CourierPath (in development)  </h1>
        </div>
        
        {/* TEXT SECTION 1 --- INTRO */}
        <div className="flex flex-col items-center gap-4">
          <div className='max-w-2xl'>
            <p>
                I used to do a lot of UberEats and DoorDash and I wanted to make a website I could use to optimize my earnings.
            </p>

            <p>
                I noticed a lot of patterns around time of day, day of the week, season, weather, trip duration, area, etc. So, I wanted an easy way
                to gather this data so I can make the best decisions around my delivery work.
            </p>

            <br/>

            <div>
                <p>This project will feature the following:</p>
                <p>&bull; Earnings dashboard - hourly wage, time spent, earnings per day, etc</p>
                <p>&bull; Order insights - best types of deliveries, where to get the best types, etc</p>
                <p>&bull; Profit insights - summarize the most important data to maximize earnings</p>
                <p>&bull; Map - heatmap of active areas and traffic overlays</p>
                <p>&bull; Finances - Summary of a selected quarter's income, taxes, and calculating tax deductions</p>
            </div>
           
            <br/>

            <p>
                I'm developing this with my dev partner from the Midas website, it's still very early in development. My biggest challenge currently is 
                using the food delivery company APIs for OAuth to get the users order data.
            </p>
          </div>
  
          
  
          <div className='flex flex-col max-w-4xl gap-1'>
            <p>Here are some screenshots of the UI. I'm using shadcn-ui.</p>
            <Image src={earnings} alt="CourierPath earnings dashboard"/>
            <Image src={orders} alt="CourierPath order insights dashboard"/>
          </div>
        </div>
      </main>
    )
  }