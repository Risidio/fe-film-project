import featureList from "@/lib/featuresList";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-16 flex flex-col items-center justify-center grow-6">
        <div className="inline-flex flex-col items-center">
          <h1 className="text-5xl font-light mb-3">
            Welcome to Film<span className="font-bold">Fusion</span>
          </h1>
          <p className="mt-2 text-gray-600 text-xl max-w-md text-center ">
            Manage assets, organise contracts, and unlock insights with
            AI-powered analysis.
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <div className="mt-auto pb-10 grow-1">
        <div className="container mx-auto px-4 pb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
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
