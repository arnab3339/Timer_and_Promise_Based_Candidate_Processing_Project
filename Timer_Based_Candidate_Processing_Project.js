
//Candidate Data>>>>>>>>>>>>>>>>>

const candidates = [
  {
    id: 1,
    name: "Aman",
    email: "aman@example.com",
    testScore: 78,
    interviewScore: 72,
    status: "pending",
  },
  {
    id: 2,
    name: "Riya",
    email: "riya@example.com",
    testScore: 88,
    interviewScore: 84,
    status: "pending",
  },
  {
    id: 3,
    name: "Soham",
    email: "soham@example.com",
    testScore: 65,
    interviewScore: 70,
    status: "pending",
  },
  {
    id: 4,
    name: "Nisha",
    email: "nisha@example.com",
    testScore: 92,
    interviewScore: 89,
    status: "pending",
  },
  {
    id: 5,
    name: "Arjun",
    email: "arjun@example.com",
    testScore: 74,
    interviewScore: 76,
    status: "pending",
  },
];

//1>>>>>>>>>>>>>>>>>    Announce Candidate   ---------------

function announceCandidate(candidate, delay){
    setTimeout(()=>{
        console.log("Candidate: ",candidate.name);
        console.log("Email: ", candidate.email);
    },delay);
}
announceCandidate(candidates[0],2000);

//2>>>>>>>>>>>>>>>>     Schedule Status Update    ----------------

function scheduleStatusUpdate(candidate, newStatus,delay){
  setTimeout(()=>{
    candidate.status=newStatus;
    console.log(candidate);
  },delay);
}
scheduleStatusUpdate(candidates[1],"reviewed",1500);

//3>>>>>>>>>>>>>>> Start Candidate Countdown    ----------------

function startCandidateCountdown(candidate,seconds){
  const timer=setInterval(()=>{
    if(seconds>0){
      console.log(`Review for ${candidate.name} starts in ${seconds} seconds`);
      seconds--;
    }else{
      console.log(`Candidate review started for ${candidate.name}`);
      clearInterval(timer);
    }
  },1000);
}
startCandidateCountdown(candidates[2],3);

//4>>>>>>>>>>>>>>>    Schedule Candidate Remainders    ---------------

function scheduleCandidateRemainders(candidates,gap){
  let index=0;
  const timer=setInterval(()=>{
    if(index<candidates.length){
      console.log(`Remainder sent to ${candidates[index].name}`);
      index++;
    }else{
      console.log("All remainders completed");
      clearInterval(timer);
    }
  },gap);
}
scheduleCandidateRemainders(candidates,1000);

//5>>>>>>>>>>>>>>    Create Cancelable Review    --------------

function createCancelableReview(candidate,delay){
  const timerID=setTimeout(()=>{
    console.log(`Review message for ${candidate.name}`);
  },delay);
  return timerID;
}
const timerID=createCancelableReview(candidates[3],3000);
clearTimeout(timerID);