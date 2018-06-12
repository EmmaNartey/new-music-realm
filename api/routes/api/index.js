const express = require('express');
const router = express.Router();
const commentsController      = require('../../controllers/app/comments');
const registerController = require('../../controllers/app/register');
const songsController = require('../../controllers/app/songs');
const searchController = require('../../controllers/app/search');
const topSongsController = require('../../controllers/app/topSongs');
const trendingController = require('../../controllers/app/trending');
const contentProvidersController = require('../../controllers/dashboard/contentProviders');
const editionsController = require('../../controllers/dashboard/editions');
const countriesController = require('../../controllers/dashboard/countries');
const rssController = require('../../controllers/dashboard/rss');
const titleFormatterController = require('../../controllers/dashboard/titleFormatter');


// ============= APP ROUTES ============== //

// regiter route
router.post('/account/register', registerController.create);

// songs routes
router.get('/songs', songsController.all);
router.get('/songs/:id', songsController.byId);
router.post('/songs/:id/like', songsController.like);
router.post('/songs/:id/unlike', songsController.unlike);

// search songs route
router.get('/search', searchController.all);

// comments routes
router.post('/comments/add', commentsController.create);
router.get('/comments', commentsController.allSongComments);
router.get('/comments/all_comments', commentsController.all);
router.get('/comments/:id', commentsController.byId);
router.post('/comments/:id/upvote', commentsController.upvote);
router.post('/comments/:id/downvote', commentsController.downvote);
router.post('/comments/:id/upvote/undo', commentsController.undoUpvote);
router.post('/comments/:id/downvote/undo', commentsController.undoDownvote);
router.post('/comments/:id/upvote/toggle', commentsController.upvoteToggle);
router.post('/comments/:id/downvote/toggle', commentsController.downvoteToggle);

// top songs route
router.get('/top-songs', topSongsController.all);

// trending songs route
router.get('/trending', trendingController.all);


// =========== DASHBOARD ROUTES ============= //

// editions routes
router.post('/editions/add', editionsController.create);
router.get('/editions', editionsController.all);
router.get('/editions/:id', editionsController.byId);
router.post('/editions/edit/:id', editionsController.update);
router.post('/editions/delete/:id', editionsController.remove);

// rss route
router.get('/countries', countriesController.all);

// rss routes
router.post('/rss/add', rssController.create);
router.get('/rss', rssController.all);
router.get('/rss/cp', rssController.allContentProviders);
router.get('/rss/:id', rssController.byId);
router.post('/rss/update/:id', rssController.update);
router.post('/rss/delete/:id', rssController.remove);
router.post('/rss/toggle', rssController.toggle);

// content providers routes
router.post('/content_providers/add', contentProvidersController.create);
router.get('/content_providers', contentProvidersController.all);
router.get('/content_providers/edition', contentProvidersController.edition);
router.get('/content_providers/:id', contentProvidersController.byId);
router.post('/content_providers/edit/:id', contentProvidersController.update);
router.post('/content_providers/delete/:id', contentProvidersController.remove);

// title formatter routes
router.post('/title_formatter/add', titleFormatterController.create);
router.get('/title_formatter', titleFormatterController.all);
router.get('/title_formatter/:id', titleFormatterController.byId);
router.post('/title_formatter/edit/:id', titleFormatterController.update);
router.post('/title_formatter/delete/:id', titleFormatterController.remove);

module.exports = router;
