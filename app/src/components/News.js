import React from 'react';
import NewsItem from './NewsItem';

class News extends React.Component {
    render() {

        const array = [{
            title: "Resobit",
            description: "Resobyte"
        },
        {
            title: "Resobit",
            description: "Resobyte"
        },
        {
            title: "Resobit",
            description: "Resobyte"
        }];

        return (

            <div>
                <NewsItem title={array[0].title} description={array[0].description}/>
                <NewsItem title={array[1].title} description={array[1].description}/>
                <NewsItem title={array[2].title} description={array[2].description}/>
            </div>
        )
    }
}

export default News;