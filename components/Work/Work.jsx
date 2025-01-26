import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedText from "../AnimatedText";
import WorkItem from "./WorkItem";

// Sample data for projects for various categories
const data = [
  {
    href: "",
    category: "design",
    img: "/assets/work/p1.png",
    title: "ACCOUNTS",
  },
  {
    href: "",
    category: "design",
    img: "/assets/work/p2.webp",
    title: "ACCOUNTS",
  },
  {
    href: "",
    category: "design",
    img: "/assets/work/p3.jpeg",
    title: "ACCOUNTS",
  },
  {
    href: "",
    category: "design",
    img: "/assets/work/p4.png",
    title: "ACCOUNTS",
  },
  {
    href: "",
    category: "Software",
    img: "/assets/work/p8.png",
    title: "ACCOUNTS",
  },
  {
    href: "",
    category: "design",
    img: "/assets/work/p6.webp",
    title: "ACCOUNTS",
  },
  {
    href: "",
    category: "Software",
    img: "/assets/work/p7.avif",
    title: "ACCOUNTS",
  },
  {
    href: "",
    category: "Certificates",
    img: "/assets/work/saad_cert.png",
    title: "Cetificate",
  },
];

const Work = () => {
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );

  const tabData = [
    { category: "all" },
    ...uniqueCategories.map((category) => ({ category })),
  ];

  const [tabValue, setTabValue] = useState("all");
  const [visibleItems, setVisibleItems] = useState(6);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const filterWork =
    tabValue === "all"
      ? data.filter((item) => item.category !== "all")
      : data.filter((item) => item.category === tabValue);

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 2);
  };

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="pt-24 min-h-[1000px]" id="work">
      <div className="container mx-auto">
        <Tabs defaultValue="all" className="w-full flex flex-col">
          <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-[30px]">
            <AnimatedText text="Our Latest Works" textStyles="h2 mb-[30px] xl:mb-0" />
            <TabsList className="max-w-max h-full mb-[30px] flex flex-col md:flex-row gap-4 md:gap-0">
              {tabData.map((item, index) => {
                return (
                  <TabsTrigger
                    value={item.category}
                    key={index}
                    className="capitalize w-[120px]"
                    onClick={() => setTabValue(item.category)}
                  >
                    {item.category}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          <TabsContent value={tabValue} className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
              <AnimatePresence>
                {filterWork.slice(0, visibleItems).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <WorkItem {...item} onImageClick={handleImageClick} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {visibleItems < filterWork.length && (
              <div className="flex justify-center mt-12">
                <button onClick={loadMoreItems} className="btn btn-accent">
                  Load more
                </button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-center items-center"
          onClick={closeModal}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-screen"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
