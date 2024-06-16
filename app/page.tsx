import Form from './components/Form';
import Triangle from './components/Triangle';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Triangle />
      <Form />
    </div>
  );
}
