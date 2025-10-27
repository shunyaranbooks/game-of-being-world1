import React from 'react';
import SaveButton from './components/SaveButton';
import './styles.css';

export default function App() {
  return (
    <main>
      <h1>Game of Being — World I</h1>
      <p className="lead">
        Vite + React is live. Press <strong>Save</strong> (inhale&nbsp;1 • exhale&nbsp;2) to continue.
      </p>
      <SaveButton onSaved={() => console.log('Checkpoint set.')} />
    </main>
  );
}
