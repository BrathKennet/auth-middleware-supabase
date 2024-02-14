export default function LoadingAnimation() {
  return (
    <div className="flex items-center justify-center ">
      <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="ml-2">Loading...</p>
    </div>
  );
}
