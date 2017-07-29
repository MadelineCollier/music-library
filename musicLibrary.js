//
//
//  Create all prototypes
//
//
function Library (name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

function Playlist (name) {
  this.name = name;
  this.tracks = [];

  this.overallRating = function () {
    let ratings = 0;
    let trackCounter = 0;
    this.tracks.forEach(function(track) {
      ratings += track.rating;
      trackCounter += 1;
    });
    return ratings / trackCounter;
  }

  this.totalDuration = function () {
    let durationSum = 0;
    this.tracks.forEach(function(track){
      durationSum += track.length;
    });
    return durationSum + " Seconds Long";
  }
}

function Track (title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

//
//
//  Instantiate each prototype
//
//
const newLibrary = new Library('electronic music', 'maddy');

const newPlaylist1 = new Playlist('ambient');
const newPlaylist2 = new Playlist('grime');
const newPlaylist3 = new Playlist('house');

const newTrack1 = new Track('music for airports', 5, 1033.2);
const newTrack2 = new Track('ambient loop for vancouver', 3, 1500);
const newTrack3 = new Track('23 lashes', 4, 360);
const newTrack4 = new Track('ghetto kraviz', 5, 207);
const newTrack5 = new Track('jamie xx mix #4 for resident advisor', 4, 2700);

//
//
//  Populate each instance
//
//
newPlaylist1.tracks = [newTrack1, newTrack2];
newPlaylist2.tracks = [newTrack3, newTrack5];
newPlaylist3.tracks = [newTrack4, newTrack5];

newLibrary.playlists = [newPlaylist1, newPlaylist2, newPlaylist3];

//
//
//   Check instance behaviour, verify functions work correctly
//
//
console.log(newLibrary.playlists);
console.log(newLibrary.playlists[1].tracks[1].title);
console.log(newPlaylist1.tracks);
console.log(newPlaylist2.tracks);
console.log(newPlaylist3.tracks);
console.log(newPlaylist1.totalDuration());
console.log(newPlaylist2.totalDuration());
console.log(newPlaylist3.totalDuration());
console.log(newPlaylist1.overallRating());
console.log(newPlaylist2.overallRating());
console.log(newPlaylist3.overallRating());
