import { PieChart, Pie, Tooltip } from "recharts";

function Grafic() {
  const data = [
    { name: "Estudo", time: 50, fill: "red" },
    { name: "Trabalho", time: 15, fill: "purple" },
    { name: "Saude", time: 35, fill: "blue" },
    { name: "Lazer", time: 5, fill: "pink" },
  ];
  return (
    <PieChart width={600} height={500}>
      <Pie
        dataKey="time"
        isAnimationActive={true}
        data={data}
        cx={200}
        cy={200}
        outerRadius={200}
        fill="fill"
        label
      />
      <Tooltip />
    </PieChart>
  );
}

export default Grafic;
