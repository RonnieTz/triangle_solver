'use client';

import Form from './components/Form';
import Triangle from './components/Triangle';
import styles from './page.module.css';
import { useRef } from 'react';

export default function Home() {
  const A_ref = useRef<HTMLInputElement>(null);
  const B_ref = useRef<HTMLInputElement>(null);
  const C_ref = useRef<HTMLInputElement>(null);
  const a_ref = useRef<HTMLInputElement>(null);
  const b_ref = useRef<HTMLInputElement>(null);
  const c_ref = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.container}>
      <Triangle
        A_ref={A_ref}
        B_ref={B_ref}
        C_ref={C_ref}
        a_ref={a_ref}
        b_ref={b_ref}
        c_ref={c_ref}
      />
      <Form
        A_ref={A_ref}
        B_ref={B_ref}
        C_ref={C_ref}
        a_ref={a_ref}
        b_ref={b_ref}
        c_ref={c_ref}
      />
    </div>
  );
}
