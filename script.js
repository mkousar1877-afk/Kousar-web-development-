function checkWatering() {
  const crop = document.getElementById("crop").value;
  const lastWatered = new Date(document.getElementById("lastWatered").value);
  const today = new Date();

  if (isNaN(lastWatered)) {
    document.getElementById("result").textContent = "Please select a valid date.";
    return;
  }

  // Watering intervals in days
  const wateringSchedule = {
    rice: 3,
    wheat: 5,
    cotton: 7
  };

  const daysSinceWatered = Math.floor((today - lastWatered) / (1000 * 60 * 60 * 24));
  const interval = wateringSchedule[crop];

  if (daysSinceWatered >= interval) {
    document.getElementById("result").textContent = `Time to water your ${crop}! It's been ${daysSinceWatered} days.`;
  } else {
    document.getElementById("result").textContent = `Your ${crop} is fine. Next watering in ${interval - daysSinceWatered} days.`;
  }
}