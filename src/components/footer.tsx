export default function footer() {
  return (
    <div className="flex text-slate-300 font-light font-outfit text-[14px] justify-center bg-gradient-to-r from-[#F87517] to-[#5E11FD] mt-16 2xl:mb-2 p-4 2xl:px-16">
      <div className="grid max-lg:grid-rows-2 lg:grid-cols-2 w-full 2xl:w-11/12 gap-5">
        <div className="w-full lg:justify-start justify-center flex max-lg:row-start-2">
          <p className="text-center">© 2023 Copywrite. All rights reserved by QodeMatrix</p>
        </div>
        <div className="flex gap-5 lg:justify-end justify-center">
          <a
            className="hover:text-slate-200 transition-all"
            href="https://qodematrix.com/docs/motion-art-for-elementor/"
            target="_blank"
          >
            Documentation
          </a>
          <a
            className="hover:text-slate-200 transition-all"
            href="https://support.qodematrix.com/login"
            target="_blank"
          >
            Support
          </a>
        </div>
      </div>
    </div>
  );
}
