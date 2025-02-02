import React, { useState } from "react";
import "../assets/styles/components/_destinations.scss";
import MountKenya from "../assets/images/mountKenya.jpg";
import Serengeti from "../assets/images/serengeti.jpg";
import Zanzibar from "../assets/images/zanzibar.webp";
import MaasaiMara from "../assets/images/maasaiMara.jpg";
import Kigali from "../assets/images/kigali.webp";
import MountKilimanjaro from "../assets/images/mountKenya.jpg";
import VictoriaFalls from "../assets/images/victoriaFalls.jpg";
import LakeTanganyika from "../assets/images/lakeTanganyika.jpg";
// import MountKenyaDesc from '../assets/images/mountKenyaDesc.jpg';
// import SerengetiDesc from '../assets/images/serengetiDesc.jpg';
// import ZanzibarDesc from '../assets/images/zanzibarDesc.jpg';
// import MaasaiMaraDesc from '../assets/images/maasaiMaraDesc.jpg';
// import KigaliDesc from '../assets/images/kigaliDesc.jpg';
// import MountKilimanjaroDesc from '../assets/images/mountKilimanjaroDesc.jpg';
// import VictoriaFallsDesc from '../assets/images/victoriaFallsDesc.jpg';
// import LakeTanganyikaDesc from '../assets/images/lakeTanganyikaDesc.jpg';

const Destination = () => {
  const [modalData, setModalData] = useState(null);

  const destinations = [
    {
      image: MountKenya,
      imageDesc: MountKenya,
      alt: "Mount Kenya, Kenya",
      title: "Mount Kenya, Kenya",
      header: "Mount Kenya: Africa's Second Highest Peak",
      description: "Climb to the top of East Africa's towering peak.",
      history: "Mount Kenya is an iconic, dormant volcano and the second highest mountain in Africa. Known for its stunning glaciers and diverse wildlife, it offers adventurous treks through varying climates, from dense forests to alpine meadows. The mountain is sacred to the Kikuyu people, and its peaks have long been a challenge for climbers. The ascent to Batian Peak is especially demanding, attracting those with a passion for high-altitude hiking.",
      byline: "By Yussuf Hassan, Travel Expert",
    },
    {
      image: Serengeti,
      imageDesc: Serengeti,
      alt: "Serengeti, Tanzania",
      title: "Serengeti, Tanzania",
      description: "Witness the Great Migration of wildebeests and zebras.",
      history: "The Serengeti is one of Africa’s most famous wildlife conservation areas. It's renowned for the Great Migration, where over 2 million wildebeest, zebras, and gazelles cross the plains in search of food. Home to the 'Big Five'—lions, elephants, buffaloes, leopards, and rhinos—Serengeti offers a truly immersive safari experience in the heart of Tanzania's wilderness.",
      byline: "By Yussuf Hassan, Travel Expert",
    },
    {
      image: Zanzibar,
      imageDesc: Zanzibar,
      alt: "Zanzibar, Tanzania",
      title: "Zanzibar, Tanzania",
      description: "Explore tropical beaches and rich Swahili culture.",
      history: "Zanzibar, known for its pristine beaches and rich history, is a tropical paradise off the coast of Tanzania. This island has been a hub for spice trade and a cultural crossroads for centuries. Visitors can explore the UNESCO-listed Stone Town, enjoy water sports in the crystal-clear Indian Ocean, or embark on a spice tour to learn about Zanzibar's aromatic legacy.",
      byline: "By Yussuf Hassan, Travel Expert",
    },
    {
      image: MaasaiMara,
      imageDesc: MaasaiMara,
      alt: "Maasai Mara, Kenya",
      title: "Maasai Mara, Kenya",
      description: "Discover the wildlife and cultures of Kenya's renowned reserve.",
      history: "The Maasai Mara is one of Kenya’s most renowned wildlife reserves, famous for its abundance of wildlife and its role in the Great Migration. The Mara is home to a significant population of lions, leopards, and elephants. In addition to safaris, visitors can learn about the Maasai people, who have called this area home for centuries, preserving their rich cultural heritage.",
      byline: "By Yussuf Hassan, Travel Expert",
    },
    {
      image: Kigali,
      imageDesc: Kigali,
      alt: "Kigali, Rwanda",
      title: "Kigali, Rwanda",
      description: "A city of resilience and natural beauty.",
      history: "Kigali, the capital of Rwanda, is known for its cleanliness, vibrant culture, and warm hospitality. The city offers a great base for exploring Rwanda’s stunning landscapes, including the Volcanoes National Park, home to endangered mountain gorillas. Kigali also serves as a symbol of Rwanda's remarkable recovery from its 1994 genocide, with museums like the Kigali Genocide Memorial offering a profound insight into the country’s past.",
      byline: "By Yussuf Hassan, Travel Expert",
    },
    {
      image: MountKilimanjaro,
      imageDesc: MountKilimanjaro,
      alt: "Mount Kilimanjaro, Tanzania",
      title: "Mount Kilimanjaro, Tanzania",
      description: "Trek to the summit of Africa's tallest mountain.",
      history: "Mount Kilimanjaro, standing at 19,341 feet, is the highest mountain in Africa and one of the world’s tallest freestanding mountains. Its snow-capped peak rises above the plains of Tanzania, attracting adventurers and climbers from around the globe. The mountain offers several trekking routes, each providing unique perspectives of the landscape, wildlife, and cultures of East Africa.",
      byline: "By Yussuf Hassan, Travel Expert",
    },
    {
      image: VictoriaFalls,
      imageDesc: VictoriaFalls,
      alt: "Victoria Falls, Zambia/Zimbabwe",
      title: "Victoria Falls, Zambia/Zimbabwe",
      description: "Experience the power and beauty of one of the world’s largest waterfalls.",
      history: "Victoria Falls, known locally as 'The Smoke That Thunders,' is one of the largest and most spectacular waterfalls in the world. It straddles the border between Zambia and Zimbabwe, attracting travelers with its dramatic drop and mist. Visitors can enjoy a variety of activities, including bungee jumping, white-water rafting, and scenic helicopter rides over the falls.",
      byline: "By Yussuf Hassan, Travel Expert",
    },
    {
      image: LakeTanganyika,
      imageDesc: LakeTanganyika,
      alt: "Lake Tanganyika, Tanzania",
      title: "Lake Tanganyika, Tanzania",
      description: "Explore the world’s second-deepest freshwater lake.",
      history: "Lake Tanganyika is one of East Africa's hidden gems, located between Tanzania, Burundi, Democratic Republic of Congo, and Rwanda. It is the second deepest freshwater lake in the world and offers stunning views, crystal-clear waters, and a wealth of biodiversity. The lake is also home to unique species like the Tanganyika sardine, and its shores offer opportunities for diving, fishing, and wildlife spotting.",
      byline: "By Yussuf Hassan, Travel Expert",
    },
  ];

  const openModal = (destination) => {
    setModalData(destination);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <section className="featured-destinations text-center">
      <h1>Adventurous Destinations in East Africa</h1>
      <div className="destinations-grid">
        {destinations.map((destination, index) => (
          <div className="item" key={index}>
            <img src={destination.image} alt={destination.alt} />
            <h4>{destination.title}</h4>
            <p>{destination.description}</p>
            <button onClick={() => openModal(destination)} aria-label={`Learn more about ${destination.title}`}>
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalData && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalData.imageDesc} alt={modalData.alt} />
            <button
              className="close-button"
              onClick={closeModal}
              aria-label="Close modal"
            >
              &times;
            </button>
            <h2>{modalData.header}</h2>
            <p className="byline">{modalData.byline}</p> 
            <p>{modalData.history}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Destination;
