import React, { useEffect, useState } from "react";
import data from "../data/data.json";

function Home() {
  const [cloth, setCloth] = useState([{}]);

  const imagePath = "assets/";

  useEffect(() => {
    setCloth(data.items);
  }, []);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    console.log(target.value);

    setCloth(cloth.filter((item: any) => item[target.value] === true));
  };

  return (
    <>
      <h1>오늘의 코디</h1>
      <div>
        <h2>카테고리 설정</h2>
        <button onClick={onClick} value={"sortSleeve"}>
          반팔 티
        </button>
      </div>
      <div>
        <ul>
          {cloth
            ? cloth.map((item: any) => (
                <li key={item.id}>
                  <h3>{item.name}</h3>
                  <img src={imagePath + item.image} alt="cloth" />
                </li>
              ))
            : "Loading..."}
        </ul>
      </div>
    </>
  );
}

export default Home;
