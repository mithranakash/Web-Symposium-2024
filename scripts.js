document.addEventListener("DOMContentLoaded", function() {
    const eventButtons = document.querySelectorAll(".event-btn");
    const eventDetails = document.querySelector(".event-details");
    const eventContent = document.querySelector(".event-content");
    const eventList = document.getElementById("event-list");


    const eventData = {
        "technical": `
            <h3>Technical Events</h3>
            <ul>
                <li><button class="event-item" data-id="paper-presentation">Paper Presentation</button>
                    <div id="paper-presentation-details" class="event-details"></div>
                </li>
                <li><button class="event-item" data-id="hydro-blasters">Hydro Blasters</button>
                    <div id="hydro-blasters-details" class="event-details"></div>
                </li>
                <li><button class="event-item" data-id="bug-smash">Bug Smash</button>
                    <div id="bug-smash-details" class="event-details"></div>
                </li>
                <li><button class="event-item" data-id="design-aura">Design Aura</button>
                    <div id="design-aura-details" class="event-details"></div>
                </li>
            </ul>
        `,
        "non-technical": `
            <h3>Non-Technical Events</h3>
            <ul>
                <li><button class="event-item" data-id="free-fire">Free Fire</button>
                    <div id="free-fire-details" class="event-details"></div>
                </li>
                <li><button class="event-item" data-id="shades-of-grey">Shades of Grey</button>
                    <div id="shades-of-grey-details" class="event-details"></div>
                </li>
                <li><button class="event-item" data-id="ipl-auction">IPL Auction</button>
                    <div id="ipl-auction-details" class="event-details"></div>
                </li>
                <li><button class="event-item" data-id="guesstimate">Guesstimate</button>
                    <div id="guesstimate-details" class="event-details"></div>
                </li>
            </ul>
        `,
        "workshops": `
            <h3>Workshops</h3>
            <ul>
                <li><button class="event-item" data-id="sae-workshop">SAE Workshop</button>
                    <div id="sae-workshop-details" class="event-details"></div>
                </li>
                <li><button class="event-item" data-id="project-expo">Project Expo</button>
                    <div id="project-expo-details" class="event-details"></div>
                </li>
            </ul>
        `
    };

    const eventDetailsData = {
        
 "paper-presentation": `

 <h4>Paper Presentation</h4>
 <p>Welcome to “Paper Presentation” our college’s premier presentation competition! Put your presentation skills in test to showcase your creativity.</p>
 <br>
 <p><strong>Rules:</strong></p><br>
 <ul>
     <li>Participate as a team or individually.</li>
     <li>Submit your paper by <strong>29/07/2024</strong> for review.</li>
     <li>Use <strong>Times New Roman</strong>, <strong>Size: 12</strong>, <strong>Spacing: 1.5</strong> and <strong>IEEE Format</strong>.</li><br>

     <li align=left>1. Maximum 3-4 participants per team are allowed.</li><br>
     <li  align=left>2. The paper should be in PPT format.</li><br>
     <li align=left>3. Participants can also submit their papers on any technical topic.</li><br>
     <li align=left>4. The participants are requested to send a soft-copy to a given mail-id.</li><br>
     <li align=left>5. The front page of paper should be consisting of participant /team members names, contact no., mail id, college name and title at the top of page.</li><br>
     <li align=left>6. All the participants are requested to bring a hardcopy of their paper along with them on the day of the event.</li><br>
     <li align=left>7. Each participants will give 10 min. for paper presentation & 2 min. for query session.</li><br>
     <li align=left>8. Video (if any) allowed but within same time.</li><br>
     <li align=left>9.Time limit should be strictly followed and extension may lead to deduction of marks.</li><br>
     <li align=left>10.Violation of any rule can result in rejection of paper.</li><br>
     <li align=left>11.Enter the hall with your college ID.</li><br>
     <li align=left>12.Participants should be present in the hall 10minutes before the starting of the competition.</li>
     
 </ul>
 <br>
 <br>
 <p><strong>FORMAT OF ROUNDS:</strong></p>
 <br>
 <ul>
 <li>There is only one round. Each team will be given 10minutes for presentation & 2minutes for query session. Participants must finish their presentation within the time.</li>
 </ul>
 <br>
 <p><strong>JUDGING CRITERIA:</strong></p>
 <br>
 <ul>
 <li>The team who speak fluently and clear the doubts asked by the judge will be announced as the winner.</li>
 </ul>
 <br>
 <p><strong>Contact:<br><br>
  FACULTY CO-ORDINATORS:</strong></p>
 <br>
 <p>KAMALESHWARAN - +91 6382273891
    SIVA SEKAR - +91 9791120091</p>
`,
"hydro-blasters": `
 <h4>Hydro Blasters</h4>

 <p>Do you have an interest in aerodynamic designing!? Also, do you love flying rockets? If your answer is yes, we will provide you with an excellent opportunity to build your rocket and fly it yourself. This is a competitive event, where you would need to design a bottle rocket that would fly the farthest. The rocket with an excellent aerodynamic design and a proper launching technique would bag a huge prize. So, rocket enthusiasts turn on your engines and get ready to launch!.
</p>

<br>

 <p><strong>Rules:</strong></p>
 <br>
 <ul>
     <li align=left>1.Form teams of up to 4 members.</li>
     <br>
     <li align=left>2.Design and build your own water blaster.</li>
     <br>
     <li align=left>3.Compete in various challenges to test your blaster's efficiency and power.</li><br>
     <li align=left>4.Rockets should be made on the spot within the time limit(45 mins)Before the 1st round.</li><br>
     <li align=left>5.Only cardboard should be used for wings.</li><br>
     <li align=left>6.A single 2 litre water bottle can be used.</li><br>
     <li align=left>7.The only allowed source of propulsion will be water and air pressure.</li><br>
     <li align=left>8.The pressure must not exceed 60 psi.</li><br>
     <li align=left>9.Metal, glass, hard plastics, spikes and any kind of antennas must not be utilized to construct your rocket.</li><br>
     <li align=left>10.The usage of parachutes is strictly prohibite</li><br>
 </ul>
 <br>
 <br>
 <p><strong>Format of Rounds:</strong></p><br>
 <ul>
 <li align=left><strong>Round 1</strong>Bottle Rocket Building- Each team must build their own bottle rocket on the spot utilizing their own resources in the time permitted.<br><br>
Teams capable of completing the rockets within the time restriction will be chosen. <br><br>
 The finished rocket is first inspected and it is allowed to be launched if its considered eligible and safe by the judges.<br><br>
 The team is provided with one trial launch (optional) and one main launch which will be considered for the points.<br><br>
  Rules and restriction for material usage will be announced in detail before starting of the registration process for the tournament.</li><br><br>
  
 <li align=left><strong>Round 2</strong> Range test - Each team is given 2 chances of launching to reach a specified distance from the launch pad.<br><br> 
 If the target is not reached, no points are awarded. The farther the distance greater the points.</li><br><br> 

 <li align=left><strong>Round 3</strong> Accuracy test - Launch the rocket and land the target zone.<br> <br> 
  Two launches are allowed per team Points would be given upon the landing area and the accuracy. <br> <br> 
  All teams will be participating in all three rounds.<br> <br> 
   If the rocket fails and is broken in action then it cannot proceed to next round. 
   </li>
</ul>
<br>
<br>
<br>
   <p><strong>Judging Criteria:</strong></p><br>
    <p>The trajectory of the rocket and its stability are judged and points are awarded suitably.</p>
<br>

<br>
 <p><strong>Contact:</strong></p><br>

 <ul>
 <li><strong>FACULTY CO-ORDINATOR :</strong> Pradeep Kumar +91 98846 47181</li><br>
 <li><strong>STUDENT CO-ORDINATORS :</strong>
 
Vishnu Devan.S +91 89256 06302</li>
Indhira Kumar +91 87545 48662</li>
<br>

`,
"bug-smash": `
 <h4>Bug Smash</h4>
 <p>Welcome to "Bug Smash" our college's premier coding competition! Put your coding and logical reasoning skills to the test and showcase your creativity across two challenging rounds.</p>
 <br>
 <br>
 <p><strong>Rules:</strong></p>
 <br>
 <ul>
     <li>Participate individually or in teams of up to 2 members.</li>
     <li>Fix as many bugs as possible within the given time frame.</li>
     <li >The participant/team with the most bugs fixed wins.</li><br><br>
     <li align=left>1. Enter the hall with your college ID.</li><br>
     <li align=left>2. Participants should be present in the hall 10 minutes before the competition. The number of participants in a team is 1.</li><br>
     <li align=left>3. Mobile phones should not be used during the competition.</li><br>
     <li align=left>4. Do not create any disturbances to others.</li><br>
     <li align=left>5. Any one of these programming language are preferred(C ,C++, Python, Java).</li><br>
     <li align=left>6. Participants should bring their own laptops. If not, contact the event coordinators one day in advance to arrange a system.</li><br>
     <li align=left>7. Participants opening other tabs during the competition will be disqualified.</li><br>

 </ul>
 <br>
 <br>
 <p><strong>Format of Rounds:</strong></p><br>
 <ul>
     <li align=left>
    <strong> Round 1:</strong>
            In the first round, a set of programs with errors will be given. Participants who identify and circle the errors will advance to the next round.</li><br>
     <li align=left> <strong>Round 2:</strong>
            In Round 2, a set of programs with errors will be provided. Participants are required to debug and run the programs.</li>
            </ul>
       <br>
       <br>     
        <p><strong>Judging Criteria:</p></strong><br>
        <p> The participant who finds and quickly debugs a bug will be considered the winner.</p>

<br>
<br>
 <p><strong>Contact:<br><br>
  STUDENT COORDINATORS:</strong></p>
 <ul>
 <li>Prasanth – 63795 97797</li>
 <li>Mahesh – 93452 18925.</li>
 <br>
 <p><strong>FACULTY COORDINATORS:</strong></p>
 <li>Mr. Shankaranarayanan – 99434 05421</li>

`,
"design-aura": `
 <h4>Design Aura</h4>

 <p>Welcome to "Design Aura," our college's premier design competition! Put your CAD skills to the test and showcase your creativity across two challenging rounds.</p>
 <br>
 
 <p><strong>Rules:</strong></p><br>
 <ul>
     <li>Work individually or in teams of up to 3 members.</li>
     <li>Submit your designs by the specified deadline.</li>
     <li>Use any design software or medium you're comfortable with.</li>
    <br><br>
     <li align=left>1. Enter the hall with your college ID.</li><br>
     <li align=left>2. Participants should be present in the hall 10 minutes before the competition. The number of participants in a team is 2 or 1.</li><br>
     <li align=left>3. Mobile phones should not be used during the competition.</li>
     <li align=left>4. Do not create any disturbances to others.</li><br>
     <li align=left>5. Any software can be used in the competition.</li><br>
     <li align=left>6. Participants should bring their own laptops. If not, contact the event coordinators one day in advance to arrange a system (we only have CREO software).</li><br>
     <li align=left>7. Participants opening other tabs during the competition will be disqualified.</li><br>
 </ul>
 <br>
 <br>
 <p><strong>Format of Rounds:</strong></p><br>
 <ul>
 <li align=left><strong>Round 1:</strong>
     The first round will test your basic knowledge in CAD software. Participants will be given a set of MCQs. Participants who clear the Round 1, move on to Round 2. (Duration: 30 minutes)</li><br>
 <li align=left><strong>Round 2:</strong>
     This is the final round. Participants will be shown an image of an assembled design from different views (top, front, side, and isometric). Without dimensions, participants must design and assemble the model as accurately as possible within the given time. (Duration: 60 minutes)</li></ul>
     <br><br>

<p><strong>Judging Criteria:</strong></p><br>
    <p>The participant whose model design is most accurate to the original model will be considered the winner.</p>

<br>
<br>
 <p><strong> Contact: <br><br>
 FACULTY CO-ORDINATOR: </strong></p>
 <ul>
 <li>Mr. A. John Leonard +91 78713 15131</li><br>
 <p><strong> STUDENT CO-ORDINATORS: </strong></p>
 <li>Joshua Samuel+91 78457 07279</li>
 <li>Sanjai +91 93441 87453</li>
</ul>     
 `,
 "free-fire": `
 <h4>Free Fire</h4>

 <p>In Free Fire, this event allows players to participate in teams of 4, 3, or 2.The team that eliminates the opposing team first will advance to the final round.</p>
<br>
 <p><strong>Rules:</strong></p>
 <br>
 <ul>
     <li>Form teams of up to 4 members.</li>
     <li>Follow the standard game rules and regulations.</li>
     <li>The team with the highest score wins.</li><br>
     <br>
     <li align=left>1. Participants without their college ID will not be permitted.</li><br>
     <li align=left>2. One team of max 4 members participant is allowed.</li><br>
     <li align=left>3.No hack should be used and it will be strictly monitored.</li><br>
     <li align=left>4.No disrespectful words should be spoken in the match or while playing.</li><br>
     <li align=left>5.No third party software should be used.</li>

 </ul>
 <br><br>
 <p><strong>Judging criteria:</p></strong><br>
 <p>
       Team which advances to the final round and wins the final round will be considered as the winner</p>
       <br>
 <p><strong>Contact:</strong></p><br>
 <ul>
  <li><strong>STUDENT COORDINATOR:</strong></li>
  <li>Hariharan:+91 88257 58298</li>
  <li>Sai prasath: 80729 86850</li>
 </ul>


`,
"shades-of-grey": `
 <h4>Shades of Grey</h4>
 <p>Dive into the timeless art of black and white photography! In this competition, participants capture the beauty and depth of subjects using the classic elegance of monochrome. Discover how light, shadow, and contrast transform ordinary scenes into extraordinary works of art Event format;</p>
 <br>
 <br>       
 <p><strong>Rules:</strong></p>
  <br>
 <ul>
     <li >Submit up to 3 photographs.</li>
     <li>Ensure all photos are in black and white.</li>
     <li>Provide a brief description of each photograph.</li>
     <br>
     <br>
 <li align=left>1. Participants without their college ID will not be permitted.</li> <br>
 <li align=left>2. Only one participant is allowed.</li> <br>
 <li align=left>3.Photo can be edited as black and white and they can also use editing software to improvise the photo.</li> <br>
 <li align=left>4.Only mobile phones are allowed for taking photos.</li> <br>
</ul>
<ul>
<br>
<br>
<p><strong>Format of Rounds</strong></p>
 <br>
     <li align=left><strong>Round 1:</strong>
          Participants are asked to take a black and white photo of a given on-the-spot topic within a specified time frame and within the campus. Based on their photos, they will be selected for the next round.</li> <br> <br>
     <li align=left><strong>Round 2:</strong>
          Participants will receive a different topic and must take a black and white photo based on that topic. The photo needs to be submitted within the given time frame. </li>
 </ul>
 
 <br> <br> <br>
<p><strong> Judging criteria:</strong></p><br>
        <p> Time taken to submit photo on time and quality of photo with the theme.
        </p>

 <br>
  <br>
  <p><strong>Contact:</strong></p><br>
  <ul>
  <li><strong>FACULTY CO-ORDINATOR</strong> Mr. John Leonard - 7871315131</li><br>
  <li><strong>STUDENT CO-ORDINATORS</strong></li>
  <li>Koushik Ganapathy S -78717 36976</li>
  <li>Abishek P - 70105 44168</li>



`,
"ipl-auction": `
 <h4>IPL Auction</h4>
 <p>ipl auction is the event where the participants bid the cricket players within the given amount shown in the picture whose team having well performing team will considered as a winner</p>
 
 <ul>
     <li >Form teams of up to 3 members.</li>
     <li>Each team will be given a fixed budget.</li>
     <li>Bid for players and manage your budget wisely.</li><br><br>
</ul>
     <p><strong>Format of Rounds</strong></p>
 <br>
 <ul>
     <li align=left><strong>Round 1:</strong>
          a set of multiple-choice questions based on cricket will be given to each team. Teams with the highest scores will qualify for the second round.</li><br><br>
     <li align=left><strong>Round 2:</strong>
          the selected teams auction players shown in the picture within their allotted budget.</li>

 </ul>
 <br>
 <br>
 <p><strong>Rules:</strong></p><br>
 <ul>
 <li align=left>1. Participants without their college ID will not be permitted.</li><br>
 <li align=left>2. One team of max 3 members participant is allowed.</li><br>
 <li align=left>3. 2 Rounds will be Conducted.</li><br>
 <li align=left>4. First Round will be Quiz.</li><br>
 <li align=left>5. The quiz comprises of 15 questions related to IPL.</li><br>
 <li align=left>6. The top 10 teams will be selected for second Round</li><br>
 <ul>

<br>

 <p><strong>Contact: </strong></p>
 <ul><br>
 <li><strong>FACULTY CO-ORDINATOR:</strong> Mr. S. Pradeep +91 9884647181</li><br>
 <li><strong>STUDENT CO-ORDINATORS:</strong></li>
 <li>Jaya Chandran +91 91763 77580</li>
 <li>Sanjay +91 8925334748</li>
 </ul>



`,
"guesstimate": `
 <h4>Guesstimate</h4>
 <p>Welcome to “GUESSTIMATE” an Entertaining Event, where your guesswork’s are estimated. There will be connection questions based on different topics.</p><br>
 <p><strong>Rules:</strong></p><br>
 <ul>
     <li>Participate individually or in teams of up to 2 members.</li>
     <li>Each problem will have a time limit.</li>
     <li>The participant/team with the most accurate estimates wins.</li><br><br>
     <li align=left>1.Participants without their college ID will not be permitted.</li><br>
     <li align=left>2.Each Team should involve Minimum 2 Members & Maximum 3 Members.</li><br>
     <li align=left>3.The Teams should be in the respective Hall 10 minutes before the competition.</li><br>
     <li align=left>4.Do not create any disturbances to other Teams.</li><br>
     <li align=left>5.Mobile phones should not be used during the competition.</li><br>
     <li align=left>6.The Teams which are lifting the plug cards first will be considered to answer first.</li><br>
     <li align=left>7. For 1 Question first 3 Teams who rise the plug card can the answer.</li><br>
     <li align=left>8.The teams answering the Wrong answer will get negative points.</li><br>
 </ul>
 <br>
 <p><strong>Format of Rounds:</strong></p><br>
 <ul>
 <li align=left>
 <strong >Round 1 :[prelims round]</strong>
 DURATION:30 Minutes - 
     This round will be conducted in batch wise (2 batches). For each batch the set questions will be asked and the teams will be shortlisted based on the points gained.</li><br><br>
 <li align=left>
  <strong>Round 2:[Grand Finale]</strong> DURATION:30Minutes - 
      This round is conducted as a whole. A set of questions will be asked and the first three teams will be awarded based on the points</li>
 <li>
 <br><br>

 <p><strong>Judging Criteria:</strong></p><br>
    <p> Marks will be awarded if the answer is correct. Negative marks will be given for wrong answer.</p>
 <br>

 <p><strong>Contact: </strong></p>
 <ul><br>
 <p><strong> FACULTY CO-ORDINATOR:</strong></p>
 <ul>
 <li>Pradeep Kumar +91 98846 47181</li>
 </ul><br>
 <p><strong>STUDENT CO-ORDINATORS:</strong></p>
 <ul>
 <li>KARTHICK V G +91 7448428248 BEN SURESH C +91 9384439853</li>
 </ul>
   `,
        "sae-workshop": 
        `
        <h4>SAE Workshop</h4>
        <p>Have you ever wondered Workshops Learn from the best! Join us for the SAE Workshop  and Don't miss this opportunity to learn and network with industry experts!</p>
        <br>
        <p><strong>Contact:</strong>+91 7448428248</p>
        <br>
    `,
    "project-expo": `
        <h4>Project Expo</h4>
        <p>In this event the participants should showcase their projects and points will be awarded for the innovative ideas.</p>
        <br>
        <p><strong>Rules:</strong></p><br>
        <ul>
            <li>Register as a team or individually.</li><br>
            <li>Prepare a presentation and demonstration of your project.</li><br>
            <li>Interact with judges and answer their questions.</li><br>

        </ul>
        <br>
        <p><strong>Contact:</strong>+91 9384439853 </p>
        
    `
    };

    function handleEventButtonClick(category) {
        eventList.innerHTML = eventData[category];
        const eventItems = document.querySelectorAll(".event-item");
        eventItems.forEach(item => {
            item.addEventListener("click", () => {
                const eventId = item.dataset.id;
                const eventDetail = document.querySelector(`#${eventId}-details`);
                if (eventDetail) {
                    eventDetail.innerHTML = eventDetailsData[eventId];
                    eventDetail.classList.add("show");
                }
            });
        });
    }

    eventButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.dataset.category;
            handleEventButtonClick(category);
        });
    });
});


document.querySelectorAll('.event-item').forEach(item => {
    item.addEventListener('click', function() {
        // Hide all event details
        document.querySelectorAll('.event-details').forEach(detail => {
            detail.classList.remove('show');
        });

        // Show the clicked event's details
        const eventDetail = this.nextElementSibling;
        if (eventDetail) {
            eventDetail.classList.add('show');
        }
    });
});

// Toggle Event Information
const eventButtons = document.querySelectorAll('.event-category button');
const eventInfos = document.querySelectorAll('.event-info');

eventButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        eventInfos.forEach((info, infoIndex) => {
            if (index === infoIndex) {
                info.classList.toggle('show');
            } else {
                info.classList.remove('show');
            }
        });
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.onload = function() {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("content").style.display = "block";
};
