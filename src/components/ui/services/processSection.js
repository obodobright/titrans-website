/* eslint-disable @next/next/no-img-element */
import { TagBadge } from "@/components/Tag";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { TextH3 } from "../landing/component/TextH2";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <CustomSectiomWrapper>
      <section className="mt-12">
        <main className=" gap-10 py-12 md:px-1 flex flex-wrap md:flex-nowrap flex-col  md:flex-row">
          <div>
            <img src="/asset/process-img.png" alt="learning-img" className="w-[700px]" />
          </div>
          <div className="lg:max-w-[420px] px-3">
            <TagBadge cls="bg-[#E58F24] text-black">Process</TagBadge>
            <motion.div
              ref={ref}
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              initial="hidden"
            >
              <TextH3>Comprehensive Services Tailored to Your Needs</TextH3>
            </motion.div>
            <div className="mt-4">
              <motion.div
                ref={ref}
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: 0.5 }}
                initial="hidden"
                className="flex items-start gap-3 my-2"
              >
                <FileIcon />
                <motion.div>
                  <h3 className="font-semibold text-base text-[#181818]">Training & Mentorship</h3>
                  <p className="text-sm font-normal text-[#595566]">
                    Professionally fashion wireless leadership rather than prospective experiences
                    my cardinate clicks-and-mortar testing whereas.
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                ref={ref}
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: 0.8 }}
                initial="hidden"
                className="flex items-start gap-3 my-2"
              >
                <SettingsIcon />
                <div>
                  <h3 className="font-semibold text-base text-[#181818]">IT consultancy</h3>
                  <p className="text-sm font-normal text-[#595566]">
                    Compellingly embrace empowered e-business after user friendly intellectual
                    capital. Interactively actualize front-end processes.
                  </p>
                </div>
              </motion.div>
              <motion.div
                ref={ref}
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: 0.9 }}
                initial="hidden"
                className="flex items-start gap-3 my-2"
              >
                <LineIcon />
                <div>
                  <h3 className="font-medium text-base text-[#181818]">
                    Recruitment & Outsourcing
                  </h3>
                  <p className="text-sm font-normal text-[#595566]">
                    Uniquely matrix economically sound value through cooperative technology parallel
                    task fully researched data and enterprise.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </section>
    </CustomSectiomWrapper>
  );
};

export const FileIcon = () => {
  return (
    <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M27.6 5.26243H3.6C3.28174 5.26243 2.97652 5.13792 2.75147 4.91628C2.52643 4.69465 2.4 4.39405 2.4 4.08061C2.4 3.76717 2.52643 3.46657 2.75147 3.24494C2.97652 3.02331 3.28174 2.89879 3.6 2.89879H24C24.3183 2.89879 24.6235 2.77428 24.8485 2.55265C25.0736 2.33101 25.2 2.03041 25.2 1.71697C25.2 1.40354 25.0736 1.10294 24.8485 0.881303C24.6235 0.659669 24.3183 0.535156 24 0.535156H3.6C2.64644 0.539045 1.73306 0.913832 1.05878 1.57789C0.384501 2.24195 0.00394855 3.1415 0 4.08061V22.9897C0.00394855 23.9288 0.384501 24.8284 1.05878 25.4924C1.73306 26.1565 2.64644 26.5313 3.6 26.5352H27.6C28.2365 26.5352 28.847 26.2861 29.2971 25.8429C29.7471 25.3996 30 24.7984 30 24.1715V7.62607C30 6.99919 29.7471 6.39799 29.2971 5.95472C28.847 5.51145 28.2365 5.26243 27.6 5.26243ZM22.2 17.6715C21.844 17.6715 21.496 17.5676 21.2 17.3728C20.904 17.178 20.6733 16.9011 20.537 16.5772C20.4008 16.2533 20.3651 15.8968 20.4346 15.553C20.504 15.2091 20.6755 14.8932 20.9272 14.6453C21.1789 14.3974 21.4997 14.2285 21.8488 14.1601C22.198 14.0917 22.5599 14.1268 22.8888 14.261C23.2177 14.3952 23.4989 14.6224 23.6966 14.9139C23.8944 15.2054 24 15.5482 24 15.8988C24 16.3689 23.8104 16.8198 23.4728 17.1523C23.1352 17.4847 22.6774 17.6715 22.2 17.6715Z"
        fill="#181818"
      />
    </svg>
  );
};

export const SettingsIcon = () => {
  return (
    <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M31.6358 12.213C31.6004 12.0563 31.531 11.909 31.4325 11.7809C31.3339 11.6528 31.2085 11.547 31.0647 11.4706L27.6662 9.62157C27.4853 9.25737 27.2854 8.90717 27.0665 8.57099L27.1236 4.76089C27.1249 4.60108 27.0926 4.44272 27.0287 4.2957C26.9648 4.14869 26.8707 4.01617 26.7523 3.90642C25.0602 2.40138 23.059 1.26938 20.8835 0.586592C20.7273 0.538805 20.5625 0.524083 20.4 0.543401C20.2376 0.562718 20.0812 0.615635 19.9411 0.698654L16.614 2.65973C16.1999 2.64573 15.8001 2.64573 15.386 2.65973L12.0589 0.698654C11.9188 0.615635 11.7624 0.562718 11.6 0.543401C11.4375 0.524083 11.2727 0.538805 11.1165 0.586592C8.93812 1.2699 6.93611 2.40716 5.24768 3.92043C5.12822 4.0264 5.03328 4.15624 4.96924 4.30121C4.9052 4.44618 4.87355 4.60292 4.87642 4.76089L4.94781 8.57099C4.71935 8.90717 4.51944 9.25737 4.31953 9.62157L0.935329 11.4706C0.789692 11.5447 0.662807 11.6498 0.563974 11.7783C0.465141 11.9068 0.396867 12.0553 0.364157 12.213C-0.121386 14.4006 -0.121386 16.6651 0.364157 18.8526C0.399626 19.0093 0.468976 19.1566 0.567517 19.2847C0.666057 19.4128 0.79149 19.5186 0.935329 19.5951L4.3338 21.4441C4.51599 21.8065 4.72106 22.1573 4.94781 22.4947L4.87642 26.3048C4.87511 26.4646 4.90741 26.6229 4.97129 26.7699C5.03516 26.917 5.12925 27.0495 5.24768 27.1592C6.94217 28.6611 8.9426 29.7927 11.1165 30.479C11.2727 30.5268 11.4375 30.5416 11.6 30.5222C11.7624 30.5029 11.9188 30.45 12.0589 30.367L15.386 28.4059H16.614L19.9554 30.367C20.1291 30.479 20.333 30.5376 20.5408 30.5351C20.657 30.5302 20.772 30.5113 20.8835 30.479C23.0619 29.7957 25.0639 28.6585 26.7523 27.1452C26.8718 27.0392 26.9667 26.9094 27.0308 26.7644C27.0948 26.6195 27.1264 26.4627 27.1236 26.3048L27.0665 22.4947C27.2807 22.1585 27.4806 21.8083 27.6805 21.4441L31.079 19.5951C31.2207 19.5178 31.3438 19.4116 31.4399 19.2834C31.536 19.1553 31.6029 19.0084 31.6358 18.8526C32.1214 16.6651 32.1214 14.4006 31.6358 12.213ZM22.2829 15.5328C22.2829 16.7518 21.9144 17.9435 21.224 18.957C20.5337 19.9706 19.5524 20.7606 18.4044 21.2271C17.2563 21.6935 15.993 21.8156 14.7743 21.5778C13.5555 21.34 12.436 20.753 11.5573 19.891C10.6786 19.029 10.0803 17.9308 9.83783 16.7352C9.5954 15.5397 9.71982 14.3004 10.1954 13.1742C10.6709 12.048 11.4762 11.0854 12.5094 10.4081C13.5426 9.7309 14.7574 9.36943 16 9.36943C17.6663 9.36943 19.2644 10.0188 20.4427 11.1746C21.621 12.3305 22.2829 13.8982 22.2829 15.5328Z"
        fill="#181818"
      />
    </svg>
  );
};

export const LineIcon = () => {
  return (
    <svg width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30 1.64627V10.5352C30.0007 10.7545 29.9387 10.9692 29.8219 11.1521C29.7052 11.335 29.5388 11.4779 29.3439 11.5629C29.2117 11.6174 29.0709 11.6456 28.9288 11.6463C28.6443 11.645 28.3712 11.5307 28.1655 11.3268L24.6439 7.66016L16.8375 15.7713C16.6344 15.9799 16.3601 16.097 16.0742 16.097C15.7884 16.097 15.5141 15.9799 15.311 15.7713L10.7182 10.9935L1.84048 20.2157C1.63485 20.4196 1.36169 20.5339 1.07724 20.5352C0.793316 20.5312 0.521089 20.4172 0.314 20.2157C0.112845 20.0051 0 19.7205 0 19.424C0 19.1275 0.112845 18.843 0.314 18.6324L9.95492 8.63238C10.158 8.42373 10.4323 8.30668 10.7182 8.30668C11.004 8.30668 11.2783 8.42373 11.4814 8.63238L16.0742 13.4102L23.1308 6.09071L19.5958 2.43793C19.4505 2.27728 19.352 2.07724 19.3117 1.86094C19.2714 1.64465 19.291 1.42095 19.3682 1.21571C19.4516 1.01456 19.5898 0.843027 19.7658 0.722139C19.9418 0.601252 20.148 0.536269 20.3591 0.535156H28.9288C29.2129 0.535156 29.4854 0.65222 29.6862 0.860593C29.8871 1.06897 30 1.35158 30 1.64627Z"
        fill="#181818"
      />
    </svg>
  );
};
