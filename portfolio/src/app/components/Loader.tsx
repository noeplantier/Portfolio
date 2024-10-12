import { useState, useEffect, CSSProperties } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 1 : 100
      );
    }, 10); // Vitesse du chargement

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
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
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
    marginBottom: '5rem',
  },
  loader: {
    width: '500px',
    height: '20px',
    backgroundColor: '#fff',
    borderRadius: '15px',
    overflow: 'hidden',
  },
  progressBar: {
    height: '80vh',
    backgroundColor: '#00d1ff',
    transition: 'width 0.3s ease',
  },
  progressText: {
    marginTop: '20px',
    fontSize: '20px',
  },
};
