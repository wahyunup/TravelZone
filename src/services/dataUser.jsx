import { useEffect } from "react";

const data = () => {
  const DataTravel = [
    {
      id: 1,
      price: 100000,
      tittle: "Banda neira",
      desc: "Deskription [Banda Neira] Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi quos quo velit provident nemo ea esse ipsam quibusdam quae ex, delectus iure, iusto dignissimos adipisci? Velit placeat in laboriosam? Fuga in alias voluptatum non iusto maxime ullam harum, eveniet officiis exercitationem error numquam deserunt enim pariatur sapiente autem optio facilis molestiae, repellat earum assumenda culpa perferendis neque nam. Nesciunt, sapiente. Hic fugit ut qui dolorem quasi deserunt atque laborum porro accusantium! Molestias praesentium itaque iste iure, eum tempora voluptatum voluptas maiores vel",
      image:
        "https://images.unsplash.com/photo-1715394898879-4bc0610a14bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatar:
        "https://plus.unsplash.com/premium_photo-1664368832311-7fe635e32c7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      price: 200000,
      tittle: "Raja Ampat",
      desc: "Deskription [Raja Ampat] Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi quos quo velit provident nemo ea esse ipsam quibusdam quae ex, delectus iure, iusto dignissimos adipisci? Velit placeat in laboriosam? Fuga in alias voluptatum non iusto maxime ullam harum, eveniet officiis exercitationem error numquam deserunt enim pariatur sapiente autem optio facilis molestiae, repellat earum assumenda culpa perferendis neque nam. Nesciunt, sapiente. Hic fugit ut qui dolorem quasi deserunt atque laborum porro accusantium! Molestias praesentium itaque iste iure, eum tempora voluptatum voluptas maiores vel",
      image:
        "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatar:
        "https://plus.unsplash.com/premium_photo-1664368832311-7fe635e32c7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      price: 150000,
      tittle: "Labuan Bajo",
      desc: "Deskription [Labuan Bajo] Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi quos quo velit provident nemo ea esse ipsam quibusdam quae ex, delectus iure, iusto dignissimos adipisci? Velit placeat in laboriosam? Fuga in alias voluptatum non iusto maxime ullam harum, eveniet officiis exercitationem error numquam deserunt enim pariatur sapiente autem optio facilis molestiae, repellat earum assumenda culpa perferendis neque nam. Nesciunt, sapiente. Hic fugit ut qui dolorem quasi deserunt atque laborum porro accusantium! Molestias praesentium itaque iste iure, eum tempora voluptatum voluptas maiores vel",
      image:
        "https://images.unsplash.com/photo-1589309736404-2e142a2acdf0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatar:
        "https://plus.unsplash.com/premium_photo-1664368832311-7fe635e32c7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      price: 150000,
      tittle: "Danau Toba",
      desc: "Deskription [Danau Toba] Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi quos quo velit provident nemo ea esse ipsam quibusdam quae ex, delectus iure, iusto dignissimos adipisci? Velit placeat in laboriosam? Fuga in alias voluptatum non iusto maxime ullam harum, eveniet officiis exercitationem error numquam deserunt enim pariatur sapiente autem optio facilis molestiae, repellat earum assumenda culpa perferendis neque nam. Nesciunt, sapiente. Hic fugit ut qui dolorem quasi deserunt atque laborum porro accusantium! Molestias praesentium itaque iste iure, eum tempora voluptatum voluptas maiores vel",
      image:
        "https://images.unsplash.com/photo-1601058497548-f247dfe349d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatar:
        "https://plus.unsplash.com/premium_photo-1664368832311-7fe635e32c7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      price: 150000,
      tittle: "Lombok",
      desc: "Deskription [Lombok] Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi quos quo velit provident nemo ea esse ipsam quibusdam quae ex, delectus iure, iusto dignissimos adipisci? Velit placeat in laboriosam? Fuga in alias voluptatum non iusto maxime ullam harum, eveniet officiis exercitationem error numquam deserunt enim pariatur sapiente autem optio facilis molestiae, repellat earum assumenda culpa perferendis neque nam. Nesciunt, sapiente. Hic fugit ut qui dolorem quasi deserunt atque laborum porro accusantium! Molestias praesentium itaque iste iure, eum tempora voluptatum voluptas maiores vel",
      image:
        "https://images.unsplash.com/photo-1605752660759-2db7b7de8fa9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatar:
        "https://plus.unsplash.com/premium_photo-1664368832311-7fe635e32c7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      price: 150000,
      tittle: "Gunung Bromo",
      desc: "Deskription [Gunung Bromo] Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi quos quo velit provident nemo ea esse ipsam quibusdam quae ex, delectus iure, iusto dignissimos adipisci? Velit placeat in laboriosam? Fuga in alias voluptatum non iusto maxime ullam harum, eveniet officiis exercitationem error numquam deserunt enim pariatur sapiente autem optio facilis molestiae, repellat earum assumenda culpa perferendis neque nam. Nesciunt, sapiente. Hic fugit ut qui dolorem quasi deserunt atque laborum porro accusantium! Molestias praesentium itaque iste iure, eum tempora voluptatum voluptas maiores vel",
      image:
        "https://images.unsplash.com/photo-1589032916442-f8db7c7b04c6?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatar:
        "https://plus.unsplash.com/premium_photo-1664368832311-7fe635e32c7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      price: 150000,
      tittle: "Pulau Komodo",
      desc: "Deskription [Pulau Komodo] Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi quos quo velit provident nemo ea esse ipsam quibusdam quae ex, delectus iure, iusto dignissimos adipisci? Velit placeat in laboriosam? Fuga in alias voluptatum non iusto maxime ullam harum, eveniet officiis exercitationem error numquam deserunt enim pariatur sapiente autem optio facilis molestiae, repellat earum assumenda culpa perferendis neque nam. Nesciunt, sapiente. Hic fugit ut qui dolorem quasi deserunt atque laborum porro accusantium! Molestias praesentium itaque iste iure, eum tempora voluptatum voluptas maiores vel",
      image:
        "https://images.unsplash.com/photo-1604560929658-bbc3c2ba6a36?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatar:
        "https://plus.unsplash.com/premium_photo-1664368832311-7fe635e32c7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      price: 150000,
      tittle: "Wakatobi",
      desc: "Deskription [Wakatobi] Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi quos quo velit provident nemo ea esse ipsam quibusdam quae ex, delectus iure, iusto dignissimos adipisci? Velit placeat in laboriosam? Fuga in alias voluptatum non iusto maxime ullam harum, eveniet officiis exercitationem error numquam deserunt enim pariatur sapiente autem optio facilis molestiae, repellat earum assumenda culpa perferendis neque nam. Nesciunt, sapiente. Hic fugit ut qui dolorem quasi deserunt atque laborum porro accusantium! Molestias praesentium itaque iste iure, eum tempora voluptatum voluptas maiores vel",
      image:
        "https://img.okezone.com/content/2021/09/16/25/2472201/4-daya-tarik-wakatobi-surga-wisata-di-timur-indonesia-j3JLuQsHI2.jpg",
      avatar:
        "https://plus.unsplash.com/premium_photo-1664368832311-7fe635e32c7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  

  return { DataTravel};
};

export default data;
