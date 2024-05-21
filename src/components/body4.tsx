import img10 from './assets/motionarteffect-img10.png'
import img11 from './assets/motionarteffect-img11.png'

export default function body4() {
  return (
    <div className=''>
      <div className='text-white text-[35px] font-sora font-semibold mx-10 flex justify-center my-24 '>
        <h1>Apply On Any Section Or Enable For Whole Page</h1>
      </div>

      <div className='grid  grid-rows-5 grid-cols-8 max-h-[900px] gap-10'>
        <div className='flex flex-col gap-5 border-t p-7 rounded-3xl bg-gradient-to-b from-[#0D061F] to-[#251E35] col-start-1 col-end-5 row-start-1 row-end-5'>
          <h1 className='text-white font-sora text-[25px]'>Apply On Section</h1>
          <p className='text-slate-400 text-[18px] font-outfit'>
            Apply on section is a game-changer, offering an unparalleled way to
            manage applications directly from your website.{" "}
          </p>
          <img src={img11} alt="" />
        </div>

        <div className='flex flex-col gap-5 border-t p-7 rounded-3xl bg-gradient-to-b from-[#0D061F] to-[#251E35] col-start-5 col-end-9 row-start-2 row-end-6'>
          <h1 className='text-white font-sora text-[25px]'>Apply On Section</h1>
          <p className='text-slate-400 text-[18px] font-outfit'>
            Apply on section is a game-changer, offering an unparalleled way to
            manage applications directly from your website.{" "}
          </p>
          <img src={img10} alt="img10" />
        </div>

      </div>
    </div>
  );
}
