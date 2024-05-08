type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// const Top: AllType = {
//   name: "Mike",
//   position: 1,
//   color: "blue",
//   weight: 75,
// };

// const Bottom: AllType = {
//   name: "Lisa",
//   position: 2,
//   color: "black",
//   weight: 55,
// };
