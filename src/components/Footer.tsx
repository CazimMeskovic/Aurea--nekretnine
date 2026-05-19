export default function Footer() {
  return (
    <footer className="mt-auto bg-green-700 text-white py-6 w-full ">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <span className="font-semibold">&copy; {new Date().getFullYear()} Trava. Sva prava zadržana.</span>
        <span className="mt-2 md:mt-0">Izrada: Profesionalni tim Trava</span>
      </div>
    </footer>
  );
}
