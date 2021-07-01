const { Comic, Category } = require("./models")

const categories = ["Aventuras", "Humorístico", "Terror", "Fantástico"]

categories.map(async item => {
  await Category.create({ name: item })
})

const Aventuras = [
  {
    name: "Batman: The Killing Joke",
    price: 1.14,
    img: "https://static.wikia.nocookie.net/batman/images/9/9f/BTKJ.jpg/revision/latest/top-crop/width/360/height/450?cb=20160503185920&path-prefix=es",
    plot: "Batman: The Killing Joke is a 1988 DC Comics one-shot graphic novel featuring the characters Batman and the Joker written by Alan Moore and illustrated by Brian Bolland. The Killing Joke provides an origin story for the supervillain the Joker, loosely adapted from the 1951 story arc 'The Man Behind the Red Hood!'. The Joker's origin is presented via flashback, while simultaneously depicting his attempt to drive Jim Gordon insane and Batman's desperate attempt to stop him.",
    rating: 5,
    stock: 5,
    year: 2012
  },
  {
    name: "The Dark Knight Returns",
    price: 1.25,
    img: "https://static.wikia.nocookie.net/batman/images/3/3d/Batman_The_Dark_Knight_Returns_Vol.1_1.jpg/revision/latest?cb=20151026195227&path-prefix=es",
    plot: "The Dark Knight Returns (alternatively titled Batman: The Dark Knight Returns) is a 1986 four-issue comic book miniseries starring Batman, written by Frank Miller, illustrated by Miller, and Klaus Janson, with color by Lynn Varley, and published by DC Comics. It tells an alternative story of Bruce Wayne, who at 55-years-old returns from retirement to fight crime and faces opposition from the Gotham City police force and the United States government. The story also features the return of classic foes such as Two-Face and the Joker, and culminates with a confrontation against Superman, who is now a pawn of the government.",
    rating: 4,
    stock: 6,
    year: 2010
  },
  {
    name: "Scott Pilgrim's Precious Little Life",
    price: 0.75,
    img: "https://images-na.ssl-images-amazon.com/images/I/814D-wJNPVL.jpg",
    plot: "Scott Pilgrim's life is totally sweet. He's 23 years old, he's in a rockband, he's 'between jobs' and he's dating a cute high school girl. Nothing could possibly go wrong, unless a seriously mind-blowing, dangerously fashionable, rollerblading delivery girl named Ramona Flowers starts cruising through his dreams and sailing by him at parties. Will Scott's awesome life get turned upside-down? Will he have to face Ramona's seven evil ex-boyfriends in battle? The short answer is yes.",
    rating: 3.5,
    stock: 2,
    year: 2013
  },
  {
    name: "The Amazing Spider-Man: Kraven's Last Hunt",
    price: 0.8,
    img: "https://images-na.ssl-images-amazon.com/images/I/81T--4Z80mL.jpg",
    plot: "Kraven hunts down Spider-Man, defeats him, and seemingly shoots him dead. Kraven then buries him, and donning a copy of Spider-Man's costume, seeks to prove himself superior at his adversary's former activities. ",
    rating: 3.75,
    stock: 8,
    year: 2012
  },
  {
    name: "The Amazing Spider-Man: The Night Gwen Stacy Died",
    price: 1.25,
    img: "https://images-na.ssl-images-amazon.com/images/I/61+zjXJOapL.jpg",
    plot: "Prior to this arc, Norman Osborn had been the Green Goblin, but due to amnesia, he had suspended his identity as the supervillain and forgotten that Spider-Man is Peter Parker. Also, Harry Osborn, Parker's best friend and Norman's son, became addicted to drugs and was sequestered in the Osborn home for detoxification. Norman's parental grief, combined with financial pressure, triggered a breakdown resulting in Norman Osborn remembering his Goblin identity and again targeting Spider-Man and his loved ones for misery. ",
    rating: 4.5,
    stock: 9,
    year: 2009
  }
]

const Humorístico = [
  {
    name: "All-New Guardians Of The Galaxy Vol. 1: Communication Breakdown",
    price: 1.1,
    img: "https://m.media-amazon.com/images/I/51454KQ1j4L.jpg",
    plot: "A new era of cosmic adventure begins! The Guardians of the Galaxy have taken off into space once more on their biggest and weirdest misadventures yet! Kicking things off with the boldest heist they've ever pulled, Star-Lord, Rocket and company blast their way through the galaxy -with the peacekeepers of the Nova Corps hot on their tail! And soon enough, they find themselves caught in a war between the Collector and the Grandmaster! Will there be any room to explain why Groot can't grow any bigger, what Gamora is searching for, or why Drax has sworn off violence?! You bet there will - the all-new Guardians of the Galaxy has space for all your Marvel Cosmic needs!",
    rating: 4,
    stock: 2,
    year: 2017
  },
  {
    name: "Deadpool Kills the Marvel Universe",
    price: 4.2,
    img: "https://images-na.ssl-images-amazon.com/images/I/919h1KUZY6L.jpg",
    plot: "What if everything you thought was funny about Deadpool was actually just disturbing? What if he decided to kill everyone and everything that makes up the Marvel Universe? What if he actually pulled it off? Would that be FUN for you? The Merc with a Mouth takes a turn for the twisted in a horror comic like no other!",
    rating: 3.2,
    stock: 4,
    year: 2014
  },
  {
    name: "Rocket Raccoon and Groot",
    price: 0.75,
    img: "https://www.forevergeek.com/wp-content/media/2016/02/rocket-raccoon-groot-470x723.jpg?ezimgfmt=ng:webp/ngcb4",
    plot: "There's a new criminal mastermind in the galaxy, and it's...ROCKET RACCOON?! How did this happen? SERIOUSLY, HOW DID THIS HAPPEN, YOU GUYS??? Groot knows, but he's not talking! Well, he is talking, but all he's saying is...oh, you know. Diabolical danger, madcap mysteries and astonishing adventure abound as SKOTTIE YOUNG and FILIPE ANDRADE return to tell tall tail tales of Rocket Raccoon, now with the adorable, arboreal Groot along for the ride! If you love adventure, animals, outer space and just about anything in between, this is the book for you!",
    rating: 3.5,
    stock: 2,
    year: 2013
  },
  {
    name: "HARLEY QUINN: VILLAIN OF THE YEAR #1",
    price: 1.69,
    img: "https://static.wikia.nocookie.net/batman/images/e/ed/Harley_Quinn_Villain_of_the_Year_Vol.1_1.png/revision/latest?cb=20191211170835&path-prefix=es",
    plot: "Harley Quinn hosts “Villainy’s Biggest Night” as the DCU’s most dastardly gather at the Hall of Doom to do what they do best—congratulate themselves! But one villain has a secret plan, fueled by years of being overlooked by his peers, and the burning desire to receive the praise he so rightly deserves... Don’t miss out on a one-of-a-kind comic book experience, with the winners decided by you, the fans! Who will be crowned DC’s Villain of the Year?",
    rating: 4.25,
    stock: 2,
    year: 2018
  },
  {
    name: "Shazam! The Monster Society of Evil",
    price: 1.2,
    img: "https://images-na.ssl-images-amazon.com/images/I/71S+w2-q1SL.jpg",
    plot: "Granted the powers of the ancient gods, young Billy Batson transforms into Captain Marvel whenever he says the magic word, Shazam! Now, Captain Marvel faces an alien invasion and must stop the Monster Society of Evil from taking over the world. Jeff Smith, the award-winning creator of Bone, brings back an icon of the comic-book world.",
    rating: 2.8,
    stock: 4,
    year: 2013
  }
]

const Terror = [
  {
    name: "Saga of the Swamp Thing Book One",
    price: 1.2,
    img: "https://http2.mlstatic.com/D_NQ_NP_724718-MLA41394798773_042020-O.jpg",
    plot: "A haunting origin story that reshapes Swamp Thing mythology with terrifying revelations that begin a journey of discovery and adventure that will take him across the stars and beyond.",
    rating: 4.5,
    stock: 5,
    year: 2008
  },
  {
    name: "Hellboy in Hell Volume 1: The Descent",
    price: 2.2,
    img: "https://m.media-amazon.com/images/I/41KDSuas7PL.jpg",
    plot: "After saving the world in The Storm and the Fury but sacrificing himself and Great Britain, Hellboy is dead, cast into Hell, where he finds many familiar faces and a throne that awaits him.",
    rating: 3.8,
    stock: 8,
    year: 2001
  },
  {
    name: "Watchmen",
    price: 2.75,
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442239711l/472331.jpg",
    plot: "Watchmen depicts an alternate history in which superheroes emerged in the 1940s and 1960s and their presence changed history so that the United States won the Vietnam War and the Watergate scandal was never exposed.",
    rating: 4.8,
    stock: 2,
    year: 1986
  },
  {
    name: "Batman: Death of the family ",
    price: 1.3,
    img: "https://images-na.ssl-images-amazon.com/images/I/91grEvxbcoL.jpg",
    plot: "One year ago, the Joker limped off the streets of Gotham, mutilated and scarred when someone had taken the pale white skin right off of his face. But now, the Dark Knight’s greatest foe has returned but for once, Batman doesn’t seem to be his target. Instead, the Joker turns his vile hatred towards Commissioner Gordon, Alfred, Robin, Nightwing, Batgirl, Red Hood and Red Robin … the only family Bruce Wayne has left. The Clown Prince of Crime will unleash his most unpredictable, vicious and psychotic assault ever on everyone Batman holds dear.",
    rating: 4.5,
    stock: 5,
    year: 2010
  },
  {
    name: "Punisher: Year One",
    price: 1.2,
    img: "https://m.media-amazon.com/images/I/51fC-Ns4wOL.jpg",
    plot: "Punisher War Journal, Page One: We've known for years about the deaths of Frank Castle's wife and children, but now we see Castle himself mere hours later, when his grief and rage were at their freshest. To the police, he's a lead. To a reporter, he's a story. To the mob, he's just one more loose end. In four issues, they'll all learn what he's really become...",
    rating: 2.8,
    stock: 4,
    year: 2013
  }
]

const Fantástico = [
  {
    name: "Critical Role Vox Machina: Origins Volume 1",
    price: 1.2,
    img: "https://oyster.ignimgs.com/wordpress/stg.ign.com/2020/09/rsz_crvmo3_i1_cvr_4x6_sol.jpg",
    plot: "Six would-be heroes on seemingly different jobs find their paths intertwined as they investigate shady business in the swamp town of Stilben. They'll need to put their heads-- and weapons--together to figure out what's going on...and keep from being killed in the process. Even then, whether or not they can overcome what truly lurks at the bottom of the town's travails remains to be seen! ",
    rating: 4.5,
    stock: 5,
    year: 2008
  },
  {
    name: "Arrowsmith",
    price: 2.2,
    img: "https://www.ecccomics.com/content/productos/1605/arrowsmith.jpg",
    plot: "The series is set in an alternate history Earth in which the United States of America is actually the United States of Columbia, magic is real, and the First World War is fought with and by dragons, spells, vampires and all other kinds of magical weapons and beings. ",
    rating: 3.8,
    stock: 8,
    year: 2001
  },
  {
    name: "Nimona",
    price: 2.75,
    img: "https://mx.web.img2.acsta.net/pictures/17/08/16/14/47/417277.jpg",
    plot: "The graphic novel debut from rising star Noelle Stevenson, based on her beloved and critically acclaimed web comic, which Slate awarded its Cartoonist Studio Prize, calling it 'a deadpan epic.'",
    rating: 4.8,
    stock: 2,
    year: 1986
  },
  {
    name: "Teen Titans: Beast Boy",
    price: 1.3,
    img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/947/716/products/55460741-33edca096a1045af2c16021688833620-640-0.jpg",
    plot: "Garfield Logan has spent his entire life being overlooked. Even in a small town like Eden, Georgia, the 17-year-old with green streaks in his hair can’t find a way to stand out–and the clock is ticking. Senior year is almost over. If Gar doesn’t find a way to impress the Chosen Ones–the social elite at Bull Creek High School–he will never know what it’s like to matter. Gar’s best friends, Stella and Tank, don’t understand why he cares what other people think. They miss their funny, pizza-loving, video game-obsessed best friend.",
    rating: 4.5,
    stock: 5,
    year: 2010
  },
  {
    name: "The Saga of Crystar",
    price: 1.2,
    img: "https://images-na.ssl-images-amazon.com/images/I/81KHyo7HGtL._AC_SY500_.jpg",
    plot: "Years ago, The Demon Lord sent his demon armies to conquer the world of Crystalium. The King of Crystalium led the fight against the Demon Lord in the Chaos War, but he was killed during the war. The forces of Order then sent the wizard Ogeode and the Prisma-Crystal to drive away The Demon Lord's minions and the forces of Chaos. In his defeat, the Demon Lord made the 'Prophecy of Chaos', that he would one day send another of his servants to divide the planet against itself and bring ruin to all. ",
    rating: 2.8,
    stock: 4,
    year: 2013
  }
]

console.log("Please wait creating data!!")

Aventuras.map(comic => {
  Comic.create(comic).then(comicCreado => {
    Category.findOne({ where: { name: "Aventuras" } }).then(category => {
      comicCreado.adloginUserdCategory(category)
    })
  })
})

Terror.map(comic => {
  Comic.create(comic).then(comicCreado => {
    Category.findOne({ where: { name: "Terror" } }).then(category => {
      comicCreado.addCategory(category)
    })
  })
})

Fantástico.map(comic => {
  Comic.create(comic).then(comicCreado => {
    Category.findOne({ where: { name: "Fantástico" } }).then(category => {
      comicCreado.addCategory(category)
    })
  })
})

Humorístico.map(comic => {
  Comic.create(comic).then(comicCreado => {
    Category.findOne({ where: { name: "Humorístico" } }).then(category => {
      comicCreado.addCategory(category)
    })
  })
})
