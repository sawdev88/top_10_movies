function baseKey() {
    var key = 'ae86fc8dd2dce3fdad05baa89a0f32e4';
    return key;
}

$.getJSON('https://api.themoviedb.org/3/discover/movie?api_key=' + baseKey() + '&sort_by=popularity.desc', function(json) {

    let posters = $('li img'),
        movieDetails = $('.movie-details'),
        mainPoster = $('.main-poster'),
        title = $('.title'),
        overview = $('.overview'),
        rating = $('.rating'),
        baseIMG = 'http://image.tmdb.org/t/p/w300';

    posters.each(function(index) {
        console.log(index);
        $(this).attr('src', baseIMG + json.results[index].poster_path);

        $(this).on('click', function() {
            movieDetails.fadeIn();
            mainPoster.attr('src', baseIMG + json.results[index].poster_path);
            title.text(json.results[index].title);
            overview.text(json.results[index].overview);
            rating.text(json.results[index].vote_average + '/10');
        })
    })

    movieDetails.on('click', function() {
        $(this).fadeOut();
    })

});
