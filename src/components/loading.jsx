import styles from "./loading.module.css"
const Loading = ({ color }) => {
    return (
        <span className={styles.loading}>
          <span style={{ backgroundColor: color }} />
          <span style={{ backgroundColor: color }} />
          <span style={{ backgroundColor: color }} />
        </span>
        );
};
export default Loading;