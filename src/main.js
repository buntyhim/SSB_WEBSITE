var randNum; 
var timer;
var topics = ["ISIS","Barack Obama","Indo-US Nuclear Deal","India’s Foreign Policy",
"You-tube","Censorship Issues","Religious Tolerance in India","Women Safety",
"Sachin Tendulkar","Bharat Ratna","Lobbying in Medical World","Sports in India",
"Football in India","Cricket in India","Computer Hacking","China India Relationship",
"Kashmir Issue","Narendra Modi on the World Front","Role of President in India",
"Modern means of Transportation","IT industry in India","Brain Drain","Role of Women in Nation Building",
"Women Safety","NOTA","Delhi Elections","Democracy in India","India-Pakistan Relations",
"India ‘s relation with her neighbors","Criminalization of politics","Social Media’s role in society",
"Youth and social media","Role of youth in nation building","Internet revolution",
"Arab Spring","Israel Palestine Issue","US-Russia Relationship","Rivers in India",
"AGNI V","Emerging India Writers","Pollution and its prevention","What Indian Military needs",
"Modernization in Military","Books Versus E-Books","Education System in India",
"Judicial System in India","Indian Railways","The metropolitan cities of India",
"Terrorism/Naxalism/Maoism","Population problem","Adult Education","Indo US Relations",
"Beauty Pageants","Cable TV","Personality – Secret of Success","Dog Man’s Best Friend",
"Ragging","IT","Students Union","IT Industry","Your Favorite Day","Role of Discipline in Life",
"Smart Card","G 8 Nations","E-Commerce","Cyber Crime","Sports in India",
"Role of Opposition in Indian Politics","BPO vs KPO","Why Youth Hesitate to Join Defense Forces",
"Peaceful use of Nuclear Energy","Globalization","India’s Agricultural Problem",
"Favorite Actress India","USA in Changing World","Criminalization in Politics",
"Child Labor","USA – A Policeman of Unipolar World","Education is a Modern Day Industry",
"Religion – A Secular View in Indian Society","Nithari – An Episode which is Shame",
"Page 3 – A Way of Life","Indian Society – Turning to Western Way of Life","Sachin Tendulkar",
"Infrastructure of India","Rain Water Harvesting","Favorite Cricketer",
"Democracy in Pakistan – A Joke","Status of Women in India","Govt Schools vs Public School",
"Insurgency – A Phenomenon Needs Understanding","E Governance","Health Tourism",
"National Anthem","G 20","Volcano","Secularism","Ambition in Life","Net Education",
"Internet","Rattan Tata – A Business Personality","Politicians in India – Root Cause of Problems",
"Should Article 370 be Abrogated?","Article 376 is an Insult to Indian Democracy",
"Democracy v/s Dictatorship","Aviation Industry in Developing India","Security Industry in Present Day",
"IT is a Boon for Society","Water Shall be the Cause of World War –III",
"Bribery- A Cancer of Indian Society","Should India Attack Pakistan","Constitution of India – As I see it",
"Mutual Funds","Higher Education in India","Election Commission","Life Insurance Industry in India",
"Indian Cinema Industry (Bollywood)","Electronic Media And Print Media","Internet – A Boon or Curse",
"Political Leadership in India","New Channels on India TV","Policing in Our Country – Requires Review",
"Which is the Most Neglected Sector in Our Country ?","Girl Child in Indian Society – Misunderstood Aspect",
"Judicial Activism","Distance Education","Center – State Relations",
"Kashmir Issue – A Mistake by Pt. Jawahar Lal Nehru","Sarkaria Commission","NSG",
"Generation Gap","Call Center","Communist in India – An Out Step of Political Ideology",
"A forestation – A Crying Need","Population Problem","Unemployment","Shah Commission",
"Ragging in Colleges / Universities","Mandal Commission","My Favorite Book",
"Gandhi – My Role Model","Entry of Foreign Universities in India","Child Abuse","Pollution",
"Manmohan Singh – A Case Study","Cricket vs Other Games in India","Rakhi Sawant – A Glamour Girl",
"Our Rights vs Responsibilities","Indian Cricket – More of a Hidden Game","Higher Education in India",
"Siachen Galacier","Kashmir Issue – A Historical Look","AIDS – A Threat to Humanity",
"Value of Computer Education Today","Alternate Sources of Energy","L N Mittal – An Iron Man",
"Solar Energy","Shiv Sena – A Self Style Policeman of Indian Culture","King Khan",
"Reverse Brain drain","Professional Education in India","Homeopathy – An Established Medical Science",
"Yoga- A Gift to Present World by India","President’s Rule in a State – An Indian Concept",
"Pen Stronger than Sword","Corrupt Politicians – An Issue Requires Attention","Traffic Problem",
"Computer Virus","Sati System","Energy Industry in Our Country","Family Planning",
"Laden – A Criminal of Humanity","Rahul Gandhi – A Future or Failure","Godhara Incident",
"Judiciary in India","BSP – A Party For Down Trodden or Otherwise","Malnutrition",
"Coalition Govt Can Neither be Strong Nor Success","Fashion – A Society’s View",
"Live In – Should be Accepted or Banned","Medical Care in India","Adult Education – A Mission",
"UNO – A Review Needed","NAM – An Outdated Concept","Should Constitution of India be Rewritten",
"Right to Information (RTI)","Army is Less a Career, More a Way of Life","Corruption in Our Society",
"Poverty in India","Stray Cattle Menace","Green House Effect","Co-ed -Education",
"Terrorist Problem in Kashmir","Terrorism in North Eastern India","Doping in Sports",
"Division Of States in India","Role of NGO","Human Cloning","E-Market",
"My Hobby","Role of Media","Global Warming","India as Superpower",
"Discoveries that Changed the World","Indo Pak Relations- The Future","AIDS",
"NCTC","Alternate Source of Energy","Information Technology","Medha Patkar",
"Is India a Soft Country?","India’s Nuclear policy","Joint Family Vs Nuclear Family",
"Naxalism","Child Labor","Wildlife Protection","Global Warming","Water Crisis",
"BPO in India","Nigerian Problem","Unrest Disaster Management in India",
"National Integration","India’s Architecture","Eye Donation","Disarmament",
"Crime against Women","Water Bodies","India’s Foreign Trade","Water Resources",
"Girl Child","Health","Aviation Industry in India","If there Were No Super Powers in this World",
"Use of Technology in Agriculture","United We Stand, Divided We Fall",
"Can India Become Self Sufficient in Energy Resources","Indian Reservation Policy",
"Sanjay Dutt","Missile Programme of India","Musharraf – A Leader’s Case Study",
"Kashmir Issue","Terrorism – A Threat to Humanity","Sex Education – Crying Need of Present Day",
"World Media and its Effects","Role of Youth in Society","Social Effects in Pornography",
"Gay Rights","Instant Cricket","Green House Effect","Ecology and Environment",
"ISRO","SEZs – A Double Edged Weapon","Disinvestment of PSUs","Favorite Passtime",
"Peace Measures in J&K","Right to Information","Act and its Fall Out",
"Privatization of Universities","Inflation","Same Sex Marriage","Valentine Day",
"MANREGA","Pulse Polio","9/11 – A Black Mark for USA but Caution for All",
"Terrorism-A Global Curse","BJP – A Party with a Difference","Reality Shows on TV – A Deep Rooted Look",
"Most Corrupt Person – As I See it","Dowry – A Curse on Society","Most Responsible Corporate – As Per Me",
"Rajwardhan Singh Rathore","Ecological System","India Global Research and Development Destination",
"Nano Technology","National Highway Authority of India","Mobile Phones","Energy Crisis",
"MNC’s","International Terrorism","Indian Economy","India Shining","BPO Industry",
"NHAI – Serving Nation","Medical Project","Tourism in India","Indian Culture",
"Sports as a career","Indian Space missions","Indo-Pak relations","Indo-China relations",
"India and its relations with neighboring countries","Interlinking of rivers",
"Judicial System of India","Health and Diet","Media","Crime and Justice","Metro Rail",
"Role of UN in present era","Role of Computers","Role of media in Nation Building","Space Tourism"
]


function random_topic()
{
  
  return topics[Math.floor(Math.random()*topics.length)];
     
}


function startppdt(){
    if(document.getElementById("ppdtImage").style.display == 'none'){
        randNum = Math.floor((Math.random() * 16) + 1);
        document.getElementById("ppdtImage").src =  'ppdt/ppdt ('+randNum+').jpg';
        document.getElementById("ppdtImage").style.display = 'block';
        new Audio('src/alert.mp3').play();

        timer = setTimeout(resetppdt, 30000);
	    timer2 = setTimeout(playsound, 300000);
    }
    
}

function resetppdt(){
    if(document.getElementById("ppdtImage").style.display != 'none'){
        document.getElementById("ppdtImage").style.display = 'none';
        randNum = Math.floor((Math.random() * 16) + 1);
        document.getElementById("ppdtImage").src =  'ppdt/ppdt ('+randNum+').jpg';
        new Audio('src/alert.mp3').play();
    }
	
}

function playsound(){
	new Audio('src/alert.mp3').play();
}

function changeppdtimage(){
    if(document.getElementById("ppdtImage").style.display != 'none'){
        randNum = Math.floor((Math.random() * 16) + 1);
        document.getElementById("ppdtImage").src =  'ppdt/ppdt ('+randNum+').jpg';
        new Audio('src/alert.mp3').play()

        clearTimeout(timer);
	    clearTimeout(timer2);
        timer = setTimeout(resetppdt, 30000);
	    timer2 = setTimeout(playsound, 300000);
    }
}

function showNewTopics(){

    document.getElementById("topic1").value = random_topic();
    document.getElementById("topic2").value = random_topic();
    document.getElementById("topic3").value = random_topic();
    document.getElementById("topic4").value = random_topic();

    timer = setTimeout( thirtySecs, 150 * 1000);
    

}
 
function thirtySecs(){

    document.getElementById("topic1").value = "30 sec warning";
    document.getElementById("topic2").value = "30 sec warning";
    document.getElementById("topic3").value = "30 sec warning";
    document.getElementById("topic4").value = "30 sec warning";
    playsound();
    timer = setTimeout(timeUpNext, 30 * 1000);
}

function timeUpNext(){
    showNewTopics();
    playsound();
}

function resetTopics(){

    document.getElementById("topic1").value = '';
    document.getElementById("topic2").value = '';
    document.getElementById("topic3").value = '';
    document.getElementById("topic4").value = '';

    clearTimeout(timer);

}
