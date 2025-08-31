import React from 'react';
import styles from './HeroText.module.css';

const HeroText = () => {
    return (
        <div className={styles.heroContainer}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 992.2 531.26"
                className={styles.heroSvg}
            >
                {/* 3D Depth Shadows for ACM Letters */}
                <polygon
                    className={styles.depthShadow}
                    points="142.14 281.98 313.5 115.2 313.5 415.9 245.82 415.9 168.06 336.7 90.3 415.9 13.98 415.9 129.18 299.26 209.82 299.26 260.22 349.66 260.22 245.98 222.78 281.98 142.14 281.98"
                />
                <polygon
                    className={styles.depthShadow}
                    points="343.64 415.9 343.64 148.06 381.08 110.62 646.04 110.62 587 176.86 509.24 176.86 517.88 165.34 401.52 165.34 401.52 362.62 597.08 362.62 646.04 415.9 343.64 415.9"
                />
                <polygon
                    className={styles.depthShadow}
                    points="820.27 363.71 771.07 415.9 692.04 415.9 692.04 107.26 839.82 251.89 839.82 329.42 744.52 244.43 744.52 363.71 820.27 363.71"
                />
                <polygon
                    className={styles.depthShadow}
                    points="854.56 251.89 854.56 329.42 944.02 242.94 944.02 360.73 867.98 360.73 921.66 415.9 997.7 415.9 997.7 101.3 854.56 251.89"
                />

                {/* ACM Letters - Drawing paths */}
                <polygon
                    className={styles.drawPath}
                    points="134.14 273.98 305.5 107.2 305.5 407.9 237.82 407.9 160.06 328.7 82.3 407.9 5.98 407.9 121.18 291.26 201.82 291.26 252.22 341.66 252.22 237.98 214.78 273.98 134.14 273.98"
                />
                <polygon
                    className={styles.drawPath}
                    points="335.64 407.9 335.64 140.06 373.08 102.62 638.04 102.62 579 168.86 501.24 168.86 509.88 157.34 393.52 157.34 393.52 354.62 589.08 354.62 638.04 407.9 335.64 407.9"
                />
                <polygon
                    className={styles.drawPath}
                    points="812.27 355.71 763.07 407.9 684.04 407.9 684.04 99.26 831.82 243.89 831.82 321.42 736.52 236.43 736.52 355.71 812.27 355.71"
                />
                <polygon
                    className={styles.drawPath}
                    points="846.56 243.89 846.56 321.42 936.02 234.94 936.02 352.73 859.98 352.73 913.66 407.9 989.7 407.9 989.7 93.3 846.56 243.89"
                />

                {/* Fill paths with 3D effects */}
                <polygon
                    className={styles.fillPath}
                    points="134.14 273.98 305.5 107.2 305.5 407.9 237.82 407.9 160.06 328.7 82.3 407.9 5.98 407.9 121.18 291.26 201.82 291.26 252.22 341.66 252.22 237.98 214.78 273.98 134.14 273.98"
                />
                <polygon
                    className={styles.fillPath}
                    points="335.64 407.9 335.64 140.06 373.08 102.62 638.04 102.62 579 168.86 501.24 168.86 509.88 157.34 393.52 157.34 393.52 354.62 589.08 354.62 638.04 407.9 335.64 407.9"
                />
                <polygon
                    className={styles.fillPath}
                    points="812.27 355.71 763.07 407.9 684.04 407.9 684.04 99.26 831.82 243.89 831.82 321.42 736.52 236.43 736.52 355.71 812.27 355.71"
                />
                <polygon
                    className={styles.fillPath}
                    points="846.56 243.89 846.56 321.42 936.02 234.94 936.02 352.73 859.98 352.73 913.66 407.9 989.7 407.9 989.7 93.3 846.56 243.89"
                />

                {/* CCET Text */}
                <text className={`${styles.baseText} ${styles.typingCcet}`} transform="translate(406.43 78.45) scale(1.04 1)">
                    <tspan x="0" y="0">C</tspan>
                    <tspan x="58.42" y="0">C</tspan>
                    <tspan x="117.73" y="0">E</tspan>
                    <tspan x="177.78" y="0">T</tspan>
                </text>

                {/* Student Chapter Text */}
                <text className={`${styles.baseText} ${styles.typingChapter}`} transform="translate(139.61 505.41) scale(1.04 1)">
                    <tspan x="0" y="0">S</tspan>
                    <tspan x="54" y="0">t</tspan>
                    <tspan x="90" y="0">u</tspan>
                    <tspan x="144" y="0">d</tspan>
                    <tspan x="198" y="0">e</tspan>
                    <tspan x="252" y="0">n</tspan>
                    <tspan x="306" y="0">t</tspan>
                    <tspan x="342" y="0"> </tspan>
                    <tspan x="378" y="0">C</tspan>
                    <tspan x="432" y="0">h</tspan>
                    <tspan x="486" y="0">a</tspan>
                    <tspan x="540" y="0">p</tspan>
                    <tspan x="594" y="0">t</tspan>
                    <tspan x="630" y="0">e</tspan>
                    <tspan x="684" y="0">r</tspan>
                </text>

                {/* INNOVATION */}
                <text className={`${styles.baseText} ${styles.sideWord} ${styles.innovation} ${styles.completionEffect}`} transform="translate(55.86 335.07) rotate(-45.68) scale(1.04 1)">
                    <tspan x="0" y="0">I</tspan>
                    <tspan x="10" y="0">N</tspan>
                    <tspan x="27" y="0">N</tspan>
                    <tspan x="44" y="0">O</tspan>
                    <tspan x="65" y="0">V</tspan>
                    <tspan x="83" y="0">A</tspan>
                    <tspan x="104" y="0">T</tspan>
                    <tspan x="120" y="0">I</tspan>
                    <tspan x="130" y="0">O</tspan>
                    <tspan x="151" y="0">N</tspan>
                </text>

                {/* TECHNOLOGY */}
                <text className={`${styles.baseText} ${styles.sideWord} ${styles.technology} ${styles.completionEffect}`} transform="translate(400.88 343.31) rotate(.04) scale(1.04 1)">
                    <tspan x="0" y="0">T</tspan>
                    <tspan x="16" y="0">E</tspan>
                    <tspan x="36" y="0">C</tspan>
                    <tspan x="56" y="0">H</tspan>
                    <tspan x="78" y="0">N</tspan>
                    <tspan x="100" y="0">O</tspan>
                    <tspan x="121" y="0">L</tspan>
                    <tspan x="138" y="0">O</tspan>
                    <tspan x="159" y="0">G</tspan>
                    <tspan x="181" y="0">Y</tspan>
                </text>

                {/* EXCELLENCE */}
                <text className={`${styles.baseText} ${styles.sideWord} ${styles.excellence} ${styles.completionEffect}`} transform="translate(837.03 228.02) rotate(-45.68) scale(1.04 1)">
                    <tspan x="0" y="0">E</tspan>
                    <tspan x="19" y="0">X</tspan>
                    <tspan x="37" y="0">C</tspan>
                    <tspan x="57" y="0">E</tspan>
                    <tspan x="77" y="0">L</tspan>
                    <tspan x="94" y="0">L</tspan>
                    <tspan x="111" y="0">E</tspan>
                    <tspan x="131" y="0">N</tspan>
                    <tspan x="156" y="0">C</tspan>
                    <tspan x="175" y="0">E</tspan>
                </text>
            </svg>
        </div>
    );
};

export default HeroText;