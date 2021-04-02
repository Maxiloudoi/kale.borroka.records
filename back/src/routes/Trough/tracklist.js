const addTroughTableTracklist = async (tracklist, ArtistId, SongModel, postAlbum) => {
  for (let i=1; i< tracklist.length; i++) {
    const addTracklist = await SongModel.create({
      name: tracklist[i].name,
      track: tracklist[i].track,
      ArtistId: ArtistId,
    });
    await postAlbum.addSong(addTracklist);
  }
};

module.exports = addTroughTableTracklist;
