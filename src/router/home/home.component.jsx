import Directory from "../../Component/directory/directory.component";

const Home = ()=>{
    const categories = [
        {
          "id": 1,
          "title": "hats",
          "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
          "id": 2,
          "title": "jackets",
          "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
          "id": 3,
          "title": "sneakers",
          "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
          "id": 4,
          "title": "womens",
          "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
        },
        {
          "id": 5,
          "title": "mens",
          "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
        }
      ]
    return (
        <div>
          <Directory categories = {categories}/>
          <div id="fb-root"></div>
          <script async defer crossorigin="anonymous" src="https://connect.facebook.net/zh_CN/sdk.js#xfbml=1&version=v15.0" nonce="ZNKKsDAR"></script>
          <div class="fb-comments" data-href="https://main.d2ny2sji7g0dj3.amplifyapp.com/" data-width="" data-numposts="5"></div>
        </div>
        
    );
}

export default Home;