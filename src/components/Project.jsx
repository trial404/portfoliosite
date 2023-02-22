import styles from "../styles/Project.module.css";

export function Project({ color, id, title, description, media }) {
  return (
    <div className={styles.container}>
      <div className={styles.header} style={{ backgroundColor: color }}>
        <h1>
          {title} : {id}
        </h1>
      </div>
      <div className={styles.contentArea}>
        <div className={styles.contentCol}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className={styles.contentMedia}>
          <img className={styles.media} src={media} alt="" />
        </div>
      </div>
    </div>
  );
}
