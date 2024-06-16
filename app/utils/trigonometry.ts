export const triangle_3_sides = (
  a: number,
  b: number,
  c: number
): { A: number; B: number; C: number } => {
  // this function will calculate the angles of a triangle given the sides

  const cos_A = (b ** 2 + c ** 2 - a ** 2) / (2 * b * c);
  const cos_B = (c ** 2 + a ** 2 - b ** 2) / (2 * c * a);
  const cos_C = (a ** 2 + b ** 2 - c ** 2) / (2 * a * b);

  const A = Math.acos(cos_A) * (180 / Math.PI);
  const B = Math.acos(cos_B) * (180 / Math.PI);
  const C = Math.acos(cos_C) * (180 / Math.PI);

  return { A, B, C };
};

export const triangle_2_sides_and_angle_between_them = (
  a: number,
  b: number,
  C: number
): { c: number; B: number; A: number } => {
  // this function will calculate the sides and angles of a triangle given the two sides and the angle between them is given

  const c = Math.sqrt(
    a ** 2 + b ** 2 - 2 * a * b * Math.cos(C * (Math.PI / 180))
  );

  const cos_B = (a ** 2 + c ** 2 - b ** 2) / (2 * a * c);
  const cos_A = (b ** 2 + c ** 2 - a ** 2) / (2 * b * c);

  const B = Math.acos(cos_B) * (180 / Math.PI);
  const A = Math.acos(cos_A) * (180 / Math.PI);

  return { c, B, A };
};

export const triangle_2_sides_and_opposite_angle = (
  a: number,
  b: number,
  A: number
): { c: number; B: number; C: number } => {
  // this function will calculate the sides and angles of a triangle given the two sides and the opposite angle

  const sin_B = (Math.sin(A * (Math.PI / 180)) * b) / a;
  const B = Math.asin(sin_B) * (180 / Math.PI);
  const C = 180 - A - B;

  const c = Math.sqrt(
    a ** 2 + b ** 2 - 2 * a * b * Math.cos(C * (Math.PI / 180))
  );

  return { c, B, C };
};

export const triangle_2_angles_and_1_side_between_them = (
  A: number,
  B: number,
  c: number
): { a: number; b: number; C: number } => {
  // this function will calculate the sides and angles of a triangle given the two angles and the side between them
  const C = 180 - A - B;

  const a = (c / Math.sin(C * (Math.PI / 180))) * Math.sin(A * (Math.PI / 180));
  const b = (c / Math.sin(C * (Math.PI / 180))) * Math.sin(B * (Math.PI / 180));

  return { a, b, C };
};

export const triangle_2_angles_and_1_opposite_side = (
  A: number,
  B: number,
  a: number
) => {
  // this function will calculate the sides and angles of a triangle given the two angles and the opposite side

  const C = 180 - A - B;

  const b = (a / Math.sin(A * (Math.PI / 180))) * Math.sin(B * (Math.PI / 180));
  const c = (a / Math.sin(A * (Math.PI / 180))) * Math.sin(C * (Math.PI / 180));

  return { b, c, C };
};
type Triangle = {
  a: number | undefined;
  b: number | undefined;
  c: number | undefined;
  A: number | undefined;
  B: number | undefined;
  C: number | undefined;
};
export const triangle = ({
  a,
  b,
  c,
  A,
  B,
  C,
}: Triangle): {
  a: number;
  b: number;
  c: number;
  A: number;
  B: number;
  C: number;
} => {
  // this function will call the appropriate function based on the arguments given

  if (a && b && c) {
    return { ...triangle_3_sides(a, b, c), a, b, c };
  }
  if (a && b && A) {
    return {
      ...triangle_2_sides_and_opposite_angle(a, b, A),
      a,
      b,
      A,
    };
  }
  if (a && b && B) {
    const { c: _c, B: _C, C } = triangle_2_sides_and_opposite_angle(b, a, B);
    return { a, b, c: _c, A: _C, B, C };
  }
  if (a && b && C) {
    const { A, B, c } = triangle_2_sides_and_angle_between_them(a, b, C);
    return { a, b, c, A, B, C };
  }
  if (a && c && A) {
    const {
      c: _b,
      B: _C,
      C: _B,
    } = triangle_2_sides_and_opposite_angle(a, c, A);

    return { a, b: _b, c, A, B: _B, C: _C };
  }
  if (a && c && B) {
    const {
      c: _b,
      B: _C,
      A: _B,
    } = triangle_2_sides_and_angle_between_them(a, c, B);

    return { a, b: _b, c, A: _B, B, C: _C };
  }
  if (a && c && C) {
    const {
      c: _b,
      B: _A,
      C: _B,
    } = triangle_2_sides_and_opposite_angle(c, a, C);

    return { a, b: _b, c, A: _A, B: _B, C };
  }
  if (b && c && A) {
    const {
      B: _C,
      A: _B,
      c: _a,
    } = triangle_2_sides_and_angle_between_them(b, c, A);
    return { a: _a, b, c, A, B: _B, C: _C };
  }
  if (b && c && B) {
    const {
      C: _A,
      B: _C,
      c: _a,
    } = triangle_2_sides_and_opposite_angle(b, c, B);
    return { a: _a, b, c, B, A: _A, C: _C };
  }
  if (b && c && C) {
    const { B, C: _A, c: _a } = triangle_2_sides_and_opposite_angle(c, b, C);
    return { a: _a, b, c, A: _A, B, C };
  }
  if (a && A && B) {
    const { b, c, C } = triangle_2_angles_and_1_opposite_side(A, B, a);
    return { a, b, c, A, B, C };
  }
  if (a && A && C) {
    const {
      C: _B,
      b: _c,
      c: _b,
    } = triangle_2_angles_and_1_opposite_side(A, C, a);
    return { a, b: _b, c: _c, A, B: _B, C };
  }
  if (a && B && C) {
    const {
      b: _c,
      C: _A,
      a: _b,
    } = triangle_2_angles_and_1_side_between_them(B, C, a);
    return { a, b: _b, c: _c, A: _A, B, C };
  }
  if (b && A && B) {
    const { C, b: _a, c } = triangle_2_angles_and_1_opposite_side(B, A, b);
    return { a: _a, b, c, A, B, C };
  }
  if (b && A && C) {
    const {
      C: _B,
      a: _c,
      b: _a,
    } = triangle_2_angles_and_1_side_between_them(A, C, b);
    return { a: _c, b, c: _a, A, B: _B, C };
  }
  if (b && B && C) {
    const {
      b: _c,
      c: _a,
      C: _A,
    } = triangle_2_angles_and_1_opposite_side(B, C, b);
    return { a: _a, b, c: _c, A: _A, B, C };
  }
  if (c && A && B) {
    const { C, a, b } = triangle_2_angles_and_1_side_between_them(A, B, c);
    return { a, b, c, A, B, C };
  }
  if (c && A && C) {
    const {
      C: _B,
      b: _a,
      c: _b,
    } = triangle_2_angles_and_1_opposite_side(C, A, c);

    return { a: _a, b: _b, c, A, B: _B, C };
  }
  if (c && B && C) {
    const { b, c: _a, C: _A } = triangle_2_angles_and_1_opposite_side(C, B, c);

    return { a: _a, b, c, A: _A, B, C };
  }
  if (A && B && C) {
    return { a: 0, b: 0, c: 0, A, B, C };
  }
  return { a: 0, b: 0, c: 0, A: 0, B: 0, C: 0 };
};
