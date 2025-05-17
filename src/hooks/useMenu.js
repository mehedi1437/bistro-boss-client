import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setloadig] = useState(true);
  console.log(menu);
  useEffect(() => {
    fetch("https://bistro-boss-server-sooty-psi.vercel.app/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setloadig(false);
      });
  }, []);
  return [menu, loading];
};

export default useMenu;
