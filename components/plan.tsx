export interface PricePlanItemProps {
  name: string;
  description: string;
  price: string;
  features: string[];
  hourly?: boolean;
}

export default function PricePlanItem({
  name,
  description,
  price,
  features,
  hourly,
}: PricePlanItemProps) {
  return (
    <div className="ring-2 ring-black/10 rounded-3xl p-8 xl:p-10 dark:ring-white/10">
      <div className="flex items-center justify-between gap-x-4">
        <h2 id="product1" className="text-lg font-solanelBold leading-8 ">
          {name}
        </h2>
      </div>
      <p className="mt-4 text-sm leading-6 text-gray-500 font-solanelLight dark:text-gray-300">
        {description}
      </p>
      <p className="mt-6 flex items-baseline gap-x-1">
        <span className="text-4xl font-solanelBold tracking-tight ">
          {price + "€ "}
        </span>
        {hourly ? (
          <span className=" text-4xl font-solanelBold tracking-tight ">
            /hr
          </span>
        ) : (
          ""
        )}
        <span className="text-sm font-semibold leading-6 text-gray-300"></span>
      </p>
      <ul
        role="list"
        className="mt-8 space-y-3 text-sm leading-6 text-gray-500 dark:text-gray-300 xl:mt-10"
      >
        {features.map((item, key) => {
          return (
            <li key={key} className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-6 w-5 flex-none "
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
