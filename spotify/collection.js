function createCollection(name, description){
  var collection = {
    name: name,
    description: description,
    tracks: []
  }
  return collection
}

function createTrack(title, artist, duration){
  var track = {
    title: title || 'unknown',
    artist: artist || 'unknown',
    duration: duration || 0,
  }
  return track
}

function reviewTrack(track){
  if(track.artist === "Red Hot Chili Peppers") {
    return `The song ${track.title} rules!`
  } else {
    return 'I wish this was a Red Hot Chili Peppers song.'
  }
}

function addTrack(collection, track){
  collection.tracks.push(track)
  return collection
}

function getTotalDuration(collection){
  var totalDuration = 0
  for (var i=0; collection.tracks.length>i; i++){
    totalDuration += collection.tracks[i].duration
  }
  return totalDuration
}

function findTracksByArtist(collection, artist){
  var songsByArtist = [];
  for (var i=0; collection.tracks.length>i; i++){
    if(collection.tracks[i].artist === artist){
      songsByArtist.push(collection.tracks[i])
    }
  }
}

  module.exports = { 
    createCollection,
    createTrack,
    reviewTrack,
    addTrack,
    getTotalDuration,
    findTracksByArtist
   }