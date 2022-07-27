import React from 'react';
import Card from './card'

const data = require("../data/sampleNews.json");
console.log(data);
const NewsPage = () => {
  /*return(
    <div className = "container d-flex">

      {data.map((element, index) =>{
        return <Card
          key = {index}
          title = {element.title}
          description = {element.description}
          newsUrl = {element.url}
          imageUrl= {element.urlToImage}
          date = {element.publishedAt}
          source = {element.source.name}
        />;
      })}
    </div>
  );
};*/
return (
    <div className = "container d-flex">
        

        {data.map((element, index)=> {
            return <Card
            key={index}
            data={element}
            />
        })}
    </div>
  );
};  

export default NewsPage;
