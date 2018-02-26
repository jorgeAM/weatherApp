import moment from 'moment';
import 'moment/locale/es';

const transformForeCast = (data) => (
  data.list.filter(item => (
    moment.unix(item.dt).utc().hour() === 6 ||
    moment.unix(item.dt).utc().hour() === 12 ||
    moment.unix(item.dt).utc().hour() === 18
  )).map(item => (
    {
      weekDay: moment.unix(item.dt).format('dddd'),
      hora: moment.unix(item.dt).utc().hour(),
      temperatura: item.main.temp.toFixed(0) - 273,
      humedad: item.main.humidity,
      viento: item.wind.speed,
    }
  ))
);

export default transformForeCast;
