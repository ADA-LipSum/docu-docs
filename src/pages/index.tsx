import React from "react";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./index.module.css";

import Link from "@docusaurus/Link";

export default function Home() {
  // 스크롤 차단
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    };
  }, []);

  const fireConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 300,
      origin: { y: 0.6 },
    });
  };

  return (
    <Layout title="ADA Docs" description="ADA 개발 문서 허브">
      <ColorAwareSection fireConfetti={fireConfetti} />
    </Layout>
  );
}

function ColorAwareSection({ fireConfetti }) {
  const { colorMode } = useColorMode();

  return (
    <div className={styles.heroSection}>
      {/* 왼쪽 */}
      <motion.div
        className={styles.leftBox}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <motion.div
          className={styles.verticalLine}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
        />

        <motion.div
          className={styles.textArea}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className={styles.title}>
            ADA 팀원들을 위한
            <p className={styles.highlight}> 개발 문서</p>
          </h1>
        </motion.div>
      </motion.div>

      {/* 오른쪽 */}
      <motion.div
        className={styles.rightBox}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <motion.img
          src={
            colorMode === "dark"
              ? "https://ada-lipsum.github.io/docu-docs/img/logo-dark.svg"
              : "https://ada-lipsum.github.io/docu-docs/img/logo.svg"
          }
          className={styles.heroImage}
          onClick={fireConfetti}
        />

        <p className={styles.logoText}>LipSum</p>
        <Link
          className={`button button--secondary button--lg ${styles.dbButton}`}
          to="/docs/database/db-structure"
        >
          📌 DB 구조 페이지로 바로가기
        </Link>
      </motion.div>
    </div>
  );
}
