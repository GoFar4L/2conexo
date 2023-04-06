import styles from './Slider.module.css'
import {Slider as MaterialSlider} from '@mui/material';
const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 40,
    label: '40',
  },
  {
    value: 60,
    label: '60',
  },
  {
    value: 80,
    label: '80',
  },
  {
    value: 100,
    label: '100°C',
  },
];
const Slider = ({value, handleChange}) => {

    return (
        <div className={styles.container}>
            <MaterialSlider
                value={value}
                onChange={handleChange}
                className={styles.slider}
                marks={marks}
            ></MaterialSlider>
        </div>
    )
}
export default Slider;