import Link from "next/link";
import PricePlanItem from "./plan";

export default function PricingSection() {
  return (
    <div className="pt-5 flex flex-col w-full justify-start" id="pricing">
      <div className="justify-start w-full mx-auto pt-5 flex flex-col gap-12">
        <p className="mt-2 text-3xl md:text-5xl lg:text-5xl font-solanelBold text-left">
          Choose the right plan for you, so we can start creating your next
          masterpiece!
        </p>
        <div className="isolate mx-auto mt-10 grid grid-cols-1 gap-5 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <PricePlanItem
            name="The Home studio"
            price="200"
            description="Ideal for podcasters or musicians with tracked audio"
            features={[
              "Mixing and Mastering",
              "Distribution",
              "Social media presence & promotion",
            ]}
          />
          <PricePlanItem
            name="Standard"
            price="350"
            description="Ideal for producing a single"
            features={[
              "4hr studio time",
              "Instrumentation, vocals and/or backing vocals",
              "Everything from the home studio plan",
            ]}
          />
          <PricePlanItem
            name="Extended"
            price="1225"
            description="Ideal for producing multiple singles or an EP"
            features={[
              "21hr studio time",
              "Instrumentation, vocals and/or backing vocals",
              "Everything from the home studio plan",
            ]}
          />
          <PricePlanItem
            name="Album"
            price="35"
            description="Ideal for musicians producing an entire album"
            features={[
              "Pre-production and organizing sessions",
              "Guidance with collaborations",
              "Everything from the home studio plan",
            ]}
            hourly
          />
        </div>
        <p
          className={`text-center text-2xl md:text-4xl lg:text-4xl font-solanelRegular`}
        >
          Ready?{" "}
          <span className="text-2xl md:text-4xl lg:text-4xl hover:text-pink-500 transition-all ease-in-out duration-300 font-solanelLight">
            <Link
              href={"/contact"}
              className="underline decoration-pink-500 hover:no-underline transition-all ease-in-out duration-300"
            >
              Get in touch
            </Link>
          </span>{" "}
          and we&apos;ll get started.
        </p>
      </div>
    </div>
  );
}
