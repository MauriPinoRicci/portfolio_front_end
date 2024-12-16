"use client"

import { useState, useEffect } from 'react';
import styles from './CircleProgressBar.module.css';

interface CircleProgressBarProps {
  percent: number;
  strokeWidth?: number;
  color: string;
}

const CircleProgressBar = ({ percent, strokeWidth = 10, color }: CircleProgressBarProps) => {
  const [offset, setOffset] = useState(0);
  const [circumference, setCircumference] = useState(0);
  const radius = 50 - strokeWidth / 2;

  useEffect(() => {
    const newCircumference = 2 * Math.PI * radius;
    setCircumference(newCircumference);
    setOffset((percent / 100) * circumference);
  }, [percent, radius, circumference]);

  return (
    <svg id="Skills" className={styles.progress} width="100" height="100">
      <circle className={styles.background} style={{stroke: color}} cx="50" cy="50" r={radius} strokeWidth={strokeWidth} />
      <circle
        className={styles.foreground}
        cx="50"
        cy="50"
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
      <text className={styles.text} x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
        {percent}%
      </text>
    </svg>
  );
};

export {CircleProgressBar}
