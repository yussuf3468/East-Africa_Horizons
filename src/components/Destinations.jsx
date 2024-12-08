import React, { useState } from "react";
import "../assets/styles/components/_destinations.scss";
import Paris from "../assets/images/paris.jpg";
import Tokyo from "../assets/images/Tokyo.avif";
import NewYork from "../assets/images/New-York.jpg";
import Sydney from "../assets/images/Sydney.jpg";
import Istanbul from "../assets/images/istanbul.jpg";
import Dubai from "../assets/images/Dubai.jpeg";
import CapeTown from "../assets/images/Cape-Town.jpg.webp";
import Bali from "../assets/images/Bali.jpg";
import ParisDisc from '../assets/images/parisDesc.jpg'
import TokyoDisc from '../assets/images/tokyoDesc.jpg'
import NewYorkDisc from '../assets/images/NewYorkDesc.jpg'
import SydneyDisc from '../assets/images/SydneyDesc.jpg'
import IstanbulDisc from '../assets/images/istanbulDesc.jpeg'
import DubaiDisc from '../assets/images/DubaiDesc.jpeg'
import CapeTownDisc from '../assets/images/CapeTownDesc.jpeg'
import BaliDisc from '../assets/images/BaliDesc.jpeg'


const Destination = () => {
  const [modalData, setModalData] = useState(null);

  const destinations = [
    {
      image: Paris,
      imageDesc: ParisDisc,
      alt: "Paris, France",
      title: "Paris, France",
      header: "Paris: The City of Lights and Love",
      description: "The city of lights, art, and romance awaits.",
      history: "Known as 'The City of Light,' Paris is the epitome of romance, art, and culture. This iconic city is home to famous landmarks like the Eiffel Tower, the Louvre Museum, and the Champs-Élysées. Paris has witnessed historical moments like the French Revolution, the Napoleonic Era, and the Renaissance, shaping it into a cultural beacon. Visitors can admire its Gothic architecture at Notre-Dame, indulge in fine cuisine, or take a scenic cruise along the Seine River. Its vibrant atmosphere and centuries of history make Paris a timeless destination.",
      byline: "By Yussuf Hassan, Travel Expert",
    },
    {
      image: Tokyo,
      imageDesc: TokyoDisc, // Placeholder for imageDesc
      alt: "Tokyo, Japan",
      title: "Tokyo, Japan",
      description: "Experience the blend of traditional and futuristic Japan.",
      history: "Tokyo, once known as Edo, became the capital of Japan in 1868 during the Meiji Restoration. The city is a symbol of resilience, rebuilding itself after the Great Kanto Earthquake of 1923 and the devastation of World War II. Today, Tokyo stands as a dazzling metropolis that seamlessly blends traditional temples like Senso-ji with futuristic skyscrapers in Shinjuku and Shibuya. Visitors can explore the historic Imperial Palace, enjoy the blooming cherry blossoms, or immerse themselves in the vibrant culture of Akihabara. Tokyo is a city where the past and future coexist harmoniously.",
      byline: "By Yussuf Hassan, Travel Expert",
    },
    {
      image: NewYork,
      imageDesc: NewYorkDisc, // Placeholder for imageDesc
      alt: "New York, USA",
      title: "New York, USA",
      description: "Explore the iconic landmarks of the Big Apple.",
      history: "New York City, originally founded as New Amsterdam by Dutch settlers in 1624, has grown into a global cultural and economic powerhouse. The city's skyline is defined by landmarks such as the Statue of Liberty, Empire State Building, and One World Trade Center. New York has been a melting pot of cultures, welcoming immigrants through Ellis Island and shaping American history during pivotal events like 9/11. From the bustling streets of Times Square to the tranquility of Central Park, NYC offers endless attractions. Its diverse neighborhoods and vibrant arts scene make it an unparalleled urban experience.",
      byline: "By Yussuf Hassan, Travel Expert",
    },
    {
      image: Sydney,
      imageDesc: SydneyDisc, // Placeholder for imageDesc
      alt: "Sydney, Australia",
      title: "Sydney, Australia",
      description: "Enjoy the stunning beaches and vibrant culture.",
      history: "Sydney, the capital of New South Wales, was founded as a British penal colony in 1788. The city is renowned for its stunning natural harbor, which is home to the iconic Sydney Opera House and Sydney Harbour Bridge. Historically, Sydney played a key role in Australia's transition from a colony to an independent nation. Visitors can learn about the city's Aboriginal heritage at sites like Barangaroo Reserve, relax at Bondi Beach, or take a ferry to Manly. With its blend of natural beauty and rich history, Sydney is a captivating destination.",
      byline: "By Yussuf Hassan, Travel Expert",
    },
    {
      image: Istanbul,
      imageDesc: IstanbulDisc, // Placeholder for imageDesc
      alt: "Istanbul, Turkey",
      title: "Istanbul, Turkey",
      description: "Discover the meeting point of Europe and Asia.",
      history: "Istanbul, formerly known as Byzantium and Constantinople, has served as the capital of three empires: Roman, Byzantine, and Ottoman. This historic city is where East meets West, geographically and culturally. Visitors can explore architectural marvels such as Hagia Sophia, the Blue Mosque, and Topkapi Palace. The city's bustling Grand Bazaar and spice markets showcase its rich trading history. With its layers of history, from ancient Rome to modern Turkey, Istanbul offers a unique blend of traditions, religions, and influences.",
      byline: "By Yussuf Hassan, Travel Expert",
    },
    {
      image: Dubai,
      imageDesc: DubaiDisc, // Placeholder for imageDesc
      alt: "Dubai, UAE",
      title: "Dubai, UAE",
      description: "Experience luxury, innovation, and stunning architecture.",
      history: "Dubai transformed from a modest fishing village in the 18th century to a global hub for trade and tourism. The discovery of oil in the 1960s propelled its rapid development, leading to iconic projects like the Burj Khalifa, Palm Jumeirah, and the Dubai Mall. Despite its modern skyline, Dubai retains cultural heritage in places like the Al Fahidi Historical Neighborhood and traditional dhow cruises on Dubai Creek. This city exemplifies ambition and innovation while preserving its Bedouin roots.",
      byline: "By Yussuf Hassan, Travel Expert",
    },
    {
      image: CapeTown,
      imageDesc: CapeTownDisc,
      alt: "Cape Town, South Africa",
      title: "Cape Town, South Africa",
      description: "Explore mountains, beaches, and vibrant local culture.",
      history: "Cape Town, known as the 'Mother City,' is the oldest city in South Africa, founded in 1652 as a supply station for Dutch East India Company ships. It played a crucial role in the anti-apartheid movement and is home to Robben Island, where Nelson Mandela was imprisoned. The city is framed by natural wonders like Table Mountain and Cape Point, offering breathtaking landscapes. Visitors can enjoy its diverse culture, vibrant markets, and historical sites, making Cape Town a jewel of Africa.",
      byline: "By Yussuf Hassan, Travel Expert",
    },
    {
      image: Bali,
      imageDesc: BaliDisc,
      alt: "Bali, Indonesia",
      title: "Bali, Indonesia",
      description: "Relax on beautiful beaches and explore lush jungles.",
      history: "Bali, also known as the 'Island of the Gods,' boasts a history rooted in Hindu-Buddhist culture and traditions. The island's temples, such as Tanah Lot and Uluwatu, date back to ancient times. Bali was influenced by the Majapahit Empire and later by Dutch colonization. Today, it is a haven for travelers seeking spiritual retreats, scenic landscapes, and cultural experiences. From rice terraces in Ubud to vibrant festivals, Bali offers an enchanting blend of nature and heritage.",
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
      <h1>Featured Destinations</h1>
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
