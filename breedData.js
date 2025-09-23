// Breed information database
const breedData = {
  "Alambadi": {
    name: "Alambadi Cow",
    description: "Alambadi cattle are native to Tamil Nadu, particularly the Dharmapuri and Salem districts. They are mainly draught animals, valued for plowing and carting in dryland farming. Medium-sized with dark grey or black coats, they have long horns and strong legs suited for uneven terrain. Known for their endurance, they can thrive in drought-prone conditions with minimal feed. Although not prolific milkers, they yield around 2–4 liters of milk daily, with decent fat content appreciated locally. Their adaptability, disease resistance, and dual-purpose utility make them valuable to small farmers. Beyond agriculture, the breed has cultural significance in rural Tamil Nadu. Hardy and dependable, Alambadi cattle embody the resilience of indigenous livestock adapted to local challenges while still contributing modestly to household dairy needs."
  },
  "Amrit Mahal": {
    name: "Amrit Mahal Cow",
    description: "Amrit Mahal cattle, originating in Karnataka, are among India’s oldest draught breeds and historically famous for their military use. They have compact frames, long legs, and a strong muscular build, usually grey to white in color. Farmers value them for their speed, stamina, and ability to work long hours in fields and transport. Their milk production is relatively low, averaging 2–3 liters per day, but the milk has high nutritional value. Adapted to semi-arid zones, they can survive on sparse fodder with minimal care. Known for endurance and resilience, Amrit Mahal cattle are more prized for draught than dairy. Today, they remain an iconic part of Karnataka’s heritage, valued not just for farming but also for their historic legacy as royal and military cattle."
  },
  "Banni": {
    name: "Banni Buffalo",
    description: "The Banni buffalo is an indigenous breed from the Kutch region of Gujarat, well-known for producing milk in harsh desert conditions. Medium to large-sized with a shiny black coat, they have robust frames and curved horns. This breed produces 12–18 liters of milk daily, with fat content averaging 7–8 percent, making it highly profitable for dairy farmers. Adapted to extreme heat, scarce fodder, and water shortages, Banni buffaloes are excellent examples of resilience in livestock. They graze on sparse vegetation and still maintain productivity. Apart from milk, they play a key role in the rural economy, with dedicated breeding practices and local fairs ensuring their popularity. Farmers rely on Banni buffaloes not just for milk, but also as symbols of cultural and economic pride."
  },
  "Bargur": {
    name: "Bargur Cow",
    description: "Bargur cattle come from the Bargur hills of Tamil Nadu and are recognized for their agility and hardiness in hilly terrain. They have reddish-brown coats often marked with white patches, and sharp horns suited for defense in semi-wild conditions. Traditionally reared by tribal communities, they are primarily draught cattle used for plowing and transporting in rugged regions. Their milk production is low, yielding about 1–3 liters per day, but the milk is rich in fat and nutrients. Known for their disease resistance, they can thrive in forest grazing systems with little human intervention. Farmers prize them for their endurance and ability to survive in difficult ecological conditions. Bargur cattle also hold cultural importance, being linked to tribal traditions and local heritage in Tamil Nadu."
  },
  "Brown Swiss": {
    name: "Brown Swiss Cow",
    description: "The Brown Swiss is a renowned dairy breed from Switzerland, prized globally for its consistent and high-quality milk production. Large and sturdy with a solid brown coat and gentle temperament, they are among the oldest dairy breeds still thriving worldwide. Brown Swiss cows yield around 20–25 liters of milk daily, with balanced protein and fat content, ideal for cheese-making. Known for longevity, fertility, and adaptability, they can thrive in diverse climates, from temperate regions to hotter zones. Farmers value their docility, ease of management, and strong body structure, which also supports draught use in some areas. With their calm nature and robust build, Brown Swiss cattle are regarded as highly reliable dairy animals that contribute substantially to the global dairy industry."
  },
  "Dangi": {
    name: "Dangi Cow",
    description: "Dangi cattle originate from Maharashtra and are particularly adapted to heavy rainfall and hilly, forested areas. They are medium-sized animals with a dark coat that sometimes has white markings, and they possess strong, compact bodies well-suited for draught work. These cattle are highly resistant to diseases and are valued for their endurance in rugged terrain. Milk production is modest, ranging from 2–6 liters per day, but the milk is nutritious and supports local households. Farmers appreciate Dangi cattle for their reliability in farming operations, especially in wet and uneven areas where machines cannot function effectively. Their hardiness and adaptability to challenging weather make them an important asset in their native regions, where they continue to serve as dependable dual-purpose cattle."
  },
  "Deoni": {
    name: "Deoni Cow",
    description: "Deoni cattle are an indigenous dual-purpose breed found in Maharashtra, Karnataka, and Andhra Pradesh. Medium to large-sized, they are known for their distinctive black-and-white or tricolor patterns. Deoni cows are excellent milk producers, yielding 8–12 liters daily, with good fat content, while bulls are valued for draught work due to their strength and endurance. Adapted to semi-arid climates, they thrive with limited resources and minimal care. Farmers appreciate them for their disease resistance, docility, and ability to balance both dairy and agricultural tasks. The breed is also important for crossbreeding programs to enhance milk productivity. With their resilience, versatility, and productivity, Deoni cattle are considered a highly valuable native breed contributing both to household nutrition and rural farming operations."
  },
  "Gir": {
    name: "Gir Cow",
    description: "Gir cattle are one of the most prominent zebu breeds, originating from Gujarat. They are easily recognized by their lyre-shaped horns, domed foreheads, and long ears. Gir cows are primarily dairy animals, producing between 10–15 liters of milk daily, with high fat content averaging 4.5–5 percent. Their milk is known for its nutritional richness and A2 protein, making it highly sought after. Gir cattle are exceptionally hardy, thriving in hot climates and resistant to many tropical diseases. They are also considered sacred in Indian culture, with strong ties to traditional farming. Farmers prize them for their docile temperament, longevity, and adaptability. Today, Gir cattle are exported worldwide and play an important role in improving dairy herds through breeding programs."
  },
  "Guernsey": {
    name: "Guernsey Cow",
    description: "Guernsey cattle are a dairy breed originally from the Channel Islands and are admired worldwide for the golden color of their milk. Medium-sized with a reddish-brown and white coat, they are efficient producers of nutrient-rich milk. On average, they yield about 15–20 liters of milk per day, with high butterfat and protein levels. Guernsey milk contains high beta-carotene, giving it a distinctive golden hue and exceptional quality for butter and cheese production. Farmers value the breed for its docility, efficiency in feed-to-milk conversion, and adaptability to different farming systems. Their calm temperament makes them easy to manage, while their relatively small size reduces feed requirements. Guernsey cattle remain highly prized for premium dairy production worldwide."
  },
  "Hallikar": {
    name: "Hallikar Cow",
    description: "Hallikar cattle are native to Karnataka and are among the most famous draught breeds in India. They are medium-sized animals, typically grey with darker shading on the face and legs. Hallikar cattle are valued for their endurance, strength, and agility, making them ideal for plowing and carting in tough terrains. Their milk yield is modest, averaging 2–5 liters per day, but the milk has good fat content and supports local dairy needs. Known for their sharp horns and energetic temperament, they require skilled handling but are highly dependable working animals. Historically associated with the princely state of Mysore, Hallikar cattle have cultural significance as well. Their resilience, stamina, and utility make them an enduring symbol of Karnataka’s livestock heritage."
  },
  "Hariana": {
    name: "Hariana Cow",
    description: "Hariana cattle originate from Haryana and are a dual-purpose breed valued for both dairy and draught. They are medium to large-sized animals, typically white or light grey in color, with strong muscular builds. Hariana cows produce around 8–10 liters of milk per day with good fat content, while bulls are excellent draught animals known for strength and endurance. Adapted to North India’s semi-arid climate, they thrive under minimal management and resist common diseases. Farmers appreciate their docility and efficiency in farming operations. Historically, Hariana cattle were popular in crossbreeding programs to improve milk productivity. Their reliability, cultural importance, and balanced utility make them one of the most important indigenous breeds of North India, ensuring their continued demand among dairy and farming households."
  },
  "Holstein Friesian": {
    name: "Holstein Friesian Cow",
    description: "Holstein Friesians are the world’s most famous dairy breed, originating from the Netherlands and Germany. Recognized for their distinctive black-and-white markings, they are large, highly productive cows. Holsteins yield exceptional amounts of milk, averaging 25–35 liters per day, though fat content is moderate compared to indigenous breeds. Their productivity has made them the backbone of commercial dairy industries worldwide. While highly efficient, they require intensive management, good nutrition, and healthcare support. Farmers value their fast growth and unmatched milk volume, but they are less heat-tolerant and more disease-prone compared to native breeds. Crossbreeding programs in India have successfully adapted them for local climates. Holstein Friesians symbolize modern dairy efficiency and remain the dominant choice for large-scale milk production globally."
  },
  "Jaffarabadi": {
    name: "Jaffarabadi Buffalo",
    description: "The Jaffarabadi buffalo is a prestigious breed from Gujarat, known for its immense size, strength, and high milk yield. Recognized by its massive curved horns and robust body, it is among the heaviest buffalo breeds in the world. Jaffarabadi buffaloes produce 8–12 liters of milk per day on average, with fat content reaching 7–8 percent, making their milk highly profitable. Their strength also makes them useful as draught animals. Farmers prize them for their resilience, adaptability, and economic importance in dairy production. Though they require substantial feed and management, they provide excellent returns. The breed’s cultural and economic importance in Gujarat ensures its continued demand, both for dairy and breeding. Jaffarabadi buffaloes are often showcased at fairs as symbols of rural pride and prosperity."
  },
  "Jersey": {
    name: "Jersey Cow",
    description: "Jersey cattle originated on the Channel Island of Jersey and are one of the smallest dairy breeds, but they are highly efficient producers of rich milk. Recognizable by their fawn to light brown coat and gentle temperament, Jerseys are known for their adaptability and high feed-to-milk efficiency. They produce around 15–20 liters of milk per day, with fat content ranging from 4.5–6 percent, making it ideal for butter, cheese, and other dairy products. Farmers value their small size, which reduces feeding costs, and their early maturity and calving ease. Adaptable to various climates, Jerseys are popular worldwide in both small farms and commercial dairy systems. Their docility, high-quality milk, and economic efficiency make them one of the most beloved dairy breeds globally."
  },
  "Kangayam": {
    name: "Kangayam Cow",
    description: "Kangayam cattle are native to Tamil Nadu and are traditionally known as powerful draught animals. Medium to large-sized, with a compact and muscular frame, they usually have a grey or white coat. Kangayam bulls are especially valued for their strength in plowing, carting, and transport. Their milk production is modest, averaging 2–5 liters per day, but the milk has good fat content. Farmers appreciate them for their hardiness, low maintenance needs, and disease resistance. Kangayam cattle are deeply rooted in Tamil Nadu’s rural traditions and often associated with cultural events and local farming practices. Their resilience in dry conditions, along with their dependable draught ability, ensures they remain an important part of farming households even as dairy-focused breeds gain prominence."
  },
  "Kankrej": {
    name: "Kankrej Cow",
    description: "Kankrej cattle are native to Gujarat and Rajasthan and are among the best dual-purpose Indian breeds. Large in size, they have a distinctive silver-grey coat and lyre-shaped horns. Kankrej cows produce 8–12 liters of milk per day with good fat content, while bulls are prized for their strength and endurance as draught animals. Adapted to arid and semi-arid regions, they thrive in challenging climates and resist many diseases. Farmers value their longevity, docility, and versatility, making them highly sought after for both dairy and agriculture. Kankrej cattle have also contributed significantly to crossbreeding programs, especially in developing new dairy breeds. Their balance of productivity, strength, and adaptability ensures their continued importance in rural and semi-commercial farming systems across western India."
  },
  "Kasaragod": {
    name: "Kasaragod Cow",
    description: "Kasaragod cattle are a small indigenous breed from Kerala, particularly in the Kasaragod district. Compact in size with a reddish-brown or black coat, they are primarily used as draught animals in small farms and paddy fields. Their milk yield is modest, producing around 1–3 liters per day, but the milk is nutritious with high fat content. Adapted to the humid, coastal climate of Kerala, Kasaragod cattle thrive on low-quality feed and require minimal management. Farmers value them for their disease resistance, hardiness, and ability to work in wet, marshy fields where machines are ineffective. While not a major dairy breed, their cultural and ecological importance in their native region is significant, making them an essential component of traditional Kerala farming systems."
  },
  "Khillari": {
    name: "Khillari Cow",
    description: "Khillari cattle are native to Maharashtra and parts of Karnataka and are primarily known as a hardy draught breed. They are medium-sized, compact animals with a light grey to white coat and well-formed horns. Khillari cattle are renowned for their speed and endurance, often used in cart racing as well as agricultural work. Milk production is modest, averaging 2–4 liters per day, but the milk is rich in quality. Adapted to semi-arid climates, they thrive on minimal feed and resist many diseases. Farmers value their energy, stamina, and ability to work long hours in hot conditions. Khillari cattle hold cultural significance in Maharashtra, where they are linked to local festivals and traditions, symbolizing both strength and rural pride."
  },
  "Malnad Gidda": {
    name: "Malnad Gidda Cow",
    description: "Malnad Gidda is a dwarf cattle breed native to the Malnad region of Karnataka. Small in stature, usually black in color, they are highly adaptive to forested, hilly terrains. Farmers rear them in free-grazing systems, and they require very little maintenance. Despite their small size, Malnad Gidda cows produce milk rich in medicinal properties, yielding about 1–3 liters daily. The milk is believed to have therapeutic value, making it popular among locals. They are disease-resistant, fertile, and capable of surviving on sparse resources. Their cultural and ecological importance is high, as they play a role in sustainable farming practices. Hardy, low-cost, and ecologically significant, Malnad Gidda cattle continue to be preserved as an important native asset of Karnataka’s biodiversity."
  },
  "Nagori": {
    name: "Nagori Cow",
    description: "Nagori cattle originate from Rajasthan and are famous as powerful draught animals. Large in size with a light grey coat and long legs, they are particularly suited for plowing heavy soils and carting loads across long distances. Their milk production is low, around 2–4 liters per day, but it has good fat content. Farmers primarily value them for their strength, stamina, and ability to withstand the hot, arid climate of Rajasthan. Adaptable and hardy, Nagori cattle require relatively low maintenance while providing reliable service in farming operations. Bulls are highly prized for their working capacity, and the breed plays a significant role in local agriculture. Culturally, Nagori cattle are considered a matter of pride for farming communities in western India."
  },
  "Nagpuri": {
    name: "Nagpuri Buffalo",
    description: "The Nagpuri buffalo, also called Ellichpuri, is native to Maharashtra and known as a versatile, hardy breed. Medium-sized with a black coat and distinctive sickle-shaped horns, they are used both for milk production and draught work. On average, they produce 6–8 liters of milk daily, with fat content between 7–8 percent, making their milk highly nutritious and profitable. Nagpuri buffaloes are well adapted to hot and dry conditions and can tolerate harsh weather with limited fodder and water. Farmers value them for their dual utility, resilience, and relatively low maintenance needs. Apart from their economic role, Nagpuri buffaloes are culturally significant in rural Maharashtra, where they represent reliability and pride, especially in smallholder farming systems where multi-purpose breeds are essential."
  },
  "Nili-Ravi": {
    name: "Nili-Ravi Buffalo",
    description: "The Nili-Ravi buffalo is a famous dairy breed native to Punjab, particularly in Pakistan and northwestern India. Large-sized with a black coat, they are easily recognized by their distinctive white markings and curled horns. Renowned for their high milk yield, Nili-Ravi buffaloes produce 15–20 liters of milk daily, with fat content averaging 6–7 percent. Their milk is highly sought after for making butter, ghee, and traditional dairy products. Farmers value them for their adaptability, fertility, and disease resistance, making them profitable in both small and commercial dairy farms. Nili-Ravi buffaloes are often referred to as the ‘Black Gold’ of Punjab due to their immense contribution to the dairy sector. Their calm nature and productivity ensure continued popularity across South Asia."
  },
  "Nimari": {
    name: "Nimari Cow",
    description: "Nimari cattle are native to the Nimar region of Madhya Pradesh and are considered a dual-purpose breed. Medium to large-sized, with a reddish-brown coat often having white markings, they are valued for both draught power and milk. Nimari cows yield around 4–6 liters of milk per day, which is rich in quality and suitable for household needs. Bulls are highly prized for agricultural work, as they are strong and hardy, thriving in the hot and dry conditions of central India. Farmers appreciate them for their disease resistance, adaptability to local conditions, and ability to survive on limited resources. Nimari cattle also hold cultural significance in their region, contributing to both farming livelihoods and traditional rural practices in central India."
  },
  "Ongole": {
    name: "Ongole Cow",
    description: "Ongole cattle are a large indigenous breed from Andhra Pradesh, renowned for their size, strength, and cultural importance. Typically white or light grey in color, with long, upward-curving horns, they are highly prized as draught animals. Their milk production averages around 5–7 liters per day, but they are more valued for endurance and working ability. Ongole cattle are adaptable to hot, humid climates and resist many tropical diseases. Farmers appreciate them for their docility, reliability in farming, and role in crossbreeding programs. Internationally, Ongole genetics have contributed to the development of several zebu breeds worldwide. Culturally, Ongole cattle are symbols of pride and heritage in Andhra Pradesh, often featured in local festivals, rural fairs, and even temple traditions, showcasing their deep-rooted importance."
  },
  "Pulikulam": {
    name: "Pulikulam Cow",
    description: "Pulikulam cattle are small-sized indigenous animals from Tamil Nadu, well-known for their agility and resilience. Typically grey with short, curved horns, they are hardy animals adapted to dry, rocky terrains. Traditionally, they are associated with Jallikattu, the bull-taming sport of Tamil Nadu, where their agility and strength are celebrated. Milk production is low, usually about 1–3 liters per day, but their primary value lies in cultural and draught roles. Farmers appreciate their disease resistance, low maintenance needs, and ability to survive on sparse grazing. Pulikulam cattle embody the cultural identity of southern Tamil Nadu, serving not only in agriculture but also in rituals, traditions, and rural festivities. Their preservation is vital for maintaining biodiversity and heritage in their native region."
  },
  "Red Dane": {
    name: "Red Dane Cow",
    description: "Red Dane cattle are a dairy breed originating from Denmark, recognized for their red coat and high milk yield. Large and sturdy, they are closely related to other European dairy breeds like Holsteins. On average, they produce 20–25 liters of milk per day, with moderate fat and protein content. Their milk is widely used in commercial dairy industries, particularly for cheese and butter production. Farmers value Red Danes for their adaptability, longevity, and efficient feed-to-milk conversion. They thrive in temperate to warm climates when properly managed. With a calm temperament and reliable productivity, they are popular in many countries, including India, where they have been introduced for crossbreeding to improve local dairy herds. Their balance of productivity and adaptability ensures lasting relevance."
  },
  "Red Sindhi": {
    name: "Red Sindhi Cow",
    description: "Red Sindhi cattle originated in the Sindh province and are now widely reared across South Asia. Medium-sized with a distinctive reddish-brown coat, they are among the best indigenous dairy breeds. Red Sindhi cows produce 8–12 liters of milk daily, with high fat content averaging 4.5–5 percent. Their adaptability to hot climates and resistance to tick-borne diseases make them reliable dairy animals in tropical regions. Farmers value their fertility, longevity, and ability to thrive under low management systems. Red Sindhi cattle have also been extensively used in crossbreeding programs to improve milk yields in other breeds. Their combination of resilience, productivity, and adaptability ensures their enduring role in India’s dairy economy, making them a trusted choice among farmers seeking dependable dairy cattle."
  },
  "Sahiwal": {
    name: "Sahiwal Cow",
    description: "Sahiwal cattle originated in the Punjab region, particularly around the Sahiwal district in Pakistan. They are one of the best indigenous dairy breeds in South Asia. Medium to large-sized, with reddish-brown coats often having white patches, Sahiwal cows produce 10–15 liters of milk per day, with high fat content of 4.5–5 percent. Their milk is especially valued for making ghee and other traditional products. Sahiwals are heat-tolerant, disease-resistant, and thrive even under tropical conditions with limited fodder. Farmers value their docile temperament, fertility, and adaptability, making them excellent for both small and large-scale dairies. Internationally, Sahiwal genetics are used to improve tropical dairy herds. With their combination of productivity, resilience, and cultural importance, they remain a cornerstone of South Asia’s dairy sector."
  },
  "Tharparkar": {
    name: "Tharparkar Cow",
    description: "Tharparkar cattle originate from the Thar Desert region of Rajasthan and are valued as a dual-purpose breed. Medium to large-sized with a white or light grey coat, they are well adapted to arid conditions and harsh climates. Tharparkar cows produce 8–10 liters of milk daily, with good fat content, while bulls are prized for draught work in drylands. Their ability to survive on scarce fodder and water makes them essential in desert regions. Farmers appreciate their disease resistance, endurance, and efficiency in challenging environments. The breed has also been used in crossbreeding programs to improve milk yields. Beyond their utility, Tharparkar cattle symbolize resilience in desert agriculture, playing an important role in supporting rural livelihoods and food security in arid parts of India."
  },
  "Toda": {
    name: "Toda Buffalo",
    description: "The Toda buffalo is native to the Nilgiri Hills of Tamil Nadu and holds great cultural and religious importance among the Toda tribe. Large-sized with jet-black coats and backward-curving horns, these buffaloes are reared in traditional systems. They produce about 3–5 liters of milk per day, but the milk is exceptionally rich in fat, often reaching 8 percent, making it ideal for ghee and butter production. More than economic value, Toda buffaloes are deeply tied to tribal customs, rituals, and identity. Farmers prize them for their adaptability to hilly, cold climates and disease resistance. Although their population is limited, conservation efforts continue to protect them due to their cultural significance. Toda buffaloes embody the link between indigenous livestock, tradition, and sustainable mountain farming systems."
  },
  "Umblachery": {
    name: "Umblachery Cow",
    description: "Umblachery cattle are a draught breed from Tamil Nadu, particularly found in the Nagapattinam and Thiruvarur districts. Medium-sized with a grey or reddish-brown coat, they are muscular and strong, suited for wetland plowing in paddy fields. Their milk yield is modest, around 2–4 liters per day, but with good fat content. Farmers primarily value them for their endurance and draught power in waterlogged areas where machines are less effective. Umblachery cattle are hardy, disease-resistant, and thrive under traditional management. They are also culturally significant in rural Tamil Nadu, often linked to farming rituals and community practices. Although not prolific milkers, their role in sustaining wetland agriculture ensures their continued relevance and importance in local farming households."
  },
  "Vechur": {
    name: "Vechur Cow",
    description: "The Vechur cow, native to Kerala, is the smallest cattle breed in the world. Small in stature, usually with a light brown coat, Vechur cows are highly adaptable and thrive on minimal resources. Despite their small size, they produce 3–5 liters of milk per day, which is believed to have medicinal properties due to its unique composition. Their milk is rich in fat and easily digestible, making it popular among locals. Vechur cows are disease-resistant, hardy, and require very little maintenance, making them ideal for small-scale farmers. They hold cultural and ecological significance in Kerala and are recognized as an important part of India’s livestock biodiversity. Conservation efforts continue to protect and promote this rare breed due to its uniqueness and economic potential."
  }
};

// Function to get breed information
function getBreedInfo(breedName) {
    // Handle case variations
    const normalizedName = Object.keys(breedData).find(key =>
        key.toLowerCase() === breedName.toLowerCase()
    );

    if (normalizedName) {
        return breedData[normalizedName];
    }

    // Return default info if breed not found
    return {
        name: breedName,
        description: "This appears to be a cattle breed. Our database is continuously expanding to include more detailed information about various cattle breeds. Please check back for updates."
    };
}