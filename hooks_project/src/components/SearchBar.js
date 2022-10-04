import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);
  
  

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

   if(term && !results.length)  // Initial term upload at starting point
   {  search();  
    }
    else{
        const timeoutId = setTimeout(() => {  //Delayed when users start typing
           if (term) {
            search();
           }
        }, 1000);

        return () => {
            clearTimeout(timeoutId)  
        }
    }
  
  }, [term]);

  const renderedResults = results.map((result) => {
    
    return (
      <section key={result.pageid}>
        <article className="story">
          <h4 className="title">{result.title}</h4>
         <p className='info'>
         <span dangerouslySetInnerHTML={{__html : result.snippet}}></span>
         </p>
         <span><a className='button' href= {`https://en.wikipedia.org?curid=${result.pageid}`}>Read More</a></span>
        </article>
      </section>
    );
  });

  return (
    <div>
     
        <section className="search-form">
          <h2>Enter Search Term</h2>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="form-input"
          />
        </section>
      
      <div className='stories'>{renderedResults}</div>
    </div>
  );
};

export default SearchBar;
