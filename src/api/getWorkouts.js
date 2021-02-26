import irelandTrainer from '../assets/lake-inniscarra-trainer.jpg';
import irelandThumb from '../assets/lake-inniscarra-thumb.jpg';
import pullsTrainer from '../assets/slow-pulls-trainer.jpg';
import pullsThumb from '../assets/slow-pulls-thumb.jpg';
import charlesTrainer from '../assets/charles-race-trainer.jpg';
import charlesThumb from '../assets/charles-race-thumb.jpg';
import zambiaTrainer from '../assets/kafue-river-trainer.jpg';
import zambiaThumb from '../assets/kafue-river-thumb.jpg';

export const getWorkouts = () => (
    [
        {
            title: 'Lake Inniscarra, Ireland—Pyramid',
            time: 30.83,
            distance: 6248,
            trainer:irelandTrainer,
            alt:"rowing group",
            image: irelandThumb,
            workoutId: 1234183
        },
        {
            title: 'Slow Pulls and Fast Intervals',
            time: 41.216,
            distance: 9948,
            trainer: pullsTrainer,
            alt:"workout machine",
            image: pullsThumb,
            workoutId: 43534534

        },
        {
            title: 'Charles Race, Boston, Massachusets',
            time: 36.366,
            distance: 8648,
            trainer: charlesTrainer,
            alt:"race image",
            image: charlesThumb,
            workoutId: 3250988
        },
        {
            title: 'Kafue River, Zambia—Power Stroke Pyramid',
            time: 22.366,
            distance: 4660,
            trainer: zambiaTrainer,
            alt:"river image",
            image: zambiaThumb,
            workoutId: 2305823857
        },
    ]
)