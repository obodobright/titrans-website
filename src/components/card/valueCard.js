import Link from "next/link";

export const ValueCard = ({ value }) => {
  return (
    <div className="m-2 h-fit rounded-md bg-white hover:bg-black hover:shadow scale-100 hover:scale-[1.03] transition-all group py-6 px-4 ">
      <div className="scale-100 group-hover:scale-110 transition-all">{value.icon}</div>
      <div>
        <h3 className="font-semibold group-hover:text-white mt-2 transition-all text-lg text-[#181818]">
          {value.name}
        </h3>
        <p className="text-base font-normal group-hover:text-white transition-all  my-2 text-[#595566]">
          {value.description}
        </p>
        {/* <Link href="/">
          <button className="flex gap-2 mt-2 items-center">
            <span className="text-lg font-semibold">Read More</span>
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 6.01025C0.947715 6.01025 0.5 6.45797 0.5 7.01025C0.5 7.56254 0.947715 8.01025 1.5 8.01025V6.01025ZM14.568 7.01025L15.2751 7.71736C15.4626 7.52982 15.568 7.27547 15.568 7.01025C15.568 6.74503 15.4626 6.49068 15.2751 6.30314L14.568 7.01025ZM9.92909 0.957196C9.53856 0.566674 8.9054 0.566677 8.51487 0.957203C8.12435 1.34773 8.12436 1.98089 8.51488 2.37142L9.92909 0.957196ZM8.51488 11.6492C8.12435 12.0397 8.12435 12.6729 8.51488 13.0634C8.90541 13.4539 9.53857 13.4539 9.92909 13.0634L8.51488 11.6492ZM1.5 8.01025H14.568V6.01025H1.5V8.01025ZM8.51488 2.37142L13.8609 7.71736L15.2751 6.30314L9.92909 0.957196L8.51488 2.37142ZM13.8609 6.30315L8.51488 11.6492L9.92909 13.0634L15.2751 7.71736L13.8609 6.30315Z"
                fill="#141414"
              />
            </svg>
          </button>
        </Link> */}
      </div>
    </div>
  );
};
