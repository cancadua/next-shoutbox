import React from "react";
import styles from "./modal.module.css";

const Modal = (props: any) => {
    const { closeModal } = props;

    return (
        <div onClick={closeModal} className={styles.overlay}>
            <div onClick={(e) => e.stopPropagation()} className={styles.content}>
                <button onClick={closeModal} className={styles.close}>
                    X
                </button>
                {props.children}
            </div>
        </div>
    );
};

export default Modal