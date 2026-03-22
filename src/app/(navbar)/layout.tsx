import Navbar from '@/src/components/ui/navbar';
import Footer from '@/src/modules/landing-page/footer';

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
