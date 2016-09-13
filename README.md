# Open-Source-Search-Engine-of-Twitter
We used an open source search Engine(ElasticSearch) to search Twitter. And created a web server by node.js.  
## Description
In this project, we used the Twitter API, logstash and ElasticSearch to create a Twitter search feature based on geolocation. Our implementation was able to stream Tweets real-time from Twitter and index/store those tweets into ElasticSearch. The web application has a good interface for users to enter search information. Finally, this app was deployed on a cloud-platform.

### Time
We started this project on 07/14/2016 and have done on 08/26/2016.

### [WebSite](http://104.156.226.134:8888)

### Usage
1. Install Logstash, ElasticSearch, node.js on Linux.(If you already have, skil this step. ）
  - [Logstash](https://www.elastic.co/products/logstash)
  - [ElasticSearch](https://www.elastic.co/downloads/elasticsearch/)
  - [node.js](https://nodejs.org/en/)
2. Clone a copy of the repo by running:

    ```bash
    git clone https://github.com/AnkaiLiang/Open-Source-Search-Engine-of-Twitter.git
    ```
3. Start your Logstash and ElasticSearch server.
    + under catalog /ElasticSearch/bin
    
        ```bash
        ./elasticsearch -d
        ```
    + Copy the file input.conf to /logstash/bin, then under catalog /logstash/bin:
    
        ```bash
        ./logstash agent -f logstash.conf
        ```
4. Running your web application.
    + under catalog of this repo
    
        ```bash
        ./node app.js
        ```

### Team
We had 3 people in our team. And we independently completed the entire project coding.
  - [Xiaoyang Mu](https://github.com/ggmol)
  - [AnkaiLiang](https://github.com/AnkaiLiang)

### Acknowledgement
  - BitTiger

## Resource
  - [BitTiger Project: Open Source Search Engine](https://www.bittiger.io/microproject/PfjuwSHuGjQJpsF6h)
  - [Logstash](https://www.elastic.co/products/logstash)
  - [ElasticSearch](https://www.elastic.co/downloads/elasticsearch/)
  - [node.js](https://nodejs.org/en/)

## License
See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).

## Project Information
- category: full stack
- team: 0516 Search Engine
- description: a open source search engine of twitter
- stack: javascript, python
