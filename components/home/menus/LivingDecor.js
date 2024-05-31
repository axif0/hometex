import Link from "next/link";
import { FaCaretDown, FaHome } from "react-icons/fa";

const LivingDecor = () => {
  const sections = [
    {
      id: 1,
      imageUrl: "/images/menuCategories/Rugs Category-100x100.webp",
      title: "Carpet | Rugs",
      listItems: [
        { name: "Carpets", path: "/all-categories/LivingDecor/Carpets" },
        { name: "Handmade Rugs", path: "/all-categories/LivingDecor/Handmade Rugs" },
        { name: "Shataranji", path: "/all-categories/LivingDecor/Shataranji" },
      ],
    },
    {
      id: 2,
      imageUrl: 'https://5.imimg.com/data5/VP/VR/ID/SELLER-2916298/9-1200x1200-1000x1000.jpg',
      title: "Cushion | Cushion Cover",
      listItems: [
        { name: "Cushion Cover", path: "/all-categories/LivingDecor/Cushion Cover" },
        { name: "Cushion", path: "/all-categories/LivingDecor/Cushion" },
      ],
    },
    {
      id: 3,
      imageUrl: 'https://alchemystory.com.au/wp-content/uploads/2022/08/F113AF9E-99B6-40A4-B795-081E6DB78E50-scaled.jpeg',
      title: "Curtain | Blind",
      listItems: [
        { name: "Printed Curtain", path: "/all-categories/LivingDecor/Printed Curtain" },
        { name: "Solid Curtain", path: "/all-categories/LivingDecor/Solid Curtain" },
        { name: "Vertical Blind", path: "/all-categories/LivingDecor/Vertical Blind" },
      ],
    },
    {
      id: 4,
      imageUrl: 'https://5.imimg.com/data5/VP/VR/ID/SELLER-2916298/9-1200x1200-1000x1000.jpg',
      title: "Quilts | Comforters | Covers",
      listItems: [
        { name: "Comfort In a Bag", path: "/all-categories/LivingDecor/Comfort In a Bag" },
        { name: "Comforter Cover", path: "/all-categories/LivingDecor/Comforter Cover" },
        { name: "Quilts|Comforters", path: "/all-categories/LivingDecor/Quilts|Comforters" },
      ],
    },
    {
      id: 5,
      imageUrl: 'https://m.media-amazon.com/images/I/714Wd4f5QbL._AC_UF1000,1000_QL80_.jpg',
      title: "Mosquito Net",
      listItems: [
        { name: "Classic Style", path: "/all-categories/LivingDecor/Classic Style" },
        { name: "Fancy Style", path: "/all-categories/LivingDecor/Fancy Style" },
      ],
    },
  ];

  return (
    <>
      <div className="">
        <div className="inline-flex items-center text-black-300 hover:text-white hover:bg-black px-3 py-2 rounded-md text-sm font-medium group">
          <FaHome className="mr-1 text-xl" />
          Living Decor <FaCaretDown />
          <div className="w-full absolute pb-6 z-50 top-full left-0 transform rounded-md justify-center items-center p-2 group-hover:flex hidden">
            <div className="max-w-screen-2xl mx-auto px-3 mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white">
              {/* Map over sections array */}
              {sections.map((section) => (
                <div
                  key={section.id}
                  className="bg-white p-2 relative overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <div className="flex">
                    <img
                      src={section.imageUrl}
                      alt={`Left Image ${section.id}`}
                      className="w-1/2 h-auto object-cover"
                    />
                    <div className="w-1/2 ml-4 text-black">
                      <h2 className="text-md font-bold mb-2 overflow-ellipsis">
                        {section.title}
                      </h2>
                      <ul>
                        {section.listItems.map((item, index) => (
                          <li
                            key={index}
                            className="overflow-ellipsis hover:scale-105"
                          >
                            {item.path ? (
                              <Link href={item.path}>
                                <span className="hover:underline">{item.name}</span>
                              </Link>
                            ) : (
                              <span>{item.name}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Popup Box */}
                  <div className="hidden absolute top-0 left-0 right-0 bottom-0 bg-white p-4 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h2 className="text-lg font-bold mb-2">{section.title}</h2>
                    <ul>
                      {section.listItems.map((item, index) => (
                        <li key={index}>{item.name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LivingDecor;