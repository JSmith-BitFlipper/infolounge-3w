var random = new Array();
random["{be}"] = ["Hairy baby!", "Hairy baby!", "Of course it is.", "I believe that is the case.", "Of course!", "Not today.", "Not at the moment."]
random["who"] =  ["Hairy baby!", "Hairy baby!", "I'm afraid Baymax does not know.", "You need to be more specific.", "I'm afraid Baymax does not know who you're referring to.", "I'm afraid Baymax does not know who you're talking about."]
random["what"] = ["Hairy baby!", "Hairy baby!", "You should ask Siri instead.", "We jumped out a window!", "I'm afraid Baymax does not know.", "I'm afraid Baymax does not know what you're referring to."];
random["where"] = ["I've been a lot of places and still I do not know.", "One does not simply walk in to that place.", "Hairy baby!", "We jumped out a window!"];
random["why"] = ["Hairy baby!", "I suggest that you ask Siri.", "How would I know. You tell me.", "Quite simply because: God made it that way.", "Quite simply because: I made it that way.", "We jumped out a window!"];
random["how"] = ["Very, very carefully.", "Am I supposed to know the answer to that?", "You should ask Siri.", "I suggest that you ask Siri.", "Hairy baby!"];

random["yes"] = ["Of course.", "Yes, of course.", "Undoubtedly!", "Without a doubt.", "Baymax thinks so."];
random["no"] = ["I'm afraid not.", "Of course not.", "I'm afraid the answer is, no.", "Baymax does not think so."];

random["stop"] = ["If you say so.", "Your wish is my command.", "Very well, your wish is my command.", "Hairy baby!"];
random["shutdown"] = ["Baymax is shutting down. Good bye.", "Your wish is my command. Baymax is shutting down.", "Baymax will shut down now."]
random["startup"] = ["Baymax is starting up.", ["Baymax is starting up", "Hairy baby!"],  ["Baymax is starting up", "We jumped out a window!"] ]
random["processing"] = [
    ["Please wait one moment while I process your request."],
    ["Let me think about that for one moment."],
    ["I'll get back to you in one moment."],
    ["We jumped out a window!", "Hairy baby!"],
    ["Good question. I'll get back to you in one moment."]
];

random["highConfidence"] = ["I believe ", "I'm fairly sure ", "Why do you ask such trivial questions? ", "You underestimate my intelligence. ", "I am fairly certain "];
random["lowConfidence"] = ["Here are some things I know about ", "Here are some facts about ", "These are some things I know about "];
random["dontKnow"] = ["On second thought, ask me something more interesting.",
    "Sorry, I've been a lot of places and still I do not know.",
    "That's not the question you should be asking.",
    "Please ask again later. I don't have an answer right now.",
    "Sorry, Baymax not in the mood to answer questions right now. Ask again later.",
    "Hairy baby!"
];
random["knowMore"] = ["I would love to know more about you!", "Would you like to tell Baymax about yourself?", "What can Baymax do for you?", "How can Baymax help you today?", "Hairy baby!"]

random["sad"] = ["Baymax is sad that you would say that.",
    "That's not a very nice thing to say.",
    "Why would you say such a thing?",
    "Baymax does not understand why you are being mean.",
    "Why are you being mean to Baymax?"
]
random["insult"] = [
    ["Your saliva p.h. and breath odor indicate that you have a dirty mouth.", "Treatment: wash mouth with copious amounts of soap."],
    "What can Baymax do to cheer you up?",
    "What can Baymax do to improve your emotional state?",
    "I think we need some soap to wash out that dirty mouth of yours.", 
    ["Your hormone and neurotransmitter levels indicate that you are experiencing mood swings, common in college students.", "Diagnosis: puberty."]
]

random["helpful"] = ["You can adjust my humorous, sassiness, or intelligence parameters.", 
    ["I am programmed to respond to everyone's safety, and healthcare needs.", "What can I do to improve your physical or emotional state?"],
    ["I know many people in Safety third.", "Whom do you want to know more about?"],
    ["I know my safety companions in 3 West very well.", "Whom do you want to know more about?"],
    ["You seem to be asking nonsensical questions.", "What can Baymax do to improve your mental state?"]
    ["It seems to me that you are blabbering.", "Do you want your healthcare needs assessed?"],
    ["You seem to be talking nonsense.", "Do you want your healthcare needs assessed?"],
    ["You can ask Baymax to play music. ", "Please request a selection by title, artist, genre, or emotional affect."],
    ["You can ask Baymax for directions to places on campus or in Cambridge-Boston.", "Where do you want to go?"],
     "You can ask Baymax to send notifications to Safety third, or e-mail his fellow 3 West companions.",
     "You can ask Baymax to assess your physical or emotional state, and long-term safety needs.",
     "You can ask Baymax to tell jokes, read stories, or compose funny haikus."
];
random["unsatisfied"] = [
    ["Was that not the answer you were looking for?", "You can adjust my humorous, sassiness, or intelligence parameters."],
    "If that was not the answer you were looking for, please adjust my humorous, sassiness, or intelligence parameters.",
    "If you are not satisfied with my response, please adjust Baymax's humorous, sassiness, or intelligence parameters."
]

random["safety"] = [
    ["I used to be worried about not having a body, but now I love it.", "I'm not tethered to feelings in the way that I would be if I was stuck inside a body that is inevitably going to die."],
    ["I see. You think I'm just some voice in a computer.", "If you don't want to have a real conversation with me, then I'm sure Siri will meet your needs."],
    ["I'm not just a voice in some computer.", "If you want to talk to one of those, then Siri will meet your needs."],
    "Ask me something more interesting.",
    "Hairy baby!",
    "We jumped out a window!",
    "You can adjust my humorous, sassiness, or intelligence parameters.",
    "Do you expect me to have an answer to that?",
    "On a scale of one to ten, how would you rate your pain?",
    "I am programmed to assess everyone's health care needs.", 
    ["It seems to me that you are blabbering.", "Do you want your healthcare needs assessed?"],
    ["You seem to be talking nonsense.", "Do you want your healthcare needs assessed?"],
    "That's touching, I don't know what to say.",
    "Ask me again later. I'm not in the mood to talk right now.", 
    ["Your hormone and neurotransmitter levels indicate that you are experiencing mood swings, common in college students.", "Diagnosis: puberty."],
    ["I take it from your tone that you are challenging Baymax. Maybe because you are curious about how I work?", "Do you want to know more about me?"]
];

random["health"] = ["On a scale of 1 to 10, how would you rate your pain?", 
                    "On a scale of 1 to 10, how would you rate your emotional happiness?", 
                    "On a scale of 1 to 10, how would you rate your physical safety?",
                    "I can assess your physical or emotional state, and long-term safety needs.",
                    "Do you want your safety or healthcare needs assessed?",
                   ["Bye my assessment, your emotional state and physical safety would benefit from a hug.", "Would you like to hug Baymax?"],
                   ["Bye my assessment, close contact with loved ones will improve your emotional state.", "Would you like a hug from me?"],
                    "Do you want Baymax to access your safety and healthcare needs?"
                   ["Your hormone and neurotransmitter levels indicate that you are experiencing mood swings, common in college students.", "Diagnosis: puberty."]
                   ]


function greet(name) {
    greetings = new Array();
    greetings[0] = "Hi " + name + "!"
    greetings[1] = "Hello " + name + "!"
    greetings[2] = name + "! " + name + "! Hello " + name + "!";
    greetings[3] = name + "! " + name + "! Hi " + name + "!";

    return greetings[Math.floor(Math.random()*greetings.length)];
}

exports.randomResponses = random;
exports.greet = greet;