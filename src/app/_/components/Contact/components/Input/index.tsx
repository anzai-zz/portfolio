import * as styles from "./styles/index.css";

type Props = {
  type?: string,
  name: string,
  required?: boolean,
  title: string,
  autoComplete?: string,
}

export default function Input({ type, name, required, title, autoComplete }: Props) {

  return (
    <input
      className={styles.input}
      type={type}
      name={name}
      required={required}
      aria-required={required ? "true" : "false"}
      title={title}
      autoComplete={autoComplete}
    />
  );
}