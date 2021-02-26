import performanceTrainer from '../assets/performance-series-trainer.jpg';
import performanceThumb from '../assets/performance-series-thumb.jpg';
import tonedTrainer from '../assets/20-minutes-to-toned-trainer.jpg';
import tonedThumb from '../assets/20-minutes-to-toned-thumb.jpg';
import hiitTrainer from '../assets/full-body-hiit-trainer.jpg';
import hiitThumb from '../assets/full-body-hiit-thumb.jpg';
import shredTrainer from '../assets/shred-and-burn-trainer.jpg';
import shredThumb from '../assets/shred-and-burn-thumb.jpg';

export const getSeries = () => (
    [
        {
            title: 'Performance Series', 
            trainer:performanceTrainer,
            image: performanceThumb,
            workouts: [{},{},{},{},{},{},{},{},{}],
            seriesId: 329857423987
        },
        {
            title: '20 Minutes to Toned',
            trainer: tonedTrainer,
            image: tonedThumb,
            workouts: [{},{},{},{},{},{},{},{},{},{},{},{}],
            seriesId: 3245235524
        },
        {
            title: 'Full Body HIIT Series',
            trainer: hiitTrainer,
            image: hiitThumb,
            workouts: [{},{},{},{},{},{},{},{},{},{},{},{}],
            seriesId: 2850220835082
        },
        {
            title: 'Kafue River, Zambia—Power Stroke Pyramid',
            trainer: shredTrainer,
            image: shredThumb,
            workouts: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
            seriesId: 320320840283
        },
    ]
)