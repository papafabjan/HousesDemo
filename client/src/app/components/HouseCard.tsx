import React from "react";

interface HouseCardProps {
  name: string;
  animal: string;
  founder: string;
  housecolours: string;
}

const HouseCard: React.FC<HouseCardProps> = ({
  name,
  animal,
  founder,
  housecolours,
}) => {
  const validCSSColorsSet: Set<string> = new Set([
    "black",
    "silver",
    "gray",
    "white",
    "maroon",
    "red",
    "purple",
    "fuchsia",
    "green",
    "lime",
    "olive",
    "yellow",
    "navy",
    "blue",
    "teal",
    "aqua",
  ]);

  const renderGradientBar = (housecolours: string) => {
    let gradientStyle: React.CSSProperties;
    console.log("Hello");
    console.log(housecolours);
    if (housecolours) {
      const colors = housecolours
        .split(" and ")
        .map((color) => color.trim().toLowerCase());
      const color1 = validCSSColorsSet.has(colors[0]) ? colors[0] : "white";
      const color2 = validCSSColorsSet.has(colors[1]) ? colors[1] : "black";
      gradientStyle = {
        background: `linear-gradient(to right, ${color1}, ${color2})`,
        height: "20px",
        marginTop: "12px",
        marginBottom: "12px",
        borderRadius: "3px",
      };
    } else {
      gradientStyle = {
        background: `linear-gradient(to right, black, white)`,
        height: "20px",
        marginTop: "12px",
        marginBottom: "12px",
        borderRadius: "3px",
      };
    }
    return gradientStyle;
  };

  return (
    <div className="w-full md:w-96 rounded-lg overflow-hidden shadow-md bg-white text-black">
      <div className="p-6">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold mr-auto">{name}</h2>
          <p className="text-sm text-black">{animal}</p>
        </div>
        <div className="w-full" style={renderGradientBar(housecolours)}></div>
        <p className="text-sm text-black">
          Founder: <span className="font-bold">{founder}</span>
        </p>
      </div>
    </div>
  );
};

export default HouseCard;
