/* eslint-disable @next/next/no-img-element */
export const BlogCard = () => {
  return (
    <section className="my-2 mx-2">
      <div>
        <img className="rounded-[20px] my-2" src="/asset/blog-img.png" alt="blog-img" />
      </div>
      <h3 className="font-semibold text-2xl">
        Consulting Fees Study 2019 (And How To Raise Your Rates)
      </h3>
      <p className="text-[#595566] mt-2">
        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative
        approaches to corporate strategy foster collaborative thinking to further the overall value
        proposition.
      </p>
      <div className="border-t flex flex-wrap gap-2 items-center justify-between mt-5 border-b py-2 px-1">
        <div className="flex items-center justify-start gap-2">
          <div className="w-8 h-8 rounded-full bg-black overflow-hidden flex items-center justify-center">
            <img src="/asset/blog-writer-img.png" className="object-cover" alt="" />
          </div>
          <p className="text-[#595566]">John Carter</p>
          <p>
            <span className="pr-4 pl-2">|</span>June 1, 2023
          </p>
        </div>

        <button className="h-8 md:h-10 bg-[#000] rounded-full px-3 md:px-7 text-center text-white text-sm md:text-lg font-semibold">
          Read More
        </button>
      </div>
    </section>
  );
};
