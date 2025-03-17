export default function ShowProfile({ profile, setShowCode }) {
  // qr code modal leading to Telegram
  return (
    <div
      onClick={() => setShowCode(false)}
      className="fixed inset-0 flex justify-center items-center bg-gray-100/85 bg-opacity-50 backdrop-blur-xl z-50"
    >
      <div className="shadow-2xl  absolute  bg-white z-200 p-8 w-70 sm:w-80 md:w-90 lg:w-120 h-80 border-1  border-gray-200 rounded-2xl">
        <div className="flex flex-col items-center h-60 justify-center">
          <span className="text-xl font-bold text-gray-700">
            You can find me here!
          </span>
          <img src={profile} className="size-36" />
        </div>
      </div>
    </div>
  );
}
