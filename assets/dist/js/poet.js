const adjective = ["invincible","stormy","helpful","safe","well","scattered","chilly","unequal","finicky","spiritual","rainy","hulking","idiotic","feeble","recondite","equable","nonstop","icky","ludicrous","teeny","false","evasive","accurate","lackadaisical","elderly","heavy","spiteful","simple","protective","valuable","obscene","knowledgeable","annoyed","tacky","private","distinct","typical","irritating","realistic","hurried","difficult","mellow","tricky","panoramic","miniature","legal","grieving","astonishing","light","successful","countryside","doctor","forest","artificial","river","assignment","photography","chain","feel","kneel","epicalyx","bottle","paradox","answer","beam","productive","mountain","roll","story","ferry","energy","extort","fastidious","linen","compensation","attract","moving","cane","representative","engine","concentration","drill","sample","fuel","greet","hypothesize","divorce","initial","virus","arise","shot","medicine","volcano","mastermind","custody","discreet","slot","huge","absorption","launch"]
const noun = ["suggestion","guitar","historian","policy","garbage","village","bird","son","attention","customer","discussion","hotel","information","teacher","inspection","device","hair","dad","education","judgment","phone","pollution","unit","atmosphere","society","inflation","situation","poet","analyst","description","midnight","lady","church","childhood","owner","personality","trainer","artisan","ratio","responsibility","magazine","world","replacement","guest","stranger","language","engineering","writer","error","video","mixture","queen","candidate","length","contribution","engine","conversation","coffee","population","disaster","opportunity","music","night","reading","management","garbage","intention","shopping","bath","exam","instance","artisan","location","membership","assistance","aspect","enthusiasm","affair","series","arrival","message","finding","year","studio","problem","apartment","economics","woman","beer","scene","responsibility","town","investment","politics","system","marketing","cancer","suggestion","tale","river",]
const verb = ["perform","mark","wander","cast","talk","report","recognize","rush","jump","warm","differ","praise","allocate","blossom","seal","guarantee","promote","suggest","expand","obey","collect","punish","illustrate","wish","hit","bind","realize","counter","perceive","swim","adapt","weaken","bend","print","opt","preserve","aim","ignore","squeeze","found","worry","brainstorm","investigate","cling","like","separate","fulfil","paint","prompt","solve","supplement","adjust","hunt","observe","keep","divert","remain","recognize","reply","value","suppose","qualify","compare","trust","function","spend","fold","contrast","bear","satisfy","shift","look","suspect","regret","spoil","change","talk","precede","lie","cool","formulate","endorse","breed","dislike","measure","reduce","think","conceal","design","tip","expand","adopt","complain","roll","flood","bury","approve","pour","swear","tighten",]
const adverb = ["properly","loyally","readily","certainly","gleefully","nearly","poorly","sternly","majestically","anxiously","recently","energetically","naturally","upright","however","lightly","unnaturally","tediously","voluntarily","owlishly","rarely","rudely","shrilly","always","mainly","deeply","vainly","daily","lovingly","necessarily","immediately","unimpressively","needily","scarcely","limply","seemingly","not","perfectly","brightly","adventurously","victoriously","gently","hopefully","miserably","quickly","jubilantly","sleepily","everywhere","urgently","somewhat","physically","wisely","joyously","very","possibly","effectively","frequently","lazily","loudly","furiously","actually","anyway","awkwardly","weekly","intensely","utterly","zestfully","fiercely","carelessly","wonderfully","fervently","rather","bitterly","thus","together","usefully","constantly","curiously","knowledgeably","enthusiastically","unexpectedly","arrogantly","crossly","coyly","soon","essentially","tenderly","likely","acidly","slowly","partially","heavily","intently","dearly","below","bleakly","vastly","moreover","violently","similarly",]

document.addEventListener('DOMContentLoaded', (event) => {
    let button = document.getElementById("poet");    
    let userButton = document.getElementById("userpoet");
    function poetry() {
        let sheet = document.getElementById("poem");
        newSentence = "The " + adjective[Math.floor(Math.random()*adjective.length)] + " " + noun[Math.floor(Math.random()*noun.length)] + " " + verb[Math.floor(Math.random()*verb.length)] + " " + adverb[Math.floor(Math.random()*adverb.length)] + "<br>";
        sheet.innerHTML += newSentence;
    };
    button.addEventListener("click",poetry);
    
    function userPoet() {
        let sheet = document.getElementById("poem");
        let userAdjective = document.getElementById("adjective").value;
        let userNoun = document.getElementById("noun").value.split(" ");
        let userVerb = document.getElementById("verb").value.split(" ");
        let userAdverb = document.getElementById("adverb").value.split(" ");
        newSentence = "The " + userAdjective[Math.floor(Math.random()*userAdjective.length)] + " " + userNoun[Math.floor(Math.random()*userNoun.length)] + " " + userVerb[Math.floor(Math.random()*userVerb.length)] + " " + userAdverb[Math.floor(Math.random()*userAdverb.length)] + "<br>";
        sheet.innerHTML += newSentence;
    }

    button.addEventListener("click",poetry);
    userButton.addEventListener("click",userPoet);

})