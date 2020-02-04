export function Cards() {
  this.deck =  [
    {
      name: "bambi",
      img: URL("https://i.pinimg.com/236x/4a/ef/f9/4aeff94a8f6d7989f2273fb68824279a.jpg")
    },
    {
      name: "seal",
      img: URL("https://www.fullhdwpp.com/wp-content/uploads/Baby-Seal.jpg")
    },
    {
      name: "turtle",
      img: URL("https://www.tehcute.com/pics/201109/happy-baby-turtle-is-happy-big.jpg")
    },
    {
      name: "puppy",
      img: URL("https://cache.desktopnexus.com/thumbseg/386/386395-bigthumbnail.jpg")
    },
    {
      name: "hedgehog",
      img: URL("https://rlv.zcache.com/cute_baby_hedgehog_customizable_poster-r6f61fae2c5a34442a11207f2cb7e9947_wv3_8byvr_540.jpg")
    },
  ];
  this.turn = 0;
  this.clicks = 0;
}

Cards.prototype.addClick = function() {
  this.clicks ++;
};

Cards.prototype.incrementTurn = function() {
  this.turn ++;
};