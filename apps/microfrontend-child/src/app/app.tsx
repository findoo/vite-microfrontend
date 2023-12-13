import styles from './app.module.css';

export function App() {
  return (
    <div className={styles.container}>
      Microfrontend Child! <br /> I have a completely separate build process,
      and am deployed independently of the app shell
    </div>
  );
}

export default App;
