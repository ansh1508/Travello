import React, { useState } from "react";

const JourneyChatBot = () => {
  const predefinedQuestions = [
    { id: 1, question: "Where can I travel for a weekend trip?" },
    { id: 2, question: "What are the best travel destinations in 2024?" },
    { id: 3, question: "How can I book a flight?" },
    { id: 4, question: "Can you help me with hotel bookings?" },
    { id: 5, question: "What are the top adventure travel destinations?" },
    { id: 6, question: "What is the best time to visit Europe?" },
    { id: 7, question: "How do I plan a family vacation?" },
    { id: 8, question: "Can you suggest a budget-friendly trip?" },
    { id: 9, question: "What are the must-see attractions in Paris?" },
    { id: 10, question: "How can I travel with pets?" },
    { id: 11, question: "How can I find cheap flights for my trip?" },
{ id: 12, question: "What websites help with booking flights?" },
{ id: 13, question: "Are there apps for comparing flight prices?" },
{ id: 14, question: "Can you recommend budget airlines for international travel?" },
{ id: 15, question: "What’s the best time to book flights for cheaper rates?" },
{ id: 16, question: "How do I find pet-friendly hotels while traveling?" },
{ id: 17, question: "What are the top-rated hotel booking platforms?" },
{ id: 18, question: "Can you help me book a hotel for my trip?" },
{ id: 19, question: "What are some affordable luxury hotels?" },
{ id: 20, question: "How do I choose the best hotel for my budget?" },
{ id: 21, question: "Where should I go for an adventure vacation?" },
{ id: 22, question: "What countries offer the best hiking experiences?" },
{ id: 23, question: "Where can I go for extreme sports like skydiving?" },
{ id: 24, question: "What are the best destinations for skiing?" },
{ id: 25, question: "Where can I go scuba diving on vacation?" },
{ id: 26, question: "What is the best time to visit Southeast Asia?" },
{ id: 27, question: "When is the ideal season to travel to Japan?" },
{ id: 28, question: "What's the weather like in Europe during winter?" },
{ id: 29, question: "What are the off-peak travel months for Greece?" },
{ id: 30, question: "When should I visit Iceland for the Northern Lights?" },
{ id: 31, question: "What are some great family vacation destinations?" },
{ id: 32, question: "How do I plan a family-friendly travel itinerary?" },
{ id: 33, question: "Are amusement parks good for family trips?" },
{ id: 34, question: "Which cities are fun for kids to visit?" },
{ id: 35, question: "What are the best beach resorts for families?" },
{ id: 36, question: "Where can I travel on a tight budget?" },
{ id: 37, question: "What are affordable international travel options?" },
{ id: 38, question: "How do I save money while traveling?" },
{ id: 39, question: "Which cities offer the best budget hostels?" },
{ id: 40, question: "What are the cheapest countries to backpack through?" },
{ id: 41, question: "What are must-visit landmarks in Rome?" },
{ id: 42, question: "What are the best tourist spots in London?" },
{ id: 43, question: "What should I see when visiting New York City?" },
{ id: 44, question: "What are the top attractions in Tokyo?" },
{ id: 45, question: "What is a travel bucket list for Paris?" },
{ id: 46, question: "How do I travel with a dog or cat?" },
{ id: 47, question: "What airlines allow pets in the cabin?" },
{ id: 48, question: "How do I prepare for traveling with pets?" },
{ id: 49, question: "Are there pet-friendly destinations in Europe?" },
{ id: 50, question: "What documents do I need for traveling with pets?" },
{ id: 51, question: "How do I plan a solo trip?" },
{ id: 52, question: "What are the safest places for solo female travelers?" },
{ id: 53, question: "How do I meet people while traveling alone?" },
{ id: 54, question: "What are tips for first-time solo travelers?" },
{ id: 55, question: "Where should I go for a solo adventure?" },
{ id: 56, question: "What documents do I need to travel internationally?" },
{ id: 57, question: "Do I need a visa for traveling to Japan?" },
{ id: 58, question: "What are passport requirements for U.S. citizens?" },
{ id: 59, question: "How do I get travel insurance?" },
{ id: 60, question: "What vaccines do I need before traveling abroad?" },
{ id: 61, question: "How do I avoid jet lag when traveling?" },
{ id: 62, question: "What should I pack for a beach vacation?" },
{ id: 63, question: "How do I pack light for a two-week trip?" },
{ id: 64, question: "What travel accessories are must-haves?" },
{ id: 65, question: "What are the best apps for travelers?" },
{ id: 66, question: "How do I stay connected abroad?" },
{ id: 67, question: "How do I travel sustainably?" },
{ id: 68, question: "What are eco-tourism destinations?" },
{ id: 69, question: "How do I reduce my carbon footprint while traveling?" },
{ id: 70, question: "Are there eco-friendly travel companies?" },
{ id: 71, question: "What is slow travel and how do I do it?" },
{ id: 72, question: "How do I travel during peak tourist season?" },
{ id: 73, question: "What are travel hacks for booking cheap hotels?" },
{ id: 74, question: "How do I avoid tourist traps?" },
{ id: 75, question: "How can I travel like a local?" },
{ id: 76, question: "What are good destinations for digital nomads?" },
{ id: 77, question: "Where should I go for a romantic getaway?" },
{ id: 78, question: "What are top honeymoon destinations?" },
{ id: 79, question: "What cities are best for a couple’s vacation?" },
{ id: 80, question: "How do I plan a surprise trip for someone?" },
{ id: 81, question: "What are the best places for a road trip?" },
{ id: 82, question: "How do I rent a car abroad?" },
{ id: 83, question: "What’s the best way to travel around Europe?" },
{ id: 84, question: "Are trains or buses better in Europe?" },
{ id: 85, question: "What are scenic train journeys I can take?" },
{ id: 86, question: "How do I travel between islands in Greece?" },
{ id: 87, question: "What are travel tips for long flights?" },
{ id: 88, question: "How can I find local food spots when traveling?" },
{ id: 89, question: "What are good travel blogs or YouTube channels?" },
{ id: 90, question: "How do I plan a travel itinerary?" },
{ id: 91, question: "What are the best travel forums or communities?" },
{ id: 92, question: "How do I handle money and currency exchange while traveling?" },
{ id: 93, question: "Are travel credit cards worth it?" },
{ id: 94, question: "What are tips for using ATMs abroad?" },
{ id: 95, question: "How do I stay safe while traveling?" },
{ id: 96, question: "What are common travel scams to avoid?" },
{ id: 97, question: "How do I protect my belongings while on vacation?" },
{ id: 98, question: "What travel insurance should I get?" },
{ id: 99, question: "How do I handle emergencies while abroad?" },
{ id: 100, question: "What are travel apps for language translation?" },
{ id: 101, question: "How do I find local experiences and tours?" },

  ];

  const predefinedAnswers = {
    1: "For a weekend trip, you can explore nearby cities or scenic locations. Popular weekend destinations include coastal towns, hill stations, or cultural cities.",
    2: "Some of the best travel destinations in 2024 include Japan, Iceland, Costa Rica, and Greece. These places offer stunning landscapes and unique experiences.",
    3: "We don't provide flight booking facility currently but you can book a flight directly through airline websites, travel agencies, or booking platforms like Expedia, Kayak, or Google Flights.",
    4: "Yes, I can help with hotel bookings! I can recommend you hotels based on your budget and your destination. For generating the travel plan click on Generate Trip and plan your trip.",
    5: "Top adventure travel destinations include New Zealand for bungee jumping and hiking, Costa Rica for ziplining, and Switzerland for skiing.",
    6: "The best time to visit Europe is during the spring (April to June) or fall (September to October), as the weather is pleasant and there are fewer crowds.",
    7: "Planning a family vacation involves choosing a destination with activities for everyone. Family-friendly spots include Orlando, Florida, and the beaches of Hawaii.",
    8: "For a budget-friendly trip, consider destinations in Southeast Asia, Eastern Europe, or Mexico. These regions offer great experiences at affordable prices.",
    9: "Must-see attractions in Paris include the Eiffel Tower, Louvre Museum, Notre Dame Cathedral, and Montmartre. Don't forget to enjoy a Seine river cruise.",
    10: "Traveling with pets requires research on pet-friendly destinations, accommodations, and transport options. Always check pet policies in advance.",
    11: "Use flight comparison websites and book in advance for the best deals.",
    12: "Google Flights, Expedia, and Skyscanner are great for booking flights.",
    13: "Yes, apps like Hopper and Skyscanner help compare flight prices.",
    14: "Budget airlines like Ryanair, EasyJet, and AirAsia offer cheap international flights.",
    15: "Book flights 1–3 months in advance for domestic and 2–6 months for international travel.",
    16: "Use pet-friendly hotel filters on platforms like Booking.com or Airbnb.",
    17: "Top platforms include Booking.com, Hotels.com, and Agoda.",
    18: "Yes, I can help recommend hotels based on your destination and budget.",
    19: "Many boutique hotels and resort chains offer affordable luxury stays.",
    20: "Set your budget and use hotel filters for amenities, reviews, and location.",
    21: "New Zealand, Costa Rica, and Switzerland are top picks for adventure travel.",
    22: "Nepal, Peru, and Canada offer excellent hiking opportunities.",
    23: "Try Dubai, New Zealand, or Switzerland for thrilling extreme sports.",
    24: "Switzerland, Canada, and Japan have world-class ski resorts.",
    25: "Top scuba diving spots include the Great Barrier Reef and Maldives.",
    26: "November to April is ideal for most Southeast Asian countries.",
    27: "Spring and autumn are the best seasons to visit Japan.",
    28: "Europe in winter is cold and festive, ideal for snowy vacations.",
    29: "April to June and September to October are less crowded in Greece.",
    30: "Visit from September to March to see the Northern Lights in Iceland.",
    31: "Orlando, Hawaii, and national parks are great for family vacations.",
    32: "Include attractions, rest stops, and kid-friendly activities in your plan.",
    33: "Yes, amusement parks are great for family fun and all-age entertainment.",
    34: "Cities like Tokyo, London, and San Diego offer fun for children.",
    35: "Family resorts in Florida, the Caribbean, and Thailand are excellent.",
    36: "Visit Eastern Europe, Southeast Asia, or parts of South America for budget travel.",
    37: "Countries like Mexico, Vietnam, and Portugal are great budget options.",
    38: "Travel in the off-season, use rewards, and eat local to save money.",
    39: "Cities like Budapest, Prague, and Bangkok have excellent budget hostels.",
    40: "Cheapest countries to backpack include India, Nepal, and Bolivia.",
    41: "Must-see in Rome: Colosseum, Vatican, Trevi Fountain, and Pantheon.",
    42: "London highlights: Big Ben, London Eye, Buckingham Palace, and museums.",
    43: "In NYC, visit Central Park, Times Square, Statue of Liberty, and Broadway.",
    44: "Top Tokyo sights: Shibuya Crossing, Tokyo Tower, temples, and markets.",
    45: "Paris musts: Eiffel Tower, Louvre, Notre Dame, and a Seine cruise.",
    46: "Check pet travel rules, carry essentials, and choose pet-friendly lodging.",
    47: "Airlines like Delta, Lufthansa, and JetBlue allow cabin pets with conditions.",
    48: "Bring a carrier, vet documents, and pack pet supplies for comfort.",
    49: "Yes, cities like Amsterdam, Berlin, and Barcelona are pet-friendly.",
    50: "You'll need vaccination records, a pet passport, and airline paperwork.",
    51: "Choose safe destinations, plan ahead, and stay flexible for solo travel.",
    52: "Countries like Iceland, Japan, and Portugal are safe for solo women travelers.",
    53: "Stay in hostels, use travel apps, and join local tours to meet people.",
    54: "Research, pack light, and stay in central, safe areas as a beginner.",
    55: "Great solo spots: Bali, Lisbon, and Chiang Mai.",
    56: "You need a valid passport, visas (if applicable), and travel insurance.",
    57: "Yes, many nationalities need a visa to enter Japan.",
    58: "You need a valid passport with at least 6 months’ validity.",
    59: "Buy travel insurance online through trusted providers or aggregators.",
    60: "Some destinations require vaccines like yellow fever or hepatitis A.",
    61: "Stay hydrated, sleep on the flight, and adjust to local time quickly.",
    62: "Pack light clothes, swimwear, sunscreen, and flip-flops for the beach.",
    63: "Use packing cubes and a capsule wardrobe to travel light.",
    64: "Must-haves: power bank, adapter, reusable water bottle, and travel pillow.",
    65: "Try Google Maps, TripIt, Rome2Rio, and Google Translate.",
    66: "Use eSIMs, travel SIM cards, or pocket Wi-Fi to stay online.",
    67: "Opt for eco-friendly stays, reduce plastic use, and travel by train.",
    68: "Visit Costa Rica, Bhutan, and Norway for eco-tourism experiences.",
    69: "Fly less, use public transport, and carry reusable items to reduce impact.",
    70: "Yes, companies like Intrepid Travel and G Adventures offer green trips.",
    71: "Slow travel means spending more time in fewer places and connecting locally.",
    72: "Book early, plan weekdays, and avoid touristy spots to handle peak season.",
    73: "Book directly, travel midweek, and use loyalty programs for hotel deals.",
    74: "Avoid overly touristy spots and overpriced attractions by planning ahead.",
    75: "Eat local, stay in guesthouses, and take public transit like a local.",
    76: "Bali, Medellín, and Lisbon are popular among digital nomads.",
    77: "Romantic getaways include Santorini, Venice, and the Maldives.",
    78: "Top honeymoon spots include Bora Bora, Bali, and Seychelles.",
    79: "Couples enjoy Paris, Prague, and Kyoto for romantic vacations.",
    80: "Plan around interests, keep it a surprise, and prepare travel documents.",
    81: "Great road trips include the Pacific Coast Highway and Iceland Ring Road.",
    82: "Book with international rental agencies and carry an international license.",
    83: "Trains are scenic and convenient, buses are more affordable in Europe.",
    84: "Trains are faster, but buses are cheaper; depends on your route.",
    85: "Try the Glacier Express (Switzerland) or West Highland Line (Scotland).",
    86: "Use ferries or flights to travel between Greek islands easily.",
    87: "Wear comfy clothes, stay hydrated, and bring snacks and entertainment.",
    88: "Use apps like Yelp or ask locals to discover authentic food places.",
    89: "Popular blogs include Nomadic Matt, and YouTubers like Kara and Nate.",
    90: "List key places, plan by day, and allow time for rest and exploration.",
    91: "Try forums like Reddit’s r/travel and TripAdvisor community boards.",
    92: "Use travel cards, avoid airport exchange rates, and notify your bank.",
    93: "Yes, they offer rewards, travel points, and no foreign transaction fees.",
    94: "Withdraw larger amounts to minimize fees and use ATMs in bank lobbies.",
    95: "Research safety tips, stay alert, and avoid risky areas at night.",
    96: "Avoid overly friendly strangers, fake petitions, and overpriced taxis.",
    97: "Use anti-theft bags, avoid flashing valuables, and use hotel safes.",
    98: "Choose a plan that covers medical emergencies, trip cancellations, and theft.",
    99: "Know your country's embassy, keep emergency contacts, and travel insurance info.",
    100: "Use apps like Google Translate or iTranslate to overcome language barriers.",
    101: "Check Airbnb Experiences, GetYourGuide, and local tour operators for activities.",


  };

  const [messages, setMessages] = useState([
    { sender: "bot", text: "Please select your query from below and I will assist you." },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false); // Track if chatbot is open or closed
  const [questionVisible, setQuestionVisible] = useState(false); // Show predefined questions on demand

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    setMessages([...messages, { sender: "user", text: inputMessage }]);

    // Simulate bot response after 1 second
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Thanks for reaching out! Currently we do not provide custom questions service but we will add it soon. Till then Happy Journey!" },
      ]);
    }, 1000);

    setInputMessage("");
    setQuestionVisible(false); // Hide questions after a query is made
  };

  const handlePredefinedQuestionClick = (questionId) => {
    const selectedQuestion = predefinedQuestions.find((q) => q.id === questionId).question;
    const answer = predefinedAnswers[questionId];

    setMessages([
      ...messages,
      { sender: "user", text: selectedQuestion },
      { sender: "bot", text: answer },
    ]);

    setQuestionVisible(false); // Hide the question list after the answer is given
  };

  // Toggle the chatbot visibility
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (isChatOpen) setQuestionVisible(false); // Hide questions when chatbot is closed
  };

  return (
    <div className="hidden md:block"> {/* Hide component on screens smaller than md (phone screens) */}
      {/* Chatbot Button (Hidden on phone screens) */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={toggleChat}
          className="bg-main text-white p-3 rounded-full md:text-lg lg:text-xl shadow-lg focus:outline-none hover:bg-secondary transition duration-300 ease-in-out"
        >
          💬
        </button>
      </div>

      {/* Chatbot Container */}
      {isChatOpen && (
        <div className="fixed bottom-6 right-6 w-[400px] h-[500px] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-3 bg-main text-white">
            <span className="font-semibold">Customer Support</span>
            <button className="text-white focus:outline-none" onClick={toggleChat}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11.354 4.646a1 1 0 0 1 0 1.414L8.707 8l2.646 2.646a1 1 0 0 1-1.414 1.414L8 9.414 5.354 12.06a1 1 0 0 1-1.414-1.414L6.586 8 3.94 5.354a1 1 0 0 1 1.414-1.414L8 6.586l2.646-2.646a1 1 0 0 1 1.414 0z" />
              </svg>
            </button>
          </div>

          {/* Chat messages (Scrollable) */}
          <div className="flex-grow p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={`mb-3 ${message.sender === "bot" ? "text-left" : "text-right"}`}>
                <span className={`inline-block px-4 py-2 rounded-lg ${message.sender === "bot" ? "bg-gray-200" : "bg-main text-white"}`}>
                  {message.text}
                </span>
              </div>
            ))}
          </div>

          {/* Predefined Questions (Hidden initially, clickable) */}
          {!questionVisible && (
            <div className="p-4 bg-gray-100">
              <button onClick={() => setQuestionVisible(true)} className="text-main hover:underline">
                Show Questions
              </button>
            </div>
          )}

{questionVisible && (
  <div className="p-4 bg-gray-100 overflow-y-auto max-h-40">
    <p className="text-sm font-semibold mb-2">Select a question:</p>
    <div className="space-y-2">
      {predefinedQuestions.map((q) => (
        <button
          key={q.id}
          onClick={() => handlePredefinedQuestionClick(q.id)}
          className="w-full text-xs bg-gray-300 hover:bg-gray-400 text-left py-1 px-2 rounded-lg"
        >
          {q.question}
        </button>
      ))}
    </div>
  </div>
)}


          {/* Message input area */}
          <div className="p-4 bg-gray-100 flex items-center">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none"
            />
            <button onClick={handleSendMessage} className="ml-2 bg-main text-white px-4 py-2 rounded-lg">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JourneyChatBot;
