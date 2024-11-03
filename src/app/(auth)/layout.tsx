export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex justify-center items-center h-screen overflow-x-hidden">
      {children}
    </div>
  );
}
