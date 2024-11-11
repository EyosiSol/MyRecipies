import Style from '../Styles/instruction.module.css'
export default function Instructions({ foodInfo }) {
  return (
    <div className={Style.container}>
      <h2>Instruction:</h2>
      <div>
        <div>
          {foodInfo.analyzedInstructions &&
            foodInfo.analyzedInstructions.length > 0 &&
            foodInfo.analyzedInstructions[0].steps &&
            foodInfo.analyzedInstructions[0].steps.map((step, index) => (
              <div key={index}>
                {step.number})    {step.step}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
