const express = require('express');
const router = express.Router();
const { getPlayLists, AddSongToPlayList,createPlaylist,getSinglePlayList,deletePlaylist } = require('../controllers/PlayListController');


router.get('/getPlaylist', getPlayLists);
router.get('/getSinglePlaylist/:id', getSinglePlayList);
router.post('/createPlaylist',createPlaylist );
router.post('/addSongToPlaylist/:playlistId', AddSongToPlayList);
router.delete('/deletePlaylist/:id', deletePlaylist);



module.exports = router;