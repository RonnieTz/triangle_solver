const Triangle = () => {
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
        <div className="triangle_text a">a</div>
        <div className="triangle_text b">b</div>
        <div className="triangle_text c">c</div>
        <div className="triangle_text A">A</div>
        <div className="triangle_text B">B</div>
        <div className="triangle_text C">C</div>

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
