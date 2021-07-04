import React, {useEffect, useState} from "react";
import './News.css';
import NewsItem from "./NewsItem";
import axios from "axios";

function News({category, query}) {
    const [news, setNews] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const API_KEY = 'a278afb2745d48a49ba9fb6fd4ae34c9';
    const keyword = category.toLowerCase();
    const value = query.toLowerCase();
    const url = category === 'COUNTRY' ?
        `https://newsapi.org/v2/top-headlines?${keyword}=${value}&apiKey=${API_KEY}`
        :`https://newsapi.org/v2/top-headlines?country=kr&${keyword}=${value}&apiKey=${API_KEY}`;
    console.log(url);


    const fetchNews = async ()=> {
        setLoading(true);
        try{
            axios.get(url)
                .then((response)=>{
                    setNews(response.data);
                    console.log("news--"+query,response.data);
                    setLoading(false);
                })
        }catch (e){
            console.log("rest Error", e);
        }
    }

    useEffect( () =>{
        fetchNews();
    },[query])
    if (isLoading){
        return <div>뉴스 로딩중....</div>
    }
    if (!news) {
        return <div>찾으시는 뉴스 없습니다.</div>
    }

    return(
        <div className="newsListBlock">
            {news.articles.map(
                (n, index) => <NewsItem article={n} key={index}/>
            )}
        </div>
    )
}

export default News;