import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setloadig] = useState(true);
  console.log(menu);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setloadig(false);
      });
  }, []);
  return [menu, loading];
};

export default useMenu;
