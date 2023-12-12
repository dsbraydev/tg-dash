"useclient";
export default function Loading() {
  // The position fixed is causing console errors and needs to be investigated
  return (
    <div className="fixed top-0 left-0 z-999999 flex h-screen w-screen items-center justify-center bg-white">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
  );
}
