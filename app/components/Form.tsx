'use client';
import { useState } from 'react';
import { triangle } from '../utils/trigonometry';

const Form = () => {
  const [a, set_a] = useState<number | undefined>(undefined);
  const [b, set_b] = useState<number | undefined>(undefined);
  const [c, set_c] = useState<number | undefined>(undefined);
  const [A, setA] = useState<number | undefined>(undefined);
  const [B, setB] = useState<number | undefined>(undefined);
  const [C, setC] = useState<number | undefined>(undefined);

  const inputsUsed = [a, b, c, A, B, C].filter((input) => input! > 0).length;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = triangle({ a, b, c, A, B, C });
    if (inputsUsed !== 3) {
      return;
    }
    setA(Number(result.A.toFixed(2)));
    setB(Number(result.B.toFixed(2)));
    setC(Number(result.C.toFixed(2)));
    set_a(Number(result.a.toFixed(2)));
    set_b(Number(result.b.toFixed(2)));
    set_c(Number(result.c.toFixed(2)));
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        a:
        <input
          onChange={(e) => {
            if (e.target.valueAsNumber) {
              set_a(e.target.valueAsNumber);
            } else {
              set_a(undefined);
            }
          }}
          value={a}
          type="number"
        />
      </label>
      <label>
        b:
        <input
          onChange={(e) => {
            if (e.target.valueAsNumber) {
              set_b(e.target.valueAsNumber);
            } else {
              set_b(undefined);
            }
          }}
          value={b}
          type="number"
        />
      </label>
      <label>
        c:
        <input
          onChange={(e) => {
            if (e.target.valueAsNumber) {
              set_c(e.target.valueAsNumber);
            } else {
              set_c(undefined);
            }
          }}
          value={c}
          type="number"
        />
      </label>
      <label>
        A:
        <input
          onChange={(e) => {
            if (e.target.valueAsNumber) {
              setA(e.target.valueAsNumber);
            } else {
              setA(undefined);
            }
          }}
          value={A}
          type="number"
        />
      </label>
      <label>
        B:
        <input
          onChange={(e) => {
            if (e.target.valueAsNumber) {
              setB(e.target.valueAsNumber);
            } else {
              setB(undefined);
            }
          }}
          value={B}
          type="number"
        />
      </label>
      <label>
        C:
        <input
          onChange={(e) => {
            if (e.target.valueAsNumber) {
              setC(e.target.valueAsNumber);
            } else {
              setC(undefined);
            }
          }}
          value={C}
          type="number"
        />
      </label>
      <button>Submit</button>
      <button
        onClick={() => {
          set_a(undefined);
          set_b(undefined);
          set_c(undefined);
          setA(undefined);
          setB(undefined);
          setC(undefined);
        }}
      >
        Reset
      </button>
    </form>
  );
};
export default Form;
