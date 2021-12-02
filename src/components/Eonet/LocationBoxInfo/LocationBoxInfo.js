import classes from "./LocationBoxInfo.module.css";

const LocationBoxInfo = ({ info }) => {
  return (
    <div className={classes.Info}>
      <h2 className={classes.Title}>Location Info</h2>
      <ul className={classes.List}>
        <li>
          Event Title: <strong>{info.title}</strong>
        </li>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationBoxInfo;
