import { Layout } from "@/components/layout/Layout";
import CareerFormSection from "@/components/careers/CareerFormSection";

const Apply = () => {
  return (
    <Layout>
      <main id="main-content" role="main" style={{ paddingTop: 'var(--header-offset)' }}>
        <CareerFormSection />
      </main>
    </Layout>
  );
};

export default Apply;