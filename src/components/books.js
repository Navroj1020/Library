const books=[
  {
    id: "1",
    title: "Gilead",
    author: "Yves Bigerel",
    subject: "Fiction",
    thumbnail: "http://books.google.com/books/content?id=KQZCPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "14-07-1995"
  },
  {
    id: "2",
    title: "The One Tree",
    author: "Donny Cates",
    subject: "Comics",
    thumbnail: "http://books.google.com/books/content?id=OmQawwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "27-01-2021"
  },
  {
    id: "3",
    title: "Rage of angels",
    author: "Bill Mantlo",
    subject: "Thriller",
    thumbnail: "http://books.google.com/books/content?id=FKo2TgANz74C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "31-12-1990"
  },
  {
    id: "4",
    title: "The Four Loves",
    author: "Scott Lobdell",
    subject: "Action",
    thumbnail: "http://books.google.com/books/content?id=XhQ5XsFcpGIC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "23-03-2009"
  },
  {
    id: "5",
    title: "The Problem of Pain",
    author: "Nel Yomtov",
    subject: "AutoBiography",
    thumbnail: "http://books.google.com/books/content?id=Kk-uVe5QK-gC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "13-04-2010"
  },
  {
    id: "6",
    title: "An Autobiography",
    author: "Tini Howard",
    subject: "Biography",
    thumbnail: "http://books.google.com/books/content?id=c49GQwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "08-05-2009"
  },
  {
    id: "7",
    title: "Empires of the Monsoon",
    author: "Yves Bigerel",
    subject: "Social-Science",
    thumbnail: "http://books.google.com/books/content?id=MuPEQgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "20-11-2002"
  },
  {
    id: "8",
    title: "The Gap Into Madness",
    author: "Donny Cates",
    subject: "Non-Fiction",
    thumbnail: "http://books.google.com/books/content?id=4oXavLNDWocC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "28-03-2020"
  },
  {
    id: "9",
    title: "Master of the Game",
    author: "Bill Mantlo",
    subject: "Epic",
    thumbnail: "http://books.google.com/books/content?id=TkTYp-Tp6_IC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "27-07-2007"
  },
  {
    id: "10",
    title: "If Tomorrow Comes",
    author: "Scott Lobdell",
    subject: "Fiction",
    thumbnail: "http://books.google.com/books/content?id=l2tBi_jLuk8C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "20-06-2021"
  },
  {
    id: "11",
    title: "Assassin's Apprentice",
    author: "Nel Yomtov",
    subject: "Comics",
    thumbnail: "http://books.google.com/books/content?id=qTaGQgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "11-11-2017"
  },
  {
    id: "12",
    title: "Warhost of Vastmark",
    author: "Tini Howard",
    subject: "Thriller",
    thumbnail: "http://books.google.com/books/content?id=uOL0fpS9WZkC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "08-01-1999"
  },
  {
    id: "13",
    title: "The Once and Future King",
    author: "Yves Bigerel",
    subject: "Action",
    thumbnail: "http://books.google.com/books/content?id=Jx6BvgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "16-09-2001"
  },
  {
    id: "14",
    title: "Murder in LaMut",
    author: "Donny Cates",
    subject: "AutoBiography",
    thumbnail: "http://books.google.com/books/content?id=I2jbBlMHlAMC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "08-09-2009"
  },
  {
    id: "15",
    title: "Jimmy the Hand",
    author: "Bill Mantlo",
    subject: "Biography",
    thumbnail: "http://books.google.com/books/content?id=hV4-oITYFN8C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "02-11-2009"
  },
  {
    id: "16",
    title: "Well of Darkness",
    author: "Scott Lobdell",
    subject: "Social-Science",
    thumbnail: "http://books.google.com/books/content?id=XrwaAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "31-07-2018"
  },
  {
    id: "17",
    title: "Witness for the Prosecution & Selected Plays",
    author: "Nel Yomtov",
    subject: "Non-Fiction",
    thumbnail: "http://books.google.com/books/content?id=_9u7AAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "12-09-2016"
  },
  {
    id: "18",
    title: "The Little House",
    author: "Tini Howard",
    subject: "Epic",
    thumbnail: "http://books.google.com/books/content?id=rbvUPps9vKsC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "24-04-2004"
  },
  {
    id: "19",
    title: "Mystical Paths",
    author: "Yves Bigerel",
    subject: "Fiction",
    thumbnail: "http://books.google.com/books/content?id=by4ytBy63o0C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "27-02-1996"
  },
  {
    id: "20",
    title: "Glittering Images",
    author: "Donny Cates",
    subject: "Comics",
    thumbnail: "http://books.google.com/books/content?id=rDHbn0ORKhQC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "06-04-2001"
  },
  {
    id: "21",
    title: "Glamorous Powers",
    author: "Bill Mantlo",
    subject: "Thriller",
    thumbnail: "http://books.google.com/books/content?id=_bhPYWs6RrYC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "24-04-2005"
  },
  {
    id: "22",
    title: "The Mad Ship",
    author: "Scott Lobdell",
    subject: "Action",
    thumbnail: "http://books.google.com/books/content?id=2iWezkfdBE8C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "25-12-2021"
  },
  {
    id: "23",
    title: "Post Captain",
    author: "Nel Yomtov",
    subject: "AutoBiography",
    thumbnail: "http://books.google.com/books/content?id=S761k-z51Q4C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "13-01-2003"
  },
  {
    id: "24",
    title: "The Reverse of the Medal",
    author: "Tini Howard",
    subject: "Biography",
    thumbnail: "http://books.google.com/books/content?id=YtjxFRb39Z4C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "24-06-2020"
  },
  {
    id: "25",
    title: "Miss Marple",
    author: "Yves Bigerel",
    subject: "Social-Science",
    thumbnail: "http://books.google.com/books/content?id=a96qPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "09-07-1991"
  },
  {
    id: "26",
    title: "The Years of Rice and Salt",
    author: "Donny Cates",
    subject: "Non-Fiction",
    thumbnail: "http://books.google.com/books/content?id=I38CFD1RnmsC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "24-01-2015"
  },
  {
    id: "27",
    title: "Spares",
    author: "Bill Mantlo",
    subject: "Epic",
    thumbnail: "http://books.google.com/books/content?id=83RrAdP9y5UC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "17-07-2008"
  },
  {
    id: "28",
    title: "Gravity",
    author: "Scott Lobdell",
    subject: "Fiction",
    thumbnail: "http://books.google.com/books/content?id=KI66cH39n6sC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "03-03-1992"
  },
  {
    id: "29",
    title: "The Wise Woman",
    author: "Nel Yomtov",
    subject: "Comics",
    thumbnail: "http://books.google.com/books/content?id=BEr9wAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "24-03-2000"
  },
  {
    id: "30",
    title: "Girls' Night in",
    author: "Tini Howard",
    subject: "Thriller",
    thumbnail: "http://books.google.com/books/content?id=xLwHHQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "06-05-2006"
  },
  {
    id: "31",
    title: "The White Album",
    author: "Yves Bigerel",
    subject: "Action",
    thumbnail: "http://books.google.com/books/content?id=qauOPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "13-03-1997"
  },
  {
    id: "32",
    title: "The Bonesetter's Daughter",
    author: "Donny Cates",
    subject: "AutoBiography",
    thumbnail: "http://books.google.com/books/content?id=4KHT6mIMDt4C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "07-06-2008"
  },
  {
    id: "33",
    title: "The Lexus and the Olive Tree",
    author: "Bill Mantlo",
    subject: "Biography",
    thumbnail: "http://books.google.com/books/content?id=u8zxpq6o7HYC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "18-09-2015"
  },
  {
    id: "34",
    title: "'Tis",
    author: "Scott Lobdell",
    subject: "Social-Science",
    thumbnail: "http://books.google.com/books/content?id=Q3BhQgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "28-11-1996"
  },
  {
    id: "35",
    title: "Ocean Star Express",
    author: "Nel Yomtov",
    subject: "Non-Fiction",
    thumbnail: "http://books.google.com/books/content?id=I2QZAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "28-07-2020"
  },
  {
    id: "36",
    title: "A Small Pinch of Weather",
    author: "Tini Howard",
    subject: "Epic",
    thumbnail: "http://books.google.com/books/content?id=QiFhOBpYZoYC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "13-04-2008"
  },
  {
    id: "37",
    title: "The Princess of the Chalet School",
    author: "Yves Bigerel",
    subject: "Fiction",
    thumbnail: "http://books.google.com/books/content?id=EJcQPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "17-01-2017"
  },
  {
    id: "38",
    title: "Koko",
    author: "Donny Cates",
    subject: "Comics",
    thumbnail: "http://books.google.com/books/content?id=QV_XQKj4OMkC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "25-09-2001"
  },
  {
    id: "39",
    title: "Tree and Leaf",
    author: "Bill Mantlo",
    subject: "Thriller",
    thumbnail: "http://books.google.com/books/content?id=aPb_AAIcwZ0C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "13-11-2014"
  },
  {
    id: "40",
    title: "Partners in Crime",
    author: "Scott Lobdell",
    subject: "Action",
    thumbnail: "http://books.google.com/books/content?id=L0bfy0zgkegC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "05-01-2020"
  },
  {
    id: "41",
    title: "Murder in Mesopotamia",
    author: "Nel Yomtov",
    subject: "AutoBiography",
    thumbnail: "http://books.google.com/books/content?id=oFkbc7BbYN0C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "05-03-1998"
  },
  {
    id: "42",
    title: "The Lord of the Rings, the Return of the King",
    author: "Tini Howard",
    subject: "Biography",
    thumbnail: "http://books.google.com/books/content?id=kNBnQgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "26-07-2018"
  },
  {
    id: "43",
    title: "All Families are Psychotic",
    author: "Yves Bigerel",
    subject: "Social-Science",
    thumbnail: "http://books.google.com/books/content?id=jYBsNp6NPVoC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "05-09-2002"
  },
  {
    id: "44",
    title: "Death in the Clouds",
    author: "Donny Cates",
    subject: "Non-Fiction",
    thumbnail: "http://books.google.com/books/content?id=M8iyckq4GQ0C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "29-07-1996"
  },
  {
    id: "45",
    title: "Appointment with Death",
    author: "Bill Mantlo",
    subject: "Epic",
    thumbnail: "http://books.google.com/books/content?id=lSYwsRkcw4YC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "09-11-2016"
  },
  {
    id: "46",
    title: "Hallowe'en Party",
    author: "Scott Lobdell",
    subject: "Fiction",
    thumbnail: "http://books.google.com/books/content?id=Qlx98EGK_jMC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "02-10-2002"
  },
  {
    id: "47",
    title: "Hercule Poirot's Christmas",
    author: "Nel Yomtov",
    subject: "Comics",
    thumbnail: "http://books.google.com/books/content?id=EA0j4Jzn4vAC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "21-07-2021"
  },
  {
    id: "48",
    title: "The Big Four",
    author: "Tini Howard",
    subject: "Thriller",
    thumbnail: "http://books.google.com/books/content?id=wcOQUSWQEdUC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "07-06-2014"
  },
  {
    id: "49",
    title: "The Thirteen Problems",
    author: "Yves Bigerel",
    subject: "Action",
    thumbnail: "http://books.google.com/books/content?id=MK9JNwoZAncC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "08-10-2014"
  },
  {
    id: "50",
    title: "They Do it with Mirrors",
    author: "Donny Cates",
    subject: "AutoBiography",
    thumbnail: "http://books.google.com/books/content?id=HUuQYGppZi8C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "16-04-1994"
  },
  {
    id: "51",
    title: "A Murder is Announced",
    author: "Bill Mantlo",
    subject: "Biography",
    thumbnail: "http://books.google.com/books/content?id=QEEvzeAkdzoC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "01-01-1998"
  },
  {
    id: "52",
    title: "The Mirror Crack'd from Side to Side",
    author: "Scott Lobdell",
    subject: "Social-Science",
    thumbnail: "http://books.google.com/books/content?id=lTYId7FIJEsC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "20-04-2011"
  },
  {
    id: "53",
    title: "Mrs McGinty's Dead",
    author: "Nel Yomtov",
    subject: "Non-Fiction",
    thumbnail: "http://books.google.com/books/content?id=gcS0d5HhGEEC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "31-08-1994"
  },
  {
    id: "54",
    title: "Taken at the Flood",
    author: "Tini Howard",
    subject: "Epic",
    thumbnail: "http://books.google.com/books/content?id=3gWlxIFlMEwC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "25-07-2020"
  },
  {
    id: "55",
    title: "The Hollow",
    author: "Yves Bigerel",
    subject: "Fiction",
    thumbnail: "http://books.google.com/books/content?id=-f1h4e0hl0oC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "19-04-2009"
  },
  {
    id: "56",
    title: "Third Girl",
    author: "Donny Cates",
    subject: "Comics",
    thumbnail: "http://books.google.com/books/content?id=Dbh7nUkG_6cC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "19-05-2021"
  },
  {
    id: "57",
    title: "The Secret of Chimneys",
    author: "Bill Mantlo",
    subject: "Thriller",
    thumbnail: "http://books.google.com/books/content?id=1OluX5g96OcC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "09-10-2023"
  },
  {
    id: "58",
    title: "The Lord of the Rings",
    author: "Scott Lobdell",
    subject: "Action",
    thumbnail: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780544003415_p0_v5_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
    publishedYear: "30-05-2023"
  },
  {
    id: "59",
    title: "The Metaphysical Club",
    author: "Nel Yomtov",
    subject: "AutoBiography",
    thumbnail: "http://books.google.com/books/content?id=C3Gkwi3SfmMC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "27-06-2006"
  },
  {
    id: "60",
    title: "The illustrated man",
    author: "Tini Howard",
    subject: "Biography",
    thumbnail: "http://books.google.com/books/content?id=kePqlVft1bQC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "09-06-1995"
  },
  {
    id: "61",
    title: "Wilkins' Tooth",
    author: "Yves Bigerel",
    subject: "Social-Science",
    thumbnail: "http://books.google.com/books/content?id=lXUSHqQfOD8C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "29-11-2020"
  },
  {
    id: "62",
    title: "Cut",
    author: "Donny Cates",
    subject: "Non-Fiction",
    thumbnail: "http://books.google.com/books/content?id=Q140Mlie138C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "20-02-1997"
  },
  {
    id: "63",
    title: "The Lord of the Rings",
    author: "Bill Mantlo",
    subject: "Epic",
    thumbnail: "http://books.google.com/books/content?id=oEZ6AAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "18-01-1992"
  },
  {
    id: "64",
    title: "The Lord of the Rings",
    author: "Scott Lobdell",
    subject: "Fiction",
    thumbnail: "http://books.google.com/books/content?id=LwO-vgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "04-09-1993"
  },
  {
    id: "65",
    title: "The Fellowship of the Ring",
    author: "Nel Yomtov",
    subject: "Comics",
    thumbnail: "http://books.google.com/books/content?id=K7xSPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "29-04-1995"
  },
  {
    id: "66",
    title: "Lirael",
    author: "Tini Howard",
    subject: "Thriller",
    thumbnail: "http://books.google.com/books/content?id=sDzU8TpKvQAC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "15-12-2023"
  },
  {
    id: "67",
    title: "Tales from the Perilous Realm",
    author: "Yves Bigerel",
    subject: "Action",
    thumbnail: "http://books.google.com/books/content?id=Wla7NwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "09-01-2013"
  },
  {
    id: "68",
    title: "Breaking Open the Head",
    author: "Donny Cates",
    subject: "AutoBiography",
    thumbnail: "http://books.google.com/books/content?id=QIMaviqqoQoC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "17-05-2009"
  },
  {
    id: "69",
    title: "The Yiddish Policemen's Union",
    author: "Bill Mantlo",
    subject: "Biography",
    thumbnail: "http://books.google.com/books/content?id=-reD1g77BfsC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "16-08-2012"
  },
  {
    id: "70",
    title: "Beware, Princess Elizabeth",
    author: "Scott Lobdell",
    subject: "Social-Science",
    thumbnail: "http://books.google.com/books/content?id=wPBpR4AFNJ0C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "27-10-1992"
  },
  {
    id: "71",
    title: "The Family Way",
    author: "Nel Yomtov",
    subject: "Non-Fiction",
    thumbnail: "http://books.google.com/books/content?id=dJEIxdYmnU8C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "29-03-1990"
  },
  {
    id: "72",
    title: "Endless Night",
    author: "Tini Howard",
    subject: "Epic",
    thumbnail: "http://books.google.com/books/content?id=kY1wuNfgmFQC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "07-11-2000"
  },
  {
    id: "73",
    title: "How to be Alone",
    author: "Yves Bigerel",
    subject: "Fiction",
    thumbnail: "http://books.google.com/books/content?id=ozVWaXd9xvwC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "30-09-2004"
  },
  {
    id: "74",
    title: "The Mysterious Mr. Quin",
    author: "Donny Cates",
    subject: "Comics",
    thumbnail: "http://books.google.com/books/content?id=n0aMDV7Lm4sC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "30-05-2021"
  },
  {
    id: "75",
    title: "The Listerdale Mystery",
    author: "Bill Mantlo",
    subject: "Thriller",
    thumbnail: "http://books.google.com/books/content?id=J1tLGz5G84EC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "01-03-2003"
  },
  {
    id: "76",
    title: "The Real Trial of Oscar Wilde",
    author: "Scott Lobdell",
    subject: "Action",
    thumbnail: "http://books.google.com/books/content?id=QfNgQfTKcg0C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "10-12-2018"
  },
  {
    id: "77",
    title: "I Can Read with Me Eyes Shut!",
    author: "Nel Yomtov",
    subject: "AutoBiography",
    thumbnail: "http://books.google.com/books/content?id=oyF8U9BRTQwC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "11-11-1991"
  },
  {
    id: "78",
    title: "Oh, the Places You'll Go!",
    author: "Tini Howard",
    subject: "Biography",
    thumbnail: "http://books.google.com/books/content?id=Ev4Llq5fv4IC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "07-06-2001"
  },
  {
    id: "79",
    title: "If I Die in a Combat Zone",
    author: "Yves Bigerel",
    subject: "Social-Science",
    thumbnail: "http://books.google.com/books/content?id=0qUtSvo_MiEC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "27-05-1993"
  },
  {
    id: "80",
    title: "The Return of the King",
    author: "Donny Cates",
    subject: "Non-Fiction",
    thumbnail: "http://books.google.com/books/content?id=PI9zPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "02-12-2010"
  },
  {
    id: "81",
    title: "The Silmarillion",
    author: "Bill Mantlo",
    subject: "Epic",
    thumbnail: "http://books.google.com/books/content?id=hLH0dtl5NVwC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "03-05-2002"
  },
  {
    id: "82",
    title: "I Wish that I Had Duck Feet",
    author: "Scott Lobdell",
    subject: "Fiction",
    thumbnail: "http://books.google.com/books/content?id=m9cZAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "08-10-2018"
  },
  {
    id: "83",
    title: "Oh Say Can You Say?",
    author: "Nel Yomtov",
    subject: "Comics",
    thumbnail: "http://books.google.com/books/content?id=r4l8AAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "15-12-1992"
  },
  {
    id: "84",
    title: "There's a Boy in the Girls' Bathroom",
    author: "Tini Howard",
    subject: "Thriller",
    thumbnail: "http://books.google.com/books/content?id=jHE-PgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "18-02-2021"
  },
  {
    id: "85",
    title: "Microserfs",
    author: "Yves Bigerel",
    subject: "Action",
    thumbnail: "http://books.google.com/books/content?id=N3AmmJIsK6wC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "15-11-1998"
  },
  {
    id: "86",
    title: "Miss Wyoming",
    author: "Donny Cates",
    subject: "AutoBiography",
    thumbnail: "http://books.google.com/books/content?id=2zoTKFNdxpIC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "07-08-2004"
  },
  {
    id: "87",
    title: "Where Rainbows End",
    author: "Bill Mantlo",
    subject: "Biography",
    thumbnail: "http://books.google.com/books/content?id=PA7t62vA7SAC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "25-05-2010"
  },
  {
    id: "88",
    title: "Poirot",
    author: "Scott Lobdell",
    subject: "Social-Science",
    thumbnail: "http://books.google.com/books/content?id=lbOOJGLxM9MC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "29-03-2013"
  },
  {
    id: "89",
    title: "The Art of The Lord of the Rings",
    author: "Nel Yomtov",
    subject: "Non-Fiction",
    thumbnail: "http://books.google.com/books/content?id=zl-PPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "07-05-2018"
  },
  {
    id: "90",
    title: "The Known World",
    author: "Yves Bigerel",
    subject: "Epic",
    thumbnail: "http://books.google.com/books/content?id=CVS9a6lC5CwC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "09-06-2011"
  },
  {
    id: "91",
    title: "Discover Your Destiny with the Monk Who Sold His Ferrari",
    author: "Donny Cates",
    subject: "Fiction",
    thumbnail: "http://books.google.com/books/content?id=4hVbNc8rRfEC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "14-01-2005"
  },
  {
    id: "92",
    title: "Naked Lunch",
    author: "Bill Mantlo",
    subject: "Comics",
    thumbnail: "http://books.google.com/books/content?id=1B36S7t4k5AC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "05-10-2021"
  },
  {
    id: "93",
    title: "Tropic of Cancer",
    author: "Scott Lobdell",
    subject: "Thriller",
    thumbnail: "http://books.google.com/books/content?id=ProgRjTL8FIC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "29-05-1993"
  },
  {
    id: "94",
    title: "Close Range",
    author: "Nel Yomtov",
    subject: "Action",
    thumbnail: "http://books.google.com/books/content?id=f-zI3bgDiCAC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "14-06-1996"
  },
  {
    id: "95",
    title: "The Love of the Last Tycoon",
    author: "Tini Howard",
    subject: "AutoBiography",
    thumbnail: "http://books.google.com/books/content?id=3EDbEHca_k8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publishedYear: "25-05-1998"
  },
  {
    id: "96",
    title: "The Song of Rhiannon",
    author: "Yves Bigerel",
    subject: "Biography",
    thumbnail: "",
    publishedYear: "29-10-1990"
  },
  {
    id: "97",
    title: "Heart Songs and Other Stories",
    author: "Donny Cates",
    subject: "Social-Science",
    thumbnail: "http://books.google.com/books/content?id=_K2fswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "01-05-2003"
  },
  {
    id: "98",
    title: "The voyage of the Dawn Treader",
    author: "Bill Mantlo",
    subject: "Non-Fiction",
    thumbnail: "http://books.google.com/books/content?id=fDD3CfYb70cC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "14-05-2017"
  },
  {
    id: "99",
    title: "The Chronicles of Narnia: Lion, the witch and the wardrobe",
    author: "Scott Lobdell",
    subject: "Epic",
    thumbnail: "",
    publishedYear: "06-05-1994"
  },
  {
    id: "100",
    title: "The Short Stories of Ernest Hemingway",
    author: "Nel Yomtov",
    subject: "Fiction",
    thumbnail: "http://books.google.com/books/content?id=Len1AAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "16-01-2003"
  },
  {
    id: "101",
    title: "The Screwtape Letters ; With, Screwtape Proposes a Toast",
    author: "Yves Bigerel",
    subject: "Comics",
    thumbnail: "",
    publishedYear: "11-03-2010"
  },
  {
    id: "102",
    title: "Reason in History",
    author: "Donny Cates",
    subject: "Thriller",
    thumbnail: "http://books.google.com/books/content?id=BCvcYQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "21-05-2002"
  },
  {
    id: "103",
    title: "The Elements of Style",
    author: "Bill Mantlo",
    subject: "Action",
    thumbnail: "http://books.google.com/books/content?id=ADaMf2tEB7sC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "27-11-1998"
  },
  {
    id: "104",
    title: "The Presocratics",
    author: "Scott Lobdell",
    subject: "AutoBiography",
    thumbnail: "http://books.google.com/books/content?id=V45eMgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "16-09-2016"
  },
  {
    id: "105",
    title: "Spandau",
    author: "Nel Yomtov",
    subject: "Biography",
    thumbnail: "",
    publishedYear: "07-12-2017"
  },
  {
    id: "106",
    title: "The Rumble Seat Pony",
    author: "Tini Howard",
    subject: "Social-Science",
    thumbnail: "",
    publishedYear: "03-07-2011"
  },
  {
    id: "107",
    title: "The Journey with Grandmother",
    author: "Yves Bigerel",
    subject: "Non-Fiction",
    thumbnail: "",
    publishedYear: "13-10-2004"
  },
  {
    id: "108",
    title: "Tyranny of the Majority",
    author: "Donny Cates",
    subject: "Epic",
    thumbnail: "http://books.google.com/books/content?id=aRF7XdcCLq0C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "13-12-2005"
  },
  {
    id: "109",
    title: "The Origins of the Civil Rights Movement",
    author: "Bill Mantlo",
    subject: "Fiction",
    thumbnail: "http://books.google.com/books/content?id=7vyHY9DWcu8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publishedYear: "01-12-2008"
  },
  {
    id: "110",
    title: "Presidential Power and the Modern Presidents",
    author: "Scott Lobdell",
    subject: "Comics",
    thumbnail: "http://books.google.com/books/content?id=elGozulX_o8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publishedYear: "11-06-2014"
  },
  {
    id: "111",
    title: "Rest, Rabbit, Rest",
    author: "Nel Yomtov",
    subject: "Thriller",
    thumbnail: "http://books.google.com/books/content?id=8-40_Zrp5voC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "29-01-1995"
  },
  {
    id: "112",
    title: "Where the Red Fern Grows",
    author: "Yves Bigerel",
    subject: "Action",
    thumbnail: "http://books.google.com/books/content?id=IHpRwgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "12-07-1996"
  },
  {
    id: "113",
    title: "Poppy's Return",
    author: "Donny Cates",
    subject: "AutoBiography",
    thumbnail: "http://books.google.com/books/content?id=XbcMJQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "22-10-2010"
  },
  {
    id: "114",
    title: "Diary of a Spider",
    author: "Bill Mantlo",
    subject: "Biography",
    thumbnail: "http://books.google.com/books/content?id=UWvZo2pIhzMC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "31-01-1994"
  },
  {
    id: "115",
    title: "An Old-Fashioned Thanksgiving",
    author: "Scott Lobdell",
    subject: "Social-Science",
    thumbnail: "http://books.google.com/books/content?id=SKYr4V6C1M0C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "24-12-1999"
  },
  {
    id: "116",
    title: "The Paradox of Choice",
    author: "Nel Yomtov",
    subject: "Non-Fiction",
    thumbnail: "",
    publishedYear: "11-01-1999"
  },
  {
    id: "117",
    title: "How to Read Literature Like a Professor",
    author: "Tini Howard",
    subject: "Epic",
    thumbnail: "http://books.google.com/books/content?id=irkUlwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "17-02-2001"
  },
  {
    id: "118",
    title: "The Amazing Maurice and His Educated Rodents",
    author: "Yves Bigerel",
    subject: "Fiction",
    thumbnail: "http://books.google.com/books/content?id=1Z8KJQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "03-07-2015"
  },
  {
    id: "119",
    title: "The Wee Free Men",
    author: "Donny Cates",
    subject: "Comics",
    thumbnail: "http://books.google.com/books/content?id=8PLblgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "20-02-2003"
  },
  {
    id: "120",
    title: "Going Postal",
    author: "Bill Mantlo",
    subject: "Thriller",
    thumbnail: "http://books.google.com/books/content?id=5xRh5kkS84UC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "26-07-2011"
  },
  {
    id: "121",
    title: "Modern Mind",
    author: "Scott Lobdell",
    subject: "Action",
    thumbnail: "http://books.google.com/books/content?id=JVdMSavwwHoC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "02-11-2020"
  },
  {
    id: "122",
    title: "She Went All the Way",
    author: "Nel Yomtov",
    subject: "AutoBiography",
    thumbnail: "http://books.google.com/books/content?id=3ANI1Q2Z-qsC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "04-10-2006"
  },
  {
    id: "123",
    title: "Island",
    author: "Yves Bigerel",
    subject: "Biography",
    thumbnail: "http://books.google.com/books/content?id=MB3VSMgJ5CkC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "05-02-2013"
  },
  {
    id: "124",
    title: "A Year in the Life of William Shakespeare",
    author: "Donny Cates",
    subject: "Social-Science",
    thumbnail: "http://books.google.com/books/content?id=86bOlwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "06-01-1993"
  },
  {
    id: "125",
    title: "Lucy Sullivan Is Getting Married",
    author: "Bill Mantlo",
    subject: "Non-Fiction",
    thumbnail: "http://books.google.com/books/content?id=qLl-3FGhPl0C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "23-08-1990"
  },
  {
    id: "126",
    title: "The Terminal Man",
    author: "Scott Lobdell",
    subject: "Epic",
    thumbnail: "http://books.google.com/books/content?id=9hERBFsuOcgC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "17-09-1992"
  },
  {
    id: "127",
    title: "The Art of the Novel",
    author: "Nel Yomtov",
    subject: "Fiction",
    thumbnail: "http://books.google.com/books/content?id=H_3jAacr_U4C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "13-01-2011"
  },
  {
    id: "128",
    title: "The Bromeliad Trilogy",
    author: "Tini Howard",
    subject: "Comics",
    thumbnail: "http://books.google.com/books/content?id=IsFpvCusQsIC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "26-02-2017"
  },
  {
    id: "129",
    title: "Merry Christmas, Amelia Bedelia",
    author: "Yves Bigerel",
    subject: "Thriller",
    thumbnail: "http://books.google.com/books/content?id=SYCULYl-p-IC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "20-12-2019"
  },
  {
    id: "130",
    title: "Identity",
    author: "Donny Cates",
    subject: "Action",
    thumbnail: "http://books.google.com/books/content?id=D30ExgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "10-05-2001"
  },
  {
    id: "131",
    title: "The thief of always",
    author: "Bill Mantlo",
    subject: "AutoBiography",
    thumbnail: "http://books.google.com/books/content?id=jKsrAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "08-10-1998"
  },
  {
    id: "132",
    title: "The Illustrated Alchemist",
    author: "Scott Lobdell",
    subject: "Biography",
    thumbnail: "http://books.google.com/books/content?id=1YX2usKBAMIC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "06-12-2007"
  },
  {
    id: "133",
    title: "Mars and Venus Book of Days",
    author: "Nel Yomtov",
    subject: "Social-Science",
    thumbnail: "http://books.google.com/books/content?id=kd6YGT74stsC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "21-11-2022"
  },
  {
    id: "134",
    title: "The Last of the Really Great Whangdoodles",
    author: "Yves Bigerel",
    subject: "Non-Fiction",
    thumbnail: "http://books.google.com/books/content?id=D-iftWFTCcgC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "01-05-2014"
  },
  {
    id: "135",
    title: "Today I Feel Silly & Other Moods That Make My Day",
    author: "Donny Cates",
    subject: "Epic",
    thumbnail: "http://books.google.com/books/content?id=s_2GIF_c0T8C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "12-07-1998"
  },
  {
    id: "136",
    title: "The Missing Piece Meets the Big O",
    author: "Bill Mantlo",
    subject: "Fiction",
    thumbnail: "http://books.google.com/books/content?id=-m4gwgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "16-10-2018"
  },
  {
    id: "137",
    title: "Lafcadio, the Lion Who Shot Back",
    author: "Scott Lobdell",
    subject: "Comics",
    thumbnail: "http://books.google.com/books/content?id=lmeJRAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "17-02-2003"
  },
  {
    id: "138",
    title: "The Secret Garden Cookbook",
    author: "Nel Yomtov",
    subject: "Thriller",
    thumbnail: "http://books.google.com/books/content?id=c7E_HQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "09-04-2017"
  },
  {
    id: "139",
    title: "Laura's Album",
    author: "Tini Howard",
    subject: "Action",
    thumbnail: "http://books.google.com/books/content?id=_zTkqDlEV-UC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "18-03-2009"
  },
  {
    id: "140",
    title: "Quivers",
    author: "Yves Bigerel",
    subject: "AutoBiography",
    thumbnail: "http://books.google.com/books/content?id=3Fj1h-gIbUsC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "04-10-1992"
  },
  {
    id: "141",
    title: "Moonspinners",
    author: "Donny Cates",
    subject: "Biography",
    thumbnail: "http://books.google.com/books/content?id=GRhFkTkZba4C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "16-12-1990"
  },
  {
    id: "142",
    title: "Small Wonder",
    author: "Bill Mantlo",
    subject: "Social-Science",
    thumbnail: "http://books.google.com/books/content?id=2mrrlgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "02-12-2015"
  },
  {
    id: "143",
    title: "Worlds Enough & Time",
    author: "Scott Lobdell",
    subject: "Non-Fiction",
    thumbnail: "http://books.google.com/books/content?id=EKoIG4auiB4C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "21-03-2009"
  },
  {
    id: "144",
    title: "The Cheese Monkeys",
    author: "Nel Yomtov",
    subject: "Epic",
    thumbnail: "http://books.google.com/books/content?id=wkCm2zyHAcwC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "17-07-2005"
  },
  {
    id: "145",
    title: "Travels",
    author: "Yves Bigerel",
    subject: "Fiction",
    thumbnail: "http://books.google.com/books/content?id=QYilZGadTEYC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "26-05-1995"
  },
  {
    id: "146",
    title: "Caesar",
    author: "Donny Cates",
    subject: "Comics",
    thumbnail: "http://books.google.com/books/content?id=aoH_-e_syp0C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "13-06-1997"
  },
  {
    id: "147",
    title: "The Forever War",
    author: "Bill Mantlo",
    subject: "Thriller",
    thumbnail: "http://books.google.com/books/content?id=jc1eCZlD-ScC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "02-04-1993"
  },
  {
    id: "148",
    title: "Amelia Bedelia Goes Camping",
    author: "Scott Lobdell",
    subject: "Action",
    thumbnail: "http://books.google.com/books/content?id=WEEz7PKLpQkC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "10-09-1997"
  },
  {
    id: "149",
    title: "The Secret Sister",
    author: "Nel Yomtov",
    subject: "AutoBiography",
    thumbnail: "http://books.google.com/books/content?id=Pmjr6ytkCikC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "17-03-1997"
  },
  {
    id: "150",
    title: "Amelia Bedelia Helps Out",
    author: "Peggy Parish",
    subject: "Fiction",
    thumbnail: "http://books.google.com/books/content?id=rELWOiQkJTYC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedYear: "03-06-2005"
  },
  
]
export default books;
