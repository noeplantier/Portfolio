import { useState, useEffect } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 1 : 100
      );
    }, 30); // Vitesse du chargement

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.loaderContainer}>
        <div style={styles.loader}>
          <div style={{ ...styles.progressBar, width: `${progress}%` }}></div>
        </div>
        <p style={styles.progressText}>{progress}%</p>
      </div>
      <div style={styles.card}>
        <h2>Noé Plantier</h2>
        <p>Développeur Fullstack</p>
        <p>Bordeaux, France</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #001f3f, #005f7f)',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  loaderContainer: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  loader: {
    width: '500px',
    height: '20px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#00d1ff',
    transition: 'width 0.3s ease',
  },
  progressText: {
    marginTop: '20px',
    fontSize: '20px',
  },
  card: {
    backgroundColor: '#00d1ff',
    padding: '50px',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
};
