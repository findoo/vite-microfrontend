import styles from './app.module.css';

export function App() {
  return (
    <div className={styles.container}>
      <div>Microfrontend Child!</div>
      <div>I am deployed independently of the app shell</div>
    </div>
  );
}

export default App;
