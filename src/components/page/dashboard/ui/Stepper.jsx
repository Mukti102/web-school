export const Stepper = ({ data }) => {
  return (
    <div className="my-10">
      <ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
        {data?.map((item, i) => (
          <li
            key={i}
            class={`flex items-center ${
              item?.status
                ? "text-blue-600 dark:text-blue-500"
                : "text-gray-500 dark:text-gray-500"
            } space-x-2.5 rtl:space-x-reverse`}
          >
            <span
              class={`flex items-center justify-center sm:text-base text-xs sm:w-8 sm:h-8 w-6 h-6 border  rounded-full shrink-0 ${
                item?.status ? "border-blue-500" : "border-gray-400"
              } `}
            >
              {i + 1}
            </span>
            <span>
              <h3 class="font-medium sm:text-base text-sm leading-tight">
                {item?.name}
              </h3>
              <p class="sm:text-sm text-xs">{item?.description}</p>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};
