import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import {
  FaAngular,
  FaVuejs,
  FaReact,
  FaPhp,
  FaAdversal,
  FaAws,
  FaApple,
  FaBtc,
  FaChromecast,
  FaDev,
} from "react-icons/fa";

const IconList = () => {
  const [deck, setDeck] = useState<any[]>([]);
  const [choosed, setChoosed] = useState(-1);
const [first,setFirst]=useState("")
const [second,setSecond]=useState("")
const [score,setScore]=useState<number>(50)
const [remainCard,setRemainCard]=useState<number>(10)

  const IconArray: any[] = [
    <FaAngular name="Angular" />,
    <FaVuejs name="Vue" />,
    <FaReact name="React" />,
    <FaPhp name="Php" />,
    <FaAdversal name="Adversal" />,
    <FaAws name="Aws" />,
    <FaApple name="Apple" />,
    <FaBtc name="Btc" />,
    <FaChromecast name="Chromecast" />,
    <FaDev name="Dev" />,
  ];

  const deckBuilder = () => {
    let shallowDeck: any[] = [];
    IconArray.map((item) => {
      shallowDeck = [...shallowDeck, item, item];
    });
    shallowDeck.sort(() => 0.5 - Math.random());
    setDeck(shallowDeck);
    document.querySelectorAll<HTMLElement>(".mycard").forEach(item=>item.style.visibility="visible")
    setScore(50)
    setRemainCard(10)
  };

  useEffect(() => {
    deck.length === 0 && deckBuilder();
  }, []);

  useEffect(()=>{
    if (first===second&&first!==""&&second!==""){
        rightThere()
     }else if ( second!==""){
        wrongThere()
     }
  },[second])

  const rightThere = () =>{
document.querySelectorAll<HTMLElement>(`.${first}`).forEach(item=>
    {
    item.style.visibility="hidden"
    item.classList.add("choosed")
    }
    )
    setScore(score+50)
    setRemainCard(remainCard-1)
    console.log(remainCard)
    setFirst("")
    setSecond("")
  }

const wrongThere = () => {
    setScore(score-10)
    setFirst("")
    setSecond("")
}

  const controlled = (item: any, idx: number) => {
    if (choosed===idx)return
    setChoosed(idx);   
   if (first===""){
    setFirst(item.props.name)
   }else if (second===""){
    setSecond(item.props.name)
   }
    }

 

  return (
    <>
      {deck.length > 0 &&
        deck.map((item, idx) => (
          <span
            key={idx}
            style={{ backgroundColor: choosed === idx ? "white" : "black" }}
            onClick={() => controlled(item, idx)}
            className={item.props.name+" mycard"}
          >
            {item}
          </span>
        ))}
Puan : {score}
{remainCard===0&&
<div onClick={()=>deckBuilder()}>Yeniden Oyna</div>
}
    </>
  );
};

export default IconList;
