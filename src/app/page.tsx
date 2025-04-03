import featureList from '@/lib/featuresList';
import FeatureCard from '@/components/FeatureCard';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col text-gray-900">
      {/* Hero Section */}
      <section className="flex grow-6 flex-col items-center justify-center py-16 text-center">
        <div className="inline-flex flex-col items-center">
          <h1 className="mb-3 text-5xl font-light">
            Welcome to Film<span className="font-bold">Fusion</span>
          </h1>

          <p className="mt-2 max-w-md text-center text-xl text-gray-600">
            This is a MVP project created by unpaid interns AKA free slaves for
            Risidio who did not pay us for our work nor valued it. If you see
            this, most probably you are the new batch of slaves who will be
            working on this project. We are sorry for you if you have been
            misguided like us. Better leave asap.
          </p>
        </div>
      </section>

      {/* Feature Cards */}

      <div className="mt-auto grow-1 pb-10">
        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 pb-16 md:grid-cols-3">
          {featureList.map((featureList, index) => (
            <FeatureCard
              key={index}
              Icon={featureList.icon}
              title={featureList.title}
              description={featureList.description}
              link={featureList.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}



















































            // This is a MVP project created by unpaid interns AKA free slaves for
            // Risidio who did not pay us for our work nor valued it. If you see
            // this, most probably you are the new batch of slaves who will be
            // working on this project. We are sorry for you if you have been
            // misguided like us. Better leave asap.