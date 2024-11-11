export default function Instructions({ foodInfo }) {
  return (
    <div className="instruction">
      <h3>Instruction:</h3>
      <div>
        <div>
          {foodInfo.analyzedInstructions &&
            foodInfo.analyzedInstructions.length > 0 &&
            foodInfo.analyzedInstructions[0].steps &&
            foodInfo.analyzedInstructions[0].steps.map((step, index) => (
              <div key={index}>
                {step.number} {step.step}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
