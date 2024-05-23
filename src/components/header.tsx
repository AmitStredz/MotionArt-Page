import motionLogo from "./assets/MotionArtEffect-logo.png";

export default function Header() {
  return (
    <div className="flex justify-between items-center py-10">
      <div className="cursor-pointer">
        <img src={motionLogo} alt="logo" />
      </div>
      <div
        className="text-lg font-outfit bg-white rounded-md p-3 px-10 hover:bg-transparent hover:text-white border-2 transition-all max-lg:hidden cursor-pointer"
        onClick={function redirect() {
          window.open(
            "https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891",
            "_blank"
          );
        }}
      >
        <button>Purchase Now</button>
      </div>
    </div>
  );
}
