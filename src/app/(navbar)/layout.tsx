import Navbar from '@/src/components/ui/navbar';
import Footer from '@/src/components/ui/footer';

export default function NavbarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Navbar />
      <Footer />
    </>
  );
}
