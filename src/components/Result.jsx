import moment from 'moment';

export default function (props) {
  let styleAccordingToDate = () => {
    let apiRes = props.data.date_range;
    console.log(apiRes);
    let twoDatesFromApi = apiRes.split(' - ');

    let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

    let tmp = twoDatesFromApi[0].split(' ');
    let month1 = tmp[0].toLowerCase();
    let date1 = tmp[1];
    month1 = months.indexOf(month1) + 1;

    tmp = twoDatesFromApi[1].split(' ');
    let month2 = tmp[0].toLowerCase();
    let date2 = tmp[1];
    month2 = months.indexOf(month2) + 1;

    let dateFrom = month1+'/'+date1+'/'+new Date().getFullYear();
    let dateTo = month2+'/'+date2+'/'+new Date().getFullYear();

    let dateCheck;
    if(props.day === 'today'){
      let today = new Date();
      dateCheck = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
    }else if(props.day === 'yesterday'){
      let today = new Date();
      let yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() + 1);
      dateCheck = (yesterday.getMonth()+1)+'/'+yesterday.getDate()+'/'+yesterday.getFullYear();
    }else if(props.day === 'tomorrow'){
      let today = new Date();
      let tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      dateCheck = (tomorrow.getMonth()+1)+'/'+tomorrow.getDate()+'/'+tomorrow.getFullYear();
    }

    let compareDate = moment(dateCheck, "ṂM/DD/YYYY");
    let startDate   = moment(dateFrom, "MM/DD/YYYY");
    let endDate     = moment(dateTo, "MM/DD/YYYY");

    if(compareDate.isBetween(startDate, endDate) || compareDate.isSame(startDate) || compareDate.isSame(endDate)){
      console.log('Date is inclusive')
      return 'horoscope-date-inclusive';
    }else{
      console.log('Date is not inclusive');
      return 'horoscope-date-not-inclusive';
    }
  }

  

  return (
    <div className={styleAccordingToDate()}>
      <div className="horoscope-heading"><h2>Your Horoscope: </h2></div>
      <div className="horoscope-details">
        <div className="details-row">
          <span className="detailsName">Name: </span> <label>{props.name}</label>
        </div>
        <div className="details-row">
          <span className="detailsName">Your horoscope sign: </span> <label>{props.sign}</label>
        </div>
        <div className="details-row">
          <span className="detailsName">Email: </span> <label>{props.email}</label>
        </div>
        <div className="details-row">
          <span className="detailsName">Your lucky color: </span> <label>{props.data.color}</label>
        </div>
        <div className="details-row">
          <span className="detailsName">Your compatible horoscope sign: </span><label>{props.data.compatibility}</label>
        </div>
        <div className="details-row">
          <span className="detailsName">Date: </span><label>{props.data.current_date}</label>
        </div>
        <div className="details-row">
          <span className="detailsName">Date range: </span><label>{props.data.date_range}</label>
        </div>
        <div className="details-row">
          <span className="detailsName">Advice for this day: </span><label>{props.data.description}</label>
        </div>
        <div className="details-row">
          <span className="detailsName">Your lucky number: </span><label>{props.data.lucky_number}</label>
        </div>
        <div className="details-row">
          <span className="detailsName">Your lucky time: </span><label>{props.data.lucky_time}</label>
        </div>
        <div className="details-row">
          <span className="detailsName">Your mood for this day: </span><label>{props.data.mood}</label>
        </div>
      </div>
    </div>
  );
}
