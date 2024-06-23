/* eslint-disable @next/next/no-img-element */
export const BlogCard = ({ data }) => {
  return (
    <section className="my-2 mx-2">
      <div>
        <img className="rounded-[20px] my-2" src={data.img} alt="blog-img" />
      </div>
      <h3 className="font-semibold text-2xl">{data.title}</h3>
      <p className="text-[#595566] mt-2">{data.summary}</p>
      <div className="border-t flex flex-wrap gap-2 items-center justify-between mt-5 border-b py-2 px-1">
        <div className="flex items-center justify-start gap-2">
          <div className="w-8 h-8 text-white rounded-full bg-black overflow-hidden flex items-center justify-center">
            {data.writer.charAt(0)}
          </div>
          <p className="text-[#595566]">{data.writer}</p>
          <p>
            <span className="pr-4 pl-2">|</span>
            {data.createdAt}
          </p>
        </div>

        <button className="h-8 md:h-10 bg-[#000] rounded-full px-3 md:px-7 text-center text-white text-sm md:text-lg font-semibold">
          Read More
        </button>
      </div>
    </section>
  );
};
