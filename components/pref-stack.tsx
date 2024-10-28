import Image from "next/image";

export default function PreferredTechStack() {
  return (
    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 font-solanelLight">
      <li className="pb-3 sm:pb-4 pt-3">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="flex-shrink-0">
            <Image
              className="w-50 h-50  rounded-full"
              src="/python.png"
              alt="Python"
              height={50}
              width={50}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900  dark:text-white">
              Python
            </p>
            <p className="text-sm text-gray-500  dark:text-gray-400">
              For training and fine-tuning models
            </p>
          </div>
        </div>
      </li>

      <li className="pb-3 sm:pb-4 pt-3">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="flex-shrink-0">
            <Image
              className="w-50 h-50  rounded-full"
              src="/go.png"
              alt="Go"
              height={50}
              width={50}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900  dark:text-white">
              Go
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              For building infrastructure around the models (Like user
              authentication, middlewares, etc.)
            </p>
          </div>
        </div>
      </li>

      <li className="pb-3 sm:pb-4 pt-3">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="flex-shrink-0">
            <Image
              className="w-50 h-50  rounded-full"
              src="/react.png"
              alt="React"
              height={50}
              width={50}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900  dark:text-white">
              React
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              For building the user interface. (fun fact, this website was made
              using a React based framework called NextJS)
            </p>
          </div>
        </div>
      </li>

      <li className="pb-3 sm:pb-4 pt-3">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="flex-shrink-0">
            <Image
              className="w-50 h-50  rounded-full"
              src="/azure.png"
              alt="Azure"
              height={50}
              width={50}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900  dark:text-white">
              Azure
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              For scaling an app on the cloud
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
}
