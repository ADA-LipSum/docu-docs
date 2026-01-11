import React from "react";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./index.module.css";

import Link from "@docusaurus/Link";
import Snowfall from "react-snowfall";
import type { FC } from "react";

const SnowfallComponent = Snowfall as unknown as FC<any>;

export default function Home() {
  // 스크롤 차단
  // React.useEffect(() => {
  //   document.body.style.overflow = "hidden";
  //   document.body.style.height = "100vh";
  //   return () => {
  //     document.body.style.overflow = "auto";
  //     document.body.style.height = "auto";
  //   };
  // }, []);

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
    <>
      <SnowfallComponent
        snowflakeCount={120}
        color={colorMode === "dark" ? "#fff" : "#cfd8dc"}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

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
        </motion.div>
      </div>
      {/* 팀원 소개 */}
      <section className={styles.teamSection}>
        <h2 className={styles.teamTitle}>팀원 소개</h2>
        <p>좋은 서비스를 만들기 위해 노력하는 팀원들입니다.</p>

        <div className={styles.teamGrid}>
          {[
            {
              name: "김태호",
              imgUrl: "https://avatars.githubusercontent.com/u/108007761?v=4",
              role: "Frontend Developer",
              gitHub: "https://github.com/rlaxogh76",
            },
            {
              name: "박창연",
              imgUrl: "https://avatars.githubusercontent.com/u/140193710?v=4",
              role: "Frontend Developer",
              gitHub: "https://github.com/Qlellow",
            },
            {
              name: "박건형",
              imgUrl: "https://avatars.githubusercontent.com/u/162693556?v=4",
              role: "Frontend Developer",
              gitHub: "https://github.com/rjsgud49",
            },
            {
              name: "이현우",
              imgUrl: "https://avatars.githubusercontent.com/u/214045693?v=4",
              role: "Frontend Developer",
              gitHub: "https://github.com/love09pc",
            },
            {
              name: "송주영",
              imgUrl: "https://avatars.githubusercontent.com/u/162583068?v=4",
              role: "Backend Developer",
              gitHub: "https://github.com/Juyoung0809",
            },
            {
              name: "류지우",
              imgUrl: "https://avatars.githubusercontent.com/u/126925788?v=4",
              role: "Backend Developer",
              gitHub: "https://github.com/Haryu5412Dev",
            },
          ].map((member, idx) => {
            const isBackend = member.role.includes("Backend");
            return (
              <a
                key={idx}
                className={styles.teamLink}
                href={member.gitHub}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  className={`${styles.teamCard} ${
                    isBackend ? styles.backend : ""
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.avatar}>
                    <img src={member.imgUrl} alt={member.name} />
                  </div>

                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                </motion.div>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}
