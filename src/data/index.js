import { v4 as uuid } from "uuid";

/* =========>>  Handel teamData  <<=======  */

export const teamData = [
  {
    id: 1,
    name: "Khalid Azzam",
    deccription: "IOS Developer",
    imageURL: require("../assests/teams/Khalid Azzam.jpg"),
  },
  {
    id: 2,
    name: "Mohamed Elsayed",
    deccription: "Front-End Developer",
    imageURL: require("../assests/teams/1111.jpg"),
  },
  {
    id: 3,
    name: "Mohamed Fayed",
    deccription: "Back-End Developer",
    imageURL: require("../assests/teams/Mohamed Fayed.jpg"),
  },
  {
    id: 4,
    name: "Mahmoud Elghounimy",
    deccription: "AI Developer",
    imageURL: require("../assests/teams/Mahmoud Elghounimy.jpg"),
  },
];

/* =========>>  Handel comeSoonCar  <<=======  */

export const comeSoonCar = [
  {
    id: uuid(),
    imageCar: require("../assests/Cars/golf.png"),
  },
  {
    id: uuid(),
    imageCar: require("../assests/Cars/golf.png"),
  },
  {
    id: uuid(),
    imageCar: require("../assests/Cars/golf.png"),
  },
  {
    id: uuid(),
    imageCar: require("../assests/Cars/golf.png"),
  },
  {
    id: uuid(),
    imageCar: require("../assests/Cars/golf.png"),
  },
];

/* =========>>  Handel aboutData  <<=======  */

export const aboutData = [
  {
    id: uuid(),
    textInfo:
      "Our team of automotive experts, engineers, and data scientists harness the power of cutting-edge technology, including AI, machine learning, and predictive analytics, to deliver advanced diagnostic capabilities and predictive maintenance solutions. We understand the importance of reliable transportation and strive to empower our customers with the knowledge and tools they need to keep their vehicles running smoothly and safely.",
  },
  {
    id: uuid(),
    textInfo:
      "But we're more than just a technology company; we're a community of car enthusiasts, mechanics, and experts who share a common goal: to make car ownership a hassle-free and enjoyable experience. Through our platform, users can access a wealth of educational resources, connect with like-minded individuals, and receive personalized support and guidance from our team of experts.",
  },
  {
    id: uuid(),
    textInfo:
      "At CAR-X , we're dedicated to providing unparalleled service, innovative solutions, and exceptional customer experiences. Whether you're a seasoned car enthusiast or a first-time vehicle owner, you can trust us to be your reliable partner on the road ahead.Welcome to CAR-X where automotive excellence meets technological innovation!"
  },
];

/* =========>>  Handel supportCarData  <<=======  */

export const supportCarData = [
  {
    id: uuid(),
    name: "GOLF",
    title:
      "",
    suportImage: require("../assests/Cars/golf.png"),
  },
  {
    id: uuid(),
    name: "verna",
    title:
      "",
    suportImage: require("../assests/Cars/Hyundai-Verna-PNG-Isolated-Photo.png"),
  },

  {
    id: uuid(),
    name: "cerato",
    title:
      "",
    suportImage: require("../assests/Cars/kia-20.png"),
  },
];

/* =========>>  Handel UnknownSymbols  <<=======  */
/*
id
image
title
decriptionOne
decriptiontwo
*/

export const UnknownSymbols = [
  {
    id: uuid(),
    image: require("../assests/CarSymbols/ABS-light.png"),
    title: "Anti-lock Braking System",
    decriptionOne:
      "When you brake hard, like on slick roads, the ABS pulses the brakes to prevent your wheels from locking up. If the ABS warning light is illuminated, it means that something is wrong with the system.",
    decriptiontwo:
      "Since this is such an important safety feature, it’s important to have a mechanic diagnose the issue as soon as possible.",
  },
  {
    id: uuid(),
    image: require("../assests/CarSymbols/check-engine-light.png"),
    title: "Engine Warning Light",
    decriptionOne:
      "Your check engine light may appear for a variety of reasons. Sometimes it is triggered by an open, loose or cracked gas cap, which causes fuel to evaporate. But sometimes it indicates a serious issue, like low oil pressure or overheating!.",
    decriptiontwo:
      "Since this is such an important safety feature, it’s important to have a mechanic diagnose the issue as soon as possible.",
  },
  {
    id: uuid(),
    image: require("../assests/CarSymbols/lane-departure.png"),
    title: "Traction Control Light",
    decriptionOne:
      "This car symbol indicates that your vehicle’s traction control system is activated. The traction control system uses your anti-lock brake system (ABS) to determine if one wheel is spinning faster than the others. If it detects that a wheel is slipping, it applies the brakes until the car regains traction. This is most helpful if you’re driving in rain or snow.",
    decriptiontwo: "Continue driving, but be aware of slippery conditions",
  },
  {
    id: uuid(),
    image: require("../assests/CarSymbols/low-fuel.png"),
    title: "Low Fuel Indicator Light",
    decriptionOne:
      "You’re likely familiar with this dashboard light (maybe a little too familiar!). It simply means your vehicle is running low on fuel.",
    decriptiontwo:
      "If you still have a ways to go, don’t push your luck! You never know how weather or traffic patterns will play out, so it’s best to stop at the nearest gas station and fill up.",
  },
  {
    id: uuid(),
    image: require("../assests/CarSymbols/security-indicator.png"),
    title: "Security Indicator Light",
    decriptionOne:
      "If your vehicle has an anti-theft system, then this symbol will blink steadily when the security system is armed. If it is solid and the car will not start, then the immobilization system has activated due to a security threat or malfunction. If it is solid and the car is running normally, then the security system is malfunctioning and needs to be fixed.",
    decriptiontwo:
      "If the vehicle is immobilized, follow your vehicle’s guidelines for how to deactivate the security system. If it’s a malfunction, your security system will not work correctly until you have it repaired.",
  },
  {
    id: uuid(),
    image: require("../assests/CarSymbols/tire-pressure-light.png"),
    title: "Tire Pressure Warning Light",
    decriptionOne:
      "Also known as the Tire Pressure Monitoring System (TPMS) symbol, this image signals an issue with your tire pressure or the TPMS. f the TPMS symbol is solid, then the pressure in one or more of your tires is too low or too high. If the TPMS symbol flashes for 60-90 seconds when you turn on your vehicle and then stays illuminated, even if your tires are properly inflated, then something is wrong with your TPMS sensors.",
    decriptiontwo:
      "Driving on low- or high-pressure tires is unsafe and can cause damage to your tires. We recommend stopping as soon as possible to inflate or deflate your tires to the correct pressure. If your light turns on when you’re near a Virginia Tire & Auto, drop on by! We have free air available at all our stores, or one of our team members can repair or replace your tire in no time.",
  },
  {
    id: uuid(),
    image: require("../assests/CarSymbols/traction-control.png"),
    title: "Traction Control Light",
    decriptionOne:
      "This car symbol indicates that your vehicle’s traction control system is activated. The traction control system uses your anti-lock brake system (ABS) to determine if one wheel is spinning faster than the others. If it detects that a wheel is slipping, it applies the brakes until the car regains traction. This is most helpful if you’re driving in rain or snow.",
    decriptiontwo: "Continue driving, but be aware of slippery conditions.",
  },
  {
    id: uuid(),
    image: require("../assests/CarSymbols/traction-control-malfunction.png"),
    title: "Traction Control Malfunction Light",
    decriptionOne:
      "This light indicates that your vehicle’s traction control system might have a broken or damaged sensor or some other malfunction.  In some cars, the same control module operates the ABS and the traction control system, so sometimes this dashboard light comes on when there are problems with your ABS.",
    decriptiontwo:
      "While this won’t affect your everyday driving, you should get it checked soon to make sure your vehicle will operate safely in inclement conditions.",
  },
  {
    id: uuid(),
    image: require("../assests/CarSymbols/washer-fluid.png"),
    title: "Washer Fluid Indicator Light",
    decriptionOne:
      "Imitating the motion of your windshield wipers, this dashboard symbol means that you’re low on windshield washer fluid..",
    decriptiontwo: "Fill up the reservoir with fluid as soon as you can.",
  },
  {
    id: uuid(),
    image: require("../assests/CarSymbols/airbag-indicator.png"),
    title: "Airbag Indicator Light",
    decriptionOne:
      "The airbag warning light signals that something is wrong with one of your airbags or the entire airbag system.",
    decriptiontwo:
      "You should get your car checked out immediately! Your car’s airbags keep you safe during accidents, so it’s important to make sure they are working properly.",
  },
  {
    id: uuid(),
    image: require("../assests/CarSymbols/check-engine-light.png"),
    title: "Engine Warning Light",
    decriptionOne:
      "Your check engine light may appear for a variety of reasons. Sometimes it is triggered by an open, loose or cracked gas cap, which causes fuel to evaporate. But sometimes it indicates a serious issue, like low oil pressure or overheating!.",
    decriptiontwo:
      "Since this is such an important safety feature, it’s important to have a mechanic diagnose the issue as soon as possible.",
  },
  {
    id: uuid(),
    image: require("../assests/CarSymbols/battery-alert.png"),
    title: "Battery Alert Light",
    decriptionOne:
      "This light signifies a problem with the vehicle’s charging system. Possible culprits include a loose or damaged battery cable, a bad alternator, or another electrical fault. You may notice your clock light fading or your headlights dimming. Or, in some cases, your car may not start at all.",
    decriptiontwo:
      "Our experts can help diagnose any battery-related or electrical issues, and if you need a new battery, we offer America’s No. 1 battery replacement—Interstate Batteries. Don’t wait too long to get it checked out or you may have to jump-start your car to get it to the shop!",
  },
  {
    id: uuid(),
    image: require("../assests/CarSymbols/brake-warning.png"),
    title: "Brake Warning Light",
    decriptionOne:
      "If you see this symbol on your dashboard or the word “BRAKE” in red, then either the parking brake is engaged or there’s a problem with your braking system.",
    decriptiontwo:
      "First, stop and check to see if your parking brake is engaged. Try setting and releasing the brake while your vehicle is in park. If the light is still on even when the parking brake is unengaged, have your car towed to the nearest Virginia Tire & Auto for service.",
  },
  {
    id: uuid(),
    image: require("../assests/CarSymbols/engine-temperature.png"),
    title: "Engine Temperature Warning Light",
    decriptionOne:
      "If you see this symbol pop up, it means that your engine is overheating. This most likely has to do with your coolant (also called antifreeze), but it can happen for a variety of reasons.",
    decriptiontwo:
      "First, try turning off the A/C and turning the heater on to redistribute heat to the passenger compartment. If that doesn’t work after a couple of minutes, pull over as soon as it is safe and turn off the vehicle. Allow the engine to cool for at least 15 minutes, and do not pop the hood! Opening the hood while the engine is hot could result in burns/injuries from spewing steam or smoke.",
  },
  {
    id: uuid(),
    image: require("../assests/CarSymbols/oil-pressure-light.png"),
    title: "Oil Pressure Warning Light",
    decriptionOne:
      "This old-fashioned oil can symbol indicates that there is an issue with your car’s oil pressure system. Either you’re running low on oil or your oil pump isn’t circulating enough fluid to properly lubricate the surfaces inside your engine. (NOTE: Some car dashboards will display the word “OIL” instead of this symbol.)",
    decriptiontwo:
      "Poor engine lubrication can cause major engine damage, so this is an important warning to pay attention to! Pull over as soon as it is safe, turn off the vehicle, and check the oil! Look around the engine bay for obvious oil leaks, and then pull out the oil dipstick to check the fluid level.",
  },
  {
    id: uuid(),
    image: require("../assests/CarSymbols/seat-belt.png"),
    title: "Seat Belt Reminder Light",
    decriptionOne:
      "This car light simply reminds you or your passenger to fasten your seatbelts. It is usually accompanied by a repetitive dinging noise.",
    decriptiontwo:
      "Buckle up! According to the CDC, seat belts decrease serious crash-related injuries by about 50%",
  },
  {
    id: uuid(),
    image: require("../assests/CarSymbols/fog-lamp.png"),
    title: "Fog Lamp Indicator Light",
    decriptionOne: "This symbol shows that your fog lights are on.",
    decriptiontwo:
      "Fog lights should only be used if your visibility is less than 100 yards. If you turn them on unnecessarily, they can make it difficult for other drivers on the road to see.",
  },
  {
    id: uuid(),
    image: require("../assests/CarSymbols/shift-lock.png"),
    title: "Automatic Shift Lock or Engine Start Indicator Light",
    decriptionOne:
      "If you see this dashboard symbol, you’re most likely trying to shift gears or start your ignition without engaging the brake. The automatic shift lock will lock your vehicle in park or neutral until you engage the brake.",
    decriptiontwo:
      "Press the brake pedal, then shift gears or start the ignition, whichever you are wanting to do.",
  },
];


/* =========>>  Handel  Our Serves  <<=======  */

export const Serves = [
  {
    id: uuid(),
    image: require("../assests/icons/icons8-artificial-intelligence-100.png"),
    title: "Advanced Diagnosis",
    decription:
      "Our AI-powered diagnostic engine analyzes input data from users, including symptoms, diagnostic codes, and vehicle history,to provide accurate and timely diagnoses of potential car problems.",
  },

  {
    id: uuid(),
    image: require("../assests/icons/icons8-services-100.png"),
    title: "Predictive Maintenance",
    decription:
      "By leveraging machine learning algorithms, our platform can predict future maintenance needs based on historical data and usage patterns helping users proactively address issues before  escalate.",
  },

  {
    id: uuid(),
    image: require("../assests/icons/icons8-note-50.png"),
    title: "Expert Recommendations",
    decription:
      "In addition to automated diagnoses, our platform offers expert recommendations and advice based on industry best practices and real-world experience , providing users with actionable.",
  },

  {
    id: uuid(),
    image: require("../assests/icons/icons8-web-50.png"),
    title: "User-Friendly Interface",
    decription:
      "With a sleek and intuitive user interface, our web application makes it easy for users to input relevant information, view diagnostic results, and access additional resources and support.",
  },

  {
    id: uuid(),
    image: require("../assests/icons/icons8-community-50 (1).png"),
    title: "Community Engagement",
    decription:
      "Users can connect with a vibrant community of car enthusiasts, mechanics, and experts to share insights, ask questions, and collaborate on troubleshooting and maintenance tasks.",
  },

  {
    id: uuid(),
    image: require("../assests/icons/icons8-iphone-14-50.png"),
    title: "Mobile Compatibility",
    decription:
      "With responsive design, our web application is accessible from any device, including smartphones and tablets, ensuring users can access critical information on the go.",
  },
];

