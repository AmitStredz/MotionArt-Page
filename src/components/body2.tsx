import img1 from './assets/motionarteffect-img1.png'
import img2 from './assets/motionarteffect-img2.png'
import img3 from './assets/motionarteffect-img3.png'
import img4 from './assets/motionarteffect-img4.png'

export default function body2() {
  return (
    <div className='flex-col py-20'>
      <div className='flex justify-center text-[22px] text-slate-300 font-outfit'>
        <h1>Trusted by thousands of users around the world</h1>
      </div>

      <div className='flex justify-between py-20'>
            <div className='flex items-center gap-2'>
                <img src={img2} alt="img2" />
                <div className='text-slate-300 font-sora flex flex-col gap-4'>
                    <img src={img4} alt="img4" />
                    <p>4.5 Score, 9 Reviews</p>
                </div>
            </div>

            <div className='flex items-center gap-2'>
                <img src={img1} alt="img1" />
                <div className='text-slate-300 font-sora flex flex-col gap-4'>
                    <img src={img4} alt="img4" />
                    <p>4.5 Score, 9 Reviews</p>
                </div>
            </div>

            <div className='flex items-center gap-x-2'>
                <img src={img3} alt="img3" />
                <div className='text-slate-300 font-sora flex flex-col gap-4'>
                    <img src={img4} alt="img4" />
                    <p>4.5 Score, 9 Reviews</p>
                </div>
            </div>
      </div>
    </div>
  )
}
