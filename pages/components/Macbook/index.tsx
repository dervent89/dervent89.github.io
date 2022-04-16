import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import styles from './Macbook.module.scss';

const Macbook = () => {
  const [macbookStatus, setMacbookStatus] = useState(false);
  const [macbookOpen, setMacbookOpen] = useState(false);
  const [macbookAnimate, setMacbookAnimate] = useState(false);

  const macbookHandle = () => {
    setTimeout(() => {
      setMacbookOpen(true);
    }, 150);
    setTimeout(() => {
      setMacbookStatus(true);
    }, 250);
    setTimeout(() => {
      setMacbookAnimate(true);
    }, 400);
  };

  useEffect(() => {
    macbookHandle();
  }, []);
  return (
    <div className={styles.macbookWrapper}>
      <div
        className={`
          ${styles.macbook} 
          ${macbookOpen && styles.open}
          ${macbookStatus && styles.showApp}
          ${macbookAnimate && styles.shown}
        `}
      >
        <div className={styles.macbookDisplay}>
          <div className={styles.macbookDisplayInner}>
            <div className={styles.app}>
              <div className={styles.appContent}>
                <div className={styles.appContentItem}>
                  <img src="/home.jpg" alt="Freelancer" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.macbookBody}></div>
        <div className={styles.macbookBodyBottom}></div>
      </div>
      <Link href={'/works'}>
        <a>explore my works</a>
      </Link>
    </div>
  );
};
export default Macbook;
