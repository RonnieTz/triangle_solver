'use client';

type Props = {
  A_ref: React.RefObject<HTMLInputElement>;
  B_ref: React.RefObject<HTMLInputElement>;
  C_ref: React.RefObject<HTMLInputElement>;
  a_ref: React.RefObject<HTMLInputElement>;
  b_ref: React.RefObject<HTMLInputElement>;
  c_ref: React.RefObject<HTMLInputElement>;
};

const Triangle = ({ A_ref, B_ref, C_ref, a_ref, b_ref, c_ref }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          height: '320px',
          width: '320px',

          position: 'relative',
        }}
      >
        <div onClick={() => a_ref.current?.focus()} className="triangle_text a">
          a
        </div>
        <div onClick={() => b_ref.current?.focus()} className="triangle_text b">
          b
        </div>
        <div onClick={() => c_ref.current?.focus()} className="triangle_text c">
          c
        </div>
        <div onClick={() => A_ref.current?.focus()} className="triangle_text A">
          A
        </div>
        <div onClick={() => B_ref.current?.focus()} className="triangle_text B">
          B
        </div>
        <div onClick={() => C_ref.current?.focus()} className="triangle_text C">
          C
        </div>

        <svg width={320} height={320}>
          <polygon
            points="90,20 20,300 300,300"
            fill="white"
            stroke="black"
            strokeWidth={5}
          />
        </svg>
      </div>
    </div>
  );
};
export default Triangle;
