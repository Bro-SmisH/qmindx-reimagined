import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CareerFormSection from "@/components/careers/CareerFormSection";

const Apply = () => {
  return (
    <div className="min-h-screen">
      <Header />
  <main id="main-content" role="main" style={{ paddingTop: 'var(--header-offset)' }}>
        <CareerFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Apply;