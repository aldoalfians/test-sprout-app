export default function Footer() {
  return (
    <footer className="w-full mt-32 border-t-1 border-solid text-primary font-medium text-lg md:text-base xs:text-sm">
      <div className="flex justify-center text-center items-center py-8">
        ©{new Date().getFullYear().toString()}
        <strong>aldoalfians</strong>. All Rights Reserved
      </div>
    </footer>
  );
}
