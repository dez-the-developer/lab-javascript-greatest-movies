// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director);    
}

function getUniqueDirectors(moviesArray) {
    const directors = getAllDirectors(moviesArray)
    return [...new Set(directors)]
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movie =>
        movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    ).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;

    const totalScore = moviesArray.reduce((sum, movie) => {
        return sum + (movie.score || 0);
    }, 0);

    const averageScore = totalScore / moviesArray.length;
    return Number(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    if (dramaMovies.length ===0) return 0;

    const totalScore = dramaMovies.reduce((sum, movie) => {
        return sum + (movie.score || 0);
    }, 0);

    const averageScore = totalScore / dramaMovies.length;
    return Number(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return [...moviesArray].sort((a,b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedTitles = moviesArray.map(movie => movie.title).sort((a, b) => a.localeCompare(b));
    return sortedTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movie => {
        const duration = movie.duration;
        const timeParts = duration.split(' ');
        let minutes = 0;

        timeParts.forEach(part => {
            if (part.includes('h')) {
                minutes += parseInt(part) * 60;
            }
            if (part.includes('min')) {
               minutes += parseInt(part); 
            }
        });

        return { ...movie, duration: minutes };
    });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
if (moviesArray.length === 0) return null;

const yearlyScores = {};

moviesArray.forEach(movie => {
    if (!yearlyScores[movie.year]) {
        yearlyScores[movie.year] = [];
    }
    yearlyScores[movie.year].push(movie.score);
});

let bestYear = null;
let bestAverage = 0;

for (const year in yearlyScores) {
    const scores = yearlyScores[year];
    const average = scores.reduce((sum, score) => sum + (score || 0), 0) / scores.length;

    if (average > bestAverage) {
        bestAverage = average;
        bestYear = year;
    } else if (average === bestAverage && year < bestYear) {
        bestYear = year;
    }
}

return `The best year was ${bestYear} with an average score of ${bestAverage.toFixed(1)}`;
}