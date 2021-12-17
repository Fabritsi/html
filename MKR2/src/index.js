const express = require("express");
const app = express();

/*
Фото (Id, Автор, Назва, Опис, URL-
файлу, Список гештегів, Дата опублікування, Кількість «лайків»)
*/
let Photos = [{
    id: 1,
    author: "Yana",
    title: "My Dinner",
    description: "Food",
    url: "https://media-cdn.tripadvisor.com/media/photo-s/0b/1a/f4/e2/my-dinner.jpg",
    hashtags: "#food, #dinner",
    published: new Date(2021, 5, 10),
    likes: 5003
},
{
    id: 2,
    author: "Yana",
    title: "My new makeup",
    description: "Makeup",
    url: "https://images.kikocosmetics.com/mediaObject/2019/new-website/category/make-up/ProductCarouselComponent_viso/original/ProductCarouselComponent_viso.jpg",
    hashtags: "#makeup, #bestie",
    published: new Date(2021, 7, 28),
    likes: 7007
}
]
/*які містять в назві вказане слово.*/
app.get("/photo/:title", (req, res) => {
let titlePhoto = Photos.filter(photo => photo.title == req.params.title);
if (titlePhoto.length == 0)
res.status(404).send("Not Found");
else {
titlePhoto.sort(
    (photo1, photo2) = "title"=="My"
)
res.send(authorsPhoto[0]);
}
});

app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get("/about", (req, res) => {
res.render("about");
});

app.get("/", (req, res) => {
res.render("photo");
});

    if (process.env.NODE_ENV == "test") module.exports = app;



    else
app.listen (3000, ()=>{
    console.log("http://localhost:3000")
})