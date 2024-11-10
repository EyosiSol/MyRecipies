import style from "../Styles/leftDiv.module.css";

export default function LeftContainer({children }) {
  return <div className={style.leftDiv}>{children}</div>;
}
