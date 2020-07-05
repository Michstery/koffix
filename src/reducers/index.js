import { combineReducers } from "redux";

const cafeReducer = () => {
  return [
    {
      mood: "CUPPUCCINO",
      url:
        "https://cdn.pixabay.com/photo/2016/11/29/12/45/beverage-1869598__340.jpg",
      song1: "JAMES BROWN - I FEEL GOOD",
      song1Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/119046003&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
      song2: "PHARELL WILLIAMS - HAPPY",
      song2Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/132774758&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song3: "THE SALFAM GROUP - MACARENA",
      song3Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2525977&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song4: "BLACK EYED PEAS - I GOTTA FEELING",
      song4Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/16480693&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song5: "BOB MARLEY - DON'T WORRY BE HAPPY",
      song5Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/144550744&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    },
    {
      mood: "EXPRESSO",
      url:
        "https://cdn.pixabay.com/photo/2015/02/05/01/33/valentines-day-624440__340.jpg",
      duration: "4:05",
      song1: "GORILLAZ - FEEL GOOD",
      song1Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/231321623&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
      song2: "EMINEM ft DIDO - STAN",
      song2Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/235029889&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song3: "BILLIE EILISH - WHEN THE PARTY'S OVER",
      song3Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/393494739&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song4: "GREAT BIG WORLD ft CHRISTIANA AGUILERA - SAY SOMETHING",
      song4Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/325121030&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song5: "WE THE KINGS ft ELENA COATS - SAD SONG",
      song5Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/279065232&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    },
    {
      mood: "ICE COFFEE",
      url:
        "https://cdn.pixabay.com/photo/2016/03/27/21/37/tea-1284366__340.jpg",
      duration: "4:05",
      song1: "MARK RONSON ft BRUNO MARS - UPTOWN FUNK",
      song1Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/183543302&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song2: "AHA - TAKE ON ME",
      song2Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/191122274&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song3: "DAFT PUNK - GET LUCKY",
      song3Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/88335161&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song4: "JAMES BROWN - GET UP SEX MACHINE",
      song4Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/149339356&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song5: "RICK JAMES - SUPER FREAK",
      song5Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/152227790&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    },
    {
      mood: "LATTE",
      url:
        "https://cdn.pixabay.com/photo/2015/11/07/11/16/coffee-1030971__340.jpg",
      duration: "4:05",
      song1: "ADELE - SOMEONE LIKE YOU",
      song1Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/34517808&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song2: "SHONTELLE - IMPOSSIBLE",
      song2Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/17256887&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song3: "SAM SMITH - I'M NOT THE ONLY ONE",
      song3Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/160928696&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song4: "BRUNO MARS - GRENADE",
      song4Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/100560677&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song5: "SIA - BIG GIRLS CRY",
      song5Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/155983517&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    },
    {
      mood: "CREAM LIFE",
      url:
        "https://cdn.pixabay.com/photo/2015/11/07/11/49/coffee-1031526__340.jpg",
      duration: "4:05",
      song1: "JOHN LEGEND - ALL OF ME",
      song1Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/113662676&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song2: "ED SHEREEN - PHOTOGRAPH",
      song2Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/210002474&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song3: "ED SHEREEN - PERFECT",
      song3Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/310640631&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song4: "MADILYN PAIGE - IRREPLACEABLE",
      song4Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/174445349&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song5: "BRUNO MARS - JUST THE WAY YOU ARE",
      song5Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/29051293&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    },
    {
      mood: "LIME TEA",
      url: "https://cdn.pixabay.com/photo/2015/07/02/20/37/cup-829527__340.jpg",
      duration: "4:05",
      song1: "JAMES BROWN - I FEEL GOOD",
      song1Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/119046003&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
      song2: "PHARELL WILLIAMS - HAPPY",
      song2Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/132774758&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song3: "THE SALFAM GROUP - MACARENA",
      song3Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2525977&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song4: "BLACK EYED PEAS - I GOTTA FEELING",
      song4Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/16480693&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song5: "BOB MARLEY - DON'T WORRY BE HAPPY",
      song5Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/144550744&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    }
  ];
};

const selectedCafeReducer = (selectedCafe = null, action) => {
  if (action.type === "ITEM_SELECTED") {
    return action.payload;
  }

  return selectedCafe;
};

export default combineReducers({
  cafe: cafeReducer,
  selectedCafe: selectedCafeReducer
});
