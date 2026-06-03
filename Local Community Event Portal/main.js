console.log("Welcome to the Community Portal");
window.onload = function ()
{
    alert("Page Loaded Successfully!");
};
const eventName = "Tree Plantation Drive";
const eventDate = "10-06-2026";
let seats = 50;
console.log(
`Event Name: ${eventName},
Event Date: ${eventDate},
Available Seats: ${seats}`
);
seats--;
console.log(
`Seats Remaining: ${seats}`
);
const eventList = [
{
name:"Tree Plantation Drive",
seats:50,
upcoming:true
},
{
name:"Health Awareness Camp",
seats:0,
upcoming:true
},
{
name:"Community Sports Meet",
seats:25,
upcoming:true
},
{
name:"Cultural Festival",
seats:10,
upcoming:false
}
];
eventList.forEach(function(event)
{
if(event.upcoming && event.seats>0)
{
console.log(
`${event.name} Available`
);
}
else
{
console.log(
`${event.name} Hidden`
);
}
});
try
{
let availableSeats=0;
if(availableSeats<=0)
{
throw "Registration Closed";
}
availableSeats--;
}
catch(error)
{
console.log(error);
}
function addEvent(name,category)
{
console.log(
`${name} added in ${category}`
);
}
function registerUser(user,event)
{
console.log(
`${user} registered for ${event}`
);
}
function filterEventsByCategory(events,callback)
{
return events.filter(callback);
}
addEvent(
"Tree Plantation Drive",
"Environment"
);
registerUser(
"Pavi",
"Community Sports Meet"
);
const categoryResult=
filterEventsByCategory(
eventList,
function(event)
{
return event.name.includes("Community");
}
);
console.log(categoryResult);
function registrationCounter(category)
{
let total=0;
return function()
{
total++;
console.log(
`${category} Registrations : ${total}`
);
};
}
const sportsCounter=
registrationCounter("Sports");
sportsCounter();
sportsCounter();
sportsCounter();
class Event
{
constructor(name,date,seats)
{
this.name=name;
this.date=date;
this.seats=seats;
}
}
Event.prototype.checkAvailability=
function()
{
if(this.seats>0)
{
console.log(
`${this.name} Available`
);
}
else
{
console.log(
`${this.name} Full`
);
}
};
const eventObj=
new Event(
"Community Sports Meet",
"15-06-2026",
25
);
eventObj.checkAvailability();
Object.entries(eventObj)
.forEach(function(entry)
{
console.log(
entry[0]+" : "+entry[1]
);
});
let communityEvents=[
"Tree Plantation Drive",
"Health Awareness Camp",
"Community Sports Meet",
"Cultural Festival"
];
communityEvents.push(
"Music Festival"
);
console.log(communityEvents);
let musicEvents=
communityEvents.filter(
event =>
event.includes("Music")
);
console.log(musicEvents);
let displayCards=
communityEvents.map(
event =>
`Workshop on ${event}`
);
console.log(displayCards);
const container=
document.querySelector(
"#eventContainer"
);
communityEvents.forEach(
function(event)
{
let card=
document.createElement("div");
card.innerHTML=event;
card.style.border=
"1px solid black";
card.style.margin=
"5px";
card.style.padding=
"10px";
container.appendChild(card);
}
);
document.getElementById("preferredEvent")
.onchange = function ()
{
    console.log(
        "Selected Event: " + this.value
    );
};
function fetchEvents()
{
    console.log("Loading Events...");

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data =>
    {
        console.log("Events Loaded:");
        console.log(data.slice(0,5));
    })
    .catch(error =>
    {
        console.log("Error fetching events");
    });
}
fetchEvents();
const eventName2 = "Community Sports Meet";
const eventInfo = {
    eventName,
    location: "City Ground",
    seats: 50
};
const { eventName: name, seats:seatCount } = eventInfo;
console.log(name, seatCount);
const newEvents = ["A", "B"];
const allEvents = [...newEvents, "C", "D"];
console.log(allEvents);
document.querySelector(".form-container form")
.addEventListener("submit", function(e)
{
    e.preventDefault();
    let inputs = this.elements;
    let name = inputs[0].value;
    let email = inputs[1].value;
    if(name === "" || email === "")
    {
        alert("Fill all fields");
    }
    else
    {
        alert("Registration Successful");
    }
});
function sendRegistration()
{
    let data =
    {
        name: "Pavi",
        event: "Community Sports Meet"
    };
    fetch("https://jsonplaceholder.typicode.com/posts",
    {
        method: "POST",
        body: JSON.stringify(data),
        headers:
        {
            "Content-type":"application/json"
        }
    })
    .then(res => res.json())
    .then(result =>
    {
        console.log("Success:", result);
    })
    .catch(err =>
    {
        console.log("Error sending data");
    });
}
sendRegistration();
console.log("Debug Mode Started");
function debugForm()
{
    console.log("Form checking...");
    let phone =
    document.getElementById("phone")?.value;
    console.log("Phone:", phone);
}
debugForm();
$(document).ready(function()
{
    console.log("jQuery Loaded");

    $("#preferredEvent").click(function()
    {
        console.log("Dropdown clicked");
    });
    $("#welcomeBanner").hide().fadeIn(1000);
});