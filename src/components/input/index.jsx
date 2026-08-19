import styles from "./styles.module.css";

export default function Input(props) {
  return (
    <>
      <div className={styles.passwordSize}>
        <label htmlFor="passwordSize">Tamanho</label>

        <input
          className={styles.inputPassword}
          type="number"
          name="passwordSize"
          min={1}
          max={14}
          value={props.passWordSize}
          onChange={(e) => props.setPassWordSize(+e.target.value)}
        />
      </div>
    </>
  );
}