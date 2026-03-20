import Container from '@/src/components/ui/container';
import RegistrationForm from '@/src/components/registration/registration-form';

export default function RegistrationPage() {
  return (
    <div className="min-h-screen bg-primary-900 flex flex-col">
      <main className="flex-1 pt-20 pb-20">
        <Container>
          <div className="text-center">
            <h2 className="font-bold text-secondary-100">
              Competition Registration Form
            </h2>
          </div>
          <RegistrationForm />
        </Container>
      </main>
    </div>
  );
}
