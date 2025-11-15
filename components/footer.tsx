import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] pt-24 pb-12 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4">
        {/* TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* LEFT SECTION — QUERIES + EMAIL */}
          <div>
            <h3 className="text-[28px] font-bold text-[#142c24] leading-snug mb-6">
              Have any queries?
              <br />
              <span className="text-[#019c70]">Our team is here to assist</span>
            </h3>

            <label className="text-xs text-gray-500">EMAIL</label>
            <input
              type="email"
              className="block w-full border-b border-gray-400 bg-transparent pb-1 mt-2 text-[#142c24] focus:border-[#019c70] outline-none"
            />
          </div>

          {/* CENTER — NAVIGATION */}
          <div>
            <h3 className="font-bold text-[#142c24] mb-4 text-sm tracking-wide">NAVIGATION</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><a href="#" className="hover:text-[#019c70]">Why Choose Us</a></li>
              <li><a href="#services" className="hover:text-[#019c70]">Services</a></li>
              <li><a href="#team" className="hover:text-[#019c70]">Team</a></li>
              <li><a href="#faq" className="hover:text-[#019c70]">FAQ</a></li>
              <li><a href="#contact" className="hover:text-[#019c70]">Contact</a></li>
            </ul>
          </div>

          {/* RIGHT — OFFICE HOURS */}
          <div>
            <h3 className="font-bold text-[#142c24] mb-4 text-sm tracking-wide">OFFICE HOURS</h3>
            <p className="text-gray-700 text-sm">MONDAY–FRIDAY</p>
            <p className="font-semibold text-[#142c24] text-sm">9:00–19:00</p>
          </div>
        </div>


        {/* MASSIVE DENTALNOW TEXT */}
        <div className="relative mt-5 mb-5 lg:mb-20">
          <h1 className="text-[18vw] md:text-[14vw] font-extrabold leading-none text-[#019c70] tracking-tight">
            DentalNow
          </h1>

          {/* Floating Arrow Button */}
          {/* <button
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center shadow hover:bg-[#019c70] transition"
          >
            <ArrowUp size={28} />
          </button> */}
        </div>


        {/* BOTTOM LINKS */}
        <div className="flex justify-end gap-10 text-sm text-gray-700">
          <a href="#" className="hover:text-[#019c70]">PRIVACY POLICY</a>
          <a href="#" className="hover:text-[#019c70]">COOKIES SETTINGS</a>
        </div>

      </div>
    </footer>
  );
}
