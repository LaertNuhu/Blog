var Blog = require("./models/Blog")

var data =[
  {
    "title" : "Title",
    "img" : "https://source.unsplash.com/EwRM05V0VSI",
    "body" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "title" : "Elephants",
    "img" : "https://source.unsplash.com/uZqJVqwFxMQ",
    "body" : "<p>Elephants are large mammals of the family Elephantidae and the order Proboscidea. Three species are recognised, the African bush elephant (Loxodonta africana), the African forest elephant (L. cyclotis), and the Asian elephant (Elephas maximus). Elephants are scattered throughout sub-Saharan Africa, South Asia, and Southeast Asia. Elephantidae is the only surviving family of the order Proboscidea; other, now extinct, members of the order include deinotheres, gomphotheres, mammoths, and mastodons.</p>"
  },
  {
    "title" : "Indonesien",
    "img" : "https://source.unsplash.com/lZqmudrfgwY",
    "body" : "People ist eine EP von Animal Collective, welche im Oktober 2006 erschien. Zuerst, 2006, wurde die EP auf Skunk Records, dem australischen Label der Band, als 7\" veröffentlicht. Erst im Januar 2007 erschien die EP auf Vinyl und CD weltweit via FatCat Records."
  },
  {
    "title" : "DJ Kaka",
    "img" : "https://source.unsplash.com/XNb5Jtx2Yl8",
    "body" : "Als DJ [ˈdiːdʒeɪ] (englisch disc jockey) wird eine Person bezeichnet, die auf Tonträgern gespeicherte Musik in einer individuellen Auswahl vor Publikum abspielt, wofür allgemein der Begriff „Auflegen“ (von „Schallplatten auflegen“) verwendet wird. Im deutschen Sprachraum werden weibliche DJs auch DJane oder seltener She-DJ genannt."
  },
  {
    "title" : "Boss Monkey",
    "img" : "https://source.unsplash.com/HkfP5dYcMjw",
    "body" : "Die Affen[1] (Anthropoidea, Simiae[2] oder Simiiformes[3]), auch als „Eigentliche Affen“[4] oder „Höhere Primaten“[5] bezeichnet, sind eine zu den Trockennasenprimaten gehörende Verwandtschaftsgruppe der Primaten. Traditionell wurden sie den „Halbaffen“ gegenübergestellt, jedoch sind sie mit den Koboldmakis näher verwandt als mit den übrigen Vertretern dieser Gruppe. Sie teilen sich in die Neuweltaffen und die Altweltaffen auf, zu denen auch der Mensch gehört."
  },
  {
    "title" : "Elephants 2",
    "img" : "https://source.unsplash.com/JCIUVAihnn0",
    "body" : "Large mammals of the family Elephantidae and the order Proboscidea. Three species are recognised, the African bush elephant (Loxodonta africana), the African forest elephant (L. cyclotis), and the Asian elephant (Elephas maximus). Elephants are scattered throughout sub-Saharan Africa, South Asia, and Southeast Asia. Elephantidae is the only surviving family of the order Proboscidea; other, now extinct, members of the order include deinotheres, gomphotheres, mammoths, and mastodons."
  }
]


function seed(){
  Blog.remove({},function (err) {
    if (err) {
      console.log(err);
  } else {
    console.log("All entries deleted");
    data.forEach(function (d) {
      Blog.create(d,function (err,blog) {
        if (err) {
          console.log(err);
        } else {
          console.log("Blog added");
        }
      })
    })
  }
})
}
module.exports = seed
