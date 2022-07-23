const express = require('express');
const router = express.Router();
const { getPlayLists, AddSongToPlayList,createPlaylist,getSinglePlayList,deletePlaylist,deleteSongToPlaylist } = require('../controllers/PlayListController');


router.get('/getPlaylist', getPlayLists);
router.get('/getPlaylist/:id', getSinglePlayList);
router.post('/createPlaylist',createPlaylist );
router.post('/addSongToPlaylist/:playlistId', AddSongToPlayList);
router.delete('/deleteSongToPlaylist/:playlistId/:SongId',deleteSongToPlaylist)
router.delete('/deletePlaylist/:id', deletePlaylist);




module.exports = router;