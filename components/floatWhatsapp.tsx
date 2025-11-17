"use client";

export default function FloatingContacts() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center space-y-3">

      {/* Call Button */}
      <a
        href="tel:+91XXXXXXXXXX"   // put your number here
        className="   flex items-center justify-center "
      >
        <img
          src="/logo/call.png"     // use any calling icon you have
          alt="Call"
          className="w-10 h-10"
        />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=&text=Hi&type=phone_number"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center"
      >
        <img
          src="/logo/whatsapp.gif"
          alt="WhatsApp"
          className="w-10 h-10 rounded-full"
        />
      </a>

    </div>
  );
}
