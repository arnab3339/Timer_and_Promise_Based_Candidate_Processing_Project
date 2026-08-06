
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

//1>>>>>>>>>>>>>>> Find Candidate By ID  ---------------

function findCandidateById(candidates,id){
    return new Promise((resolve, reject)=>{
        const candidate=candidates.find((c)=>c.id===id);
        if(candidate){
            resolve(candidate);
        }else{
            reject(new Error("Candidate Not Found"));
        }
    });
}
findCandidateById(candidates,1).then((candidate)=>console.log(candidate)).catch((error)=>console.error(error.message));

//2>>>>>>>>>>>>>> Validate Candidate Score   -------------

function validateCandidateScore(candidate){
    return new Promise((resolve, reject)=>{
        if(candidate.testScore<0 || candidate.testScore>100){
            reject(new Error("Test score must be between 0 and 100"));
            return;
        }if(candidate.interviewScore<0 || candidate.interviewScore>100){
            reject(new Error("Interview score must be between 0 and 100"));
            return;
        }
        resolve(`Scores are valid for ${candidate.name}`);
    });
}
validateCandidateScore(candidates[1]).then((message)=>console.log(message)).catch((error)=>console.error(error.message));

//3>>>>>>>>>>>>>> Calculate Final Score   -----------

function calculateFinalScore(candidate){
    return new Promise((resolve,reject)=>{
        if(candidate.testScore===undefined||candidate.interviewScore===undefined){
            reject(new Error("Score fields are required"));
            return;
        }
        const finalScore=(candidate.testScore*0.6)+(candidate.interviewScore*0.4);
        resolve({
            name: candidate.name,
            finalScore: finalScore
        });
    });
}
calculateFinalScore(candidates[2]).then((result)=>console.log(result));

//4>>>>>>>>>>>>> Update Candidate Status   ---------------

function updateCandidateStatus(candidate, newStatus){
    return new Promise((resolve, reject)=>{
        const allowedStatus=[
            "pending",
            "reviewed",
            "shortlisted",
            "rejected"
        ];
        if(!allowedStatus.includes(newStatus)){
            reject(new Error("Invalid Candidate Status"));
            return;
        }
        candidate.status=newStatus;
        resolve(candidate);
    });
}
updateCandidateStatus(candidates[4],"shortlisted").then((candidate)=>console.log(candidate));

//5>>>>>>>>>>>>>>>   Process Candidate   --------------

function processCandidate(candidates,id){
    return findCandidateById(candidates,id).then((candidate)=>{
        return validateCandidateScore(candidate).then(()=>candidate);
    }).then((candidate)=>{
        return calculateFinalScore(candidate).then((result)=>{
            return{
                id: candidate.id,
                name: candidate.name,
                finalScore: result.finalScore,
                status:result.finalScore>=75 ? "shortlisted":"rejected"
                };
            });
        });
}
processCandidate(candidates, 1)
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message))
    .finally(() => console.log("Processing completed"));

//6>>>>>>>>>>>>>> Process All Candidates  ----------------

function processAllCandidates(candidates){
    const promises=candidates.map((candidate)=>processCandidate(candidates,candidate.id));
    return Promise.all(promises);
}
processAllCandidates(candidates)
.then((results)=>console.log(results))
.catch((error)=>console.error(error.message));

