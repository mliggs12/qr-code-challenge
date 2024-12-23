import Image from "next/image";

export default function QRCode() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-light">
      <div className="flex flex-col space-y-6 p-4 w-[325px] bg-white rounded-2xl shadow-xl">
        <Image
          src="/image-qr-code.png"
          alt="QR Code"
          width={576}
          height={576}
          className="rounded-lg"
        />
        <div className="text-center px-4 pb-6 space-y-4">
          <h2 className="font-bold text-xl text-slate-dark">
            Improve your front-end skills by building projects
          </h2>
          <p className="text-slate-medium">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}
