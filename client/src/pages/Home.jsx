import React, { useEffect, useState } from "react";
import TextToSpeech from "./TextToSpeech";
import "./Syt.css";
import "./app.css";
const Home = () => {
  const [count, setCount] = useState("in");
  
  const [datan, setDetan] = useState([]);
  const getnewsinfo = async () => {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=${count}&apiKey=d3164f2b1e2e4ff2930b0e610a44df19`;
      const res = await fetch(url);
      const data = await res.json();
      
      setDetan(data.articles);
      

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getnewsinfo();
  }, [ ]);


  //translate to speech
  


  return (
    <>
      <div className="">
        <div className="div18">
          <input
            type="search"
            placeholder="search....."
            autoFocus
            id="search"
            className="div14"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />

          <button type="button" className="div15" onClick={getnewsinfo}>
            Search
          </button>
        </div>
      </div>
      <div className="div 19">
        <div className="div2">
          <span className="title">type the code of the country you want to get headlines for.</span>
          <span className="desc">ae,ar,at,au,be,bg,br,ca,ch,cn,co,cu,cz,de,eg,fr,gb,gr,hk,hu,id,ie,il,in,it,jp,kr,lt,lv,
          ma,mx,my,ng,nl,no,nz,ph,pl,pt,ro,rs,ru,sa,se,sg,si,sk,th,tr,tw,ua,us,ve,za.</span>
        </div>
      </div>
      {/* <Newscard { ...newsdata } /> */}

      <div>
        {datan.map((value) => {
          return (
            <>
              <div className="div1">
                
              <span className="title">{value.title}</span>
                <img src={value.urlToImage} className="imge" alt="...." />
                <span className="title">{value.publishedAt}</span>
                <p className="desc">{value.content +value.description}</p>
                
                <span className="title">{value.author}</span>
                
                
                


                <p className="p2">
                
                <TextToSpeech  text={ value.author+value.title+value.content+value.description} />
                  <a href={value.url}>click to know more</a>
                </p>
              </div>
              
            </>
          );
        })}
      </div>
       
      
      
      
      
      
      
      


    </>
  );
};
export default Home ;
