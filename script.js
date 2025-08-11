// teams button
let b = document.getElementById("teams");
let fix = document.getElementById("fixb");
let rl = document.getElementById("Rules");

rl.addEventListener("click", () => {
  let c = document.getElementById("con");
  let temp = document.getElementById("card");
  let rls = document.getElementById("rule");
  if (rls.style.display === "none") {
    temp.style.display = "none";
    c.style.display = "none";
    rls.style.display = "block";
  }
  else{
    temp.style.display = "none";
    c.style.display = "none";
    rls.style.display = "none";
  }
})

b.addEventListener("click", () => {
  let c = document.getElementById("con");
  let temp = document.getElementById("card");
  let rls = document.getElementById("rule");

  if (c.style.display === "flex") {
    temp.style.display = "none";
    c.style.display = "none";
    rls.style.display = "none";
  } else {
    c.style.display = "flex";
    temp.style.display = "none";
    rls.style.display = "none";
  }
});

fix.addEventListener("click", () => {
  let c = document.getElementById("con");
  let temp = document.getElementById("card");
  let rls = document.getElementById("rule");
  
  if (temp.style.display === "block") {
    temp.style.display = "none";
    c.style.display = "none";
    rls.style.display = "none";
  } else {
    temp.style.display = "block";
    c.style.display = "none";
    rls.style.display = "none";
  }
});


function addmatch(i, t1, t2) {
  let t4 = t1+"icon";
  let t3 = t2+"icon";

  var html = `<div id="matchup">
<div id="matchno">${i}</div>
<div id="team1"><img id = "timg" src = "${window[t4]}"; style ="height:90%"></div>
<div id="vs">VS</div>
<div id="team2"><img id = "timg" src="${window[t3]}"; style ="height:90%"></div>
</div>`;

  var ihtml = document.getElementById("scr").innerHTML;
  document.getElementById("scr").innerHTML = ihtml + html;
  // var allmatches = document.getElementById("scr").innerHTML;
}

var liverpoolicon = `	https://cdn.worldvectorlogo.com/logos/liverpool-fc-4.svg`;
var realmadridicon = `https://brandlogos.net/wp-content/uploads/2021/12/Real-Madrid-CF-logo.png`;
var mancityicon = `https://www.mancity.com/dist/images/logos/crest.svg`;
var psgicon = `https://media.psg.fr/image/upload/c_limit,w_129/f_avif/q_75/v1/psg-logo_avcznk?_a=BAVAZGE70`;
var barcelonaicon = `https://cdn.worldvectorlogo.com/logos/fc-barcelona.svg`;
var astonvillaicon = `https://cdn.worldvectorlogo.com/logos/aston-villa.svg`;
var intermilanicon = `https://cdn.worldvectorlogo.com/logos/inter-milan-2021.svg`;
var arsenalicon = `https://cdn.worldvectorlogo.com/logos/arsenal-7.svg`;
var bayernmunichicon = `https://brandlogos.net/wp-content/uploads/2013/10/fc-bayern-munchen-vector-logo.png`;
var bayerleverkusenicon = `https://cdn.bayer04.de/static/images/bayer-logo.svg`;
var atleticomadridicon = `https://brandlogos.net/wp-content/uploads/2021/09/atltico-madrid-logo-768x768.png`;
var ajaxicon = `https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Logo_AFC_Ajax_%281928-1991%2C_2025-%29.png/800px-Logo_AFC_Ajax_%281928-1991%2C_2025-%29.png`;
var dortmundicon = `https://www.bvb.de/etc.clientlibs/bvbweb/clientlibs/clientlib-site/resources/images/bvb-logo.svg`;
var atalantaicon = `https://en.atalanta.it/_next/image?url=https%3A%2F%2Fimages.atalanta.it%2Fimage%2Fprivate%2Ft_q-best%2Fv1717072378%2Fprd%2Fassets%2Fbrand%2Fatalanta-logo.png&w=128&q=75`;
var chelseaicon = `https://clublogos.stadion.io/assets/ClubLogos/Football/English/630.png`;
var juventusicon = `https://www.juventus.com/images/image/upload/f_auto/dev/assets/logo/juventus_logo_white`;
var monacoicon = `https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/LogoASMonacoFC2021.svg/203px-LogoASMonacoFC2021.svg.png`;
var napoliicon = `https://cdn.sscnapoli.it/wp-content/uploads/2024/07/LogoNapoli-1.png`;
var newcastleicon = `https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/323px-Newcastle_United_Logo.svg.png`;
var psvicon = `https://www.psv.nl/upload/e14b4a6d-0cd8-419a-af7f-7942b1e75f6d_PSV_logo_color.svg`;
var sportingicon = `https://cdn.worldvectorlogo.com/logos/sporting-clube-de-portugal-3.svg`;
var spursicon = `https://cdn.worldvectorlogo.com/logos/tottenham-hotspur.svg`;
var villarealicon = `https://tmssl.akamaized.net//images/wappen/homepageWappen150x150/1050.png?lm=1408655310`;
var athleticicon = `https://cdn.athletic-club.eus/imagenes/escudos/Athletic-club.png`;
var frankfurticon = `https://spieledb.eintracht.de/teams/logos/159/medium_square/200px-Eintracht_Frankfurt_Logo.svg.png`;
var galatasarayicon = `https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Galatasaray_Sports_Club_Logo.svg/687px-Galatasaray_Sports_Club_Logo.svg.png`;
var marseilleicon = `https://www.om.fr/themes/custom/om/logo.svg`;
var olympiacosicon = `https://ssl.gstatic.com/onebox/media/sports/logos/FqnQ9nu7UDiSgnXKohdIgg_96x96.png`;
var slaviaicon = `https://slavia.esports.cz/files/logos/sla.png`;
var rusgicon = `https://rusg.brussels/themes/custom/rusg/logo.png`;
var celticicon = `https://images.webapi.gc.celticfc.com/fit-in/200x200/063c47d0-4a7e-11ea-914a-93b877196a34.png`;
var rangersicon = `https://clublogos.stadion.io/assets/ClubLogos/Football/Scottish/67.svg`;
var benficaicon = `https://media.slbenfica.pt/-/media/images/slb-logo-new.svg?v=638097287260000000`;
var feyenoordicon = `https://www.feyenoord.com/_next/image?url=https%3A%2F%2Fdam.feyenoord.nl%2Fm%2F64e3a60dc7f314a8%2FGroot_logo-Feyenoord_logo.png&w=128&q=75`;
var niceicon = `https://cdn.worldvectorlogo.com/logos/nice-fc.svg`;
var realbetisicon = `https://en.realbetisbalompie.es/media/img/graphics/new_logos/logo_shield.svg`;
// var lilleicon = `https://www.losc.fr/sites/default/files/media/images/Logo-150.png`;

var allteams = [
  mancityicon, barcelonaicon,psgicon, 
  astonvillaicon, intermilanicon, 
  bayernmunichicon, arsenalicon, 
  realmadridicon, bayerleverkusenicon, 
  atleticomadridicon, liverpoolicon, 
  dortmundicon, ajaxicon, 
  atalantaicon, chelseaicon, 
  monacoicon, juventusicon, 
  napoliicon, newcastleicon, 
  psvicon, sportingicon, 
  spursicon, villarealicon, 
  athleticicon, frankfurticon, 
  marseilleicon, galatasarayicon, 
  olympiacosicon, slaviaicon, 
  rusgicon, celticicon, 
  benficaicon, rangersicon, 
  feyenoordicon, niceicon, realbetisicon
]

var teamNames = [
  "Manchester City", "Barcelona","Paris-Saint-Germain",
  "Aston Villa", "Inter Milan",
  "Bayern Munich", "Arsenal",
  "Real Madrid", "Bayer Leverkusen",
  "Atletico Madrid", "Liverpool",
  "Borussia Dortmund", "Ajax",
  "Atalanta", "Chelsea",
  "Monaco", "Juventus",
  "Napoli", "Newcastle United",
  "PSV Eindhoven", "Sporting CP",
  "Tottenham Hotspur", "Villarreal",
  "Athletic Club", "Eintracht Frankfurt",
  "Marseille", "Galatasaray",
  "Olympiacos", "Slavia Prague",
  "Union Saint-Gilloise", "Celtic",
  "Benfica", "Rangers",
  "Feyenoord", "Nice", "Real Betis"
]

const boxes = document.querySelectorAll(".box");
const txt = document.querySelectorAll(".sp");   

for(let idx =0;idx<9;idx++)
{
var tmp = 
`<div class="box"><img id = "imgid" src = "${allteams[4*idx]}" style="height: 90%;" alt=""></div>
<div class="box"><img id = "imgid" src = "${allteams[4*idx+1]}" style="height: 90%;" alt=""></div>
<div class="box"><img id = "imgid" src = "${allteams[4*idx+2]}" style="height: 90%;" alt=""></div>
<div class="box"><img id = "imgid" src = "${allteams[4*idx+3]}"  style="height: 90%;" alt=""></div>
<div id="nm">
<div class="sp">${teamNames[4*idx]}</div>
<div class="sp">${teamNames[4*idx+1]}</div>
<div class="sp">${teamNames[4*idx+2]}</div>
<div class="sp">${teamNames[4*idx+3]}</div>
</div>`;

  var conC = document.getElementById("con").innerHTML;
  document.getElementById("con").innerHTML = conC+tmp;   
}


// ---------------------------------------
// addmatch(1,"liverpool","realmadrid");
// JavaScript translation of the Java code, line-by-line without improvements

function clubCheck(st, st2) {
  if (st === st2) return true;
  const leagues = [
    ["realmadrid", "atleticomadrid", "barcelona", "villareal", "atheletic", "realbetis"],
    ["mancity", "liverpool", "astonvilla", "arsenal","chelsea","newcastle","spurs"],
    ["intermilan", "juventus", "napoli", "atalanta"],
    ["frankfurt", "bayerleverkusen", "dortmund", "bayernmunich"],
    ["psg", "monaco", "nice","marseille"],
    ["feyenoord", "psv","ajax"],
    ["benfica", "sporting"],
    ["celtic", "rangers"]
  ];
  return leagues.some(group => group.includes(st) && group.includes(st2));
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function checkst(S1,S2,st){
  for(let i = 0;i<9;i++){
      if (S1 === st[i] || S2 === st[i]) {
          return true;
      }
  }
  return false;
}

function fixtures(tempSet, pot, Matches, st, i) {
  if (i >= pot.length) {
    for (let j = 0; j < st.length; j++) {
      Matches.add(st[j]);
    }
    return true;
  }

  if (tempSet.size === 0) return false;

  for (const s of Array.from(tempSet)) {
    if (
      clubCheck(pot[i], s) ||
      Matches.has(`${pot[i]} vs ${s}`) ||
      Matches.has(`${s} vs ${pot[i]}`) || checkst(`${pot[i]} vs ${s}`,`${s} vs ${pot[i]}`,st)
    ) {
      continue;
    }

    st[i] = `${pot[i]} vs ${s}`;
    tempSet.delete(s);

    if (fixtures(new Set(tempSet), pot, Matches, st, i + 1)) return true;

    tempSet.add(s);
  }
  return false;
}

let matchCounter = 1;
function allocateFixtures(matchday, p1, p2, p3, p4, Matches) {
  // console.log(`MATCHDAY ${matchday + 1}`);
  const str = new Array(p1.length);

  const temp2 = new Set(p2);
  if (fixtures(new Set(temp2), p3, Matches, str, 0)) {
    for (let s of str) console.log(`Match ${matchCounter++} -> ${s}`);
  // for (let s of str){
  //     var parts = `${s}`.split(" vs ");     
  //    addmatch(matchCounter++,parts[0],parts[1]);
  //      }
  }

  const temp3 = new Set(p3);
  if (fixtures(new Set(temp3), p4, Matches, str, 0)) {
    for (let s of str) console.log(`Match ${matchCounter++} -> ${s}`);
  // for (let s of str){
  //     var parts = `${s}`.split(" vs ");     
  //    addmatch(matchCounter++,parts[0],parts[1]);
  //      }
  }

  const temp4 = new Set(p4);
  if (fixtures(new Set(temp4), p2, Matches, str, 0)) {
    for (let s of str) console.log(`Match ${matchCounter++} -> ${s}`);
  // for (let s of str){
  //     var parts = `${s}`.split(" vs ");     
  //    addmatch(matchCounter++,parts[0],parts[1]);
  //      }
  }

const temp1 = new Set(p1);
  if (fixtures(new Set(temp1), p1, Matches, str, 0)) {
    for (let s of str) console.log(`Match ${matchCounter++} -> ${s}`);
  //   for (let s of str){
  //  var parts = `${s}`.split(" vs ");     
  // addmatch(matchCounter++,parts[0],parts[1]);
  //   }
  }
}

function getFixtures(team, Matches) {
  document.getElementById("scr").innerHTML = ``;
  var num = 1;
  for (const m of Matches) {
    if (m.includes(team)) {
      var string = m;
      let parts = string.split(" vs ");
      addmatch(num,parts[0],parts[1]);
      num++;
    }
  }
}

function shuffleSet(set) {
  const array = [...set];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return new Set(array);
}

var Matches = new Set();

function main() {
  var pot1 = [
      "mancity", "realmadrid", "bayernmunich", "barcelona", 
      "psg", "arsenal", "intermilan", "liverpool", "atleticomadrid"
    ]
    
  var pot2 = [
      "chelsea", "juventus", "napoli", "dortmund", 
      "bayerleverkusen", "ajax", "spurs", "newcastle", "benfica"
    ]
    
  var pot3 = [
      "monaco", "atalanta", "villareal", "psv", 
      "sporting", "marseille", "galatasaray", "frankfurt", "feyenoord"
    ]
    
  var pot4 = [
      "astonvilla", "athletic", "realbetis", "slavia", 
      "rusg", "celtic", "rangers", "olympiacos", "nice"
    ]
    
  shuffle(pot1); shuffle(pot2); shuffle(pot3); shuffle(pot4);
  allocateFixtures(1, pot4, pot1, pot2, pot3, Matches);
  shuffle(pot1); shuffle(pot2); shuffle(pot3); shuffle(pot4);
  allocateFixtures(0, pot1, pot2, pot3, pot4, Matches);
  shuffle(pot1); shuffle(pot2); shuffle(pot3); shuffle(pot4);
  allocateFixtures(2, pot3, pot4, pot1, pot2, Matches);
  shuffle(pot1); shuffle(pot2); shuffle(pot3); shuffle(pot4);
  allocateFixtures(3, pot2, pot3, pot4, pot1, Matches);

  // console.log("---------------");
  // getFixtures("psg", Matches);
  var cnt = 1;
  // Matches = shuffleSet(Matches);
  Matches.forEach(M => {
    var string = M;
    let parts = string.split(" vs ");
    addmatch(cnt,parts[0],parts[1]);
    cnt++;
  });
}

main();
var matchdata = document.getElementById("scr").innerHTML;
var selectedteam = document.getElementById("football-clubs");
  selectedteam.addEventListener("change",()=>{
    if (selectedteam.value === "all teams") {
      document.getElementById("scr").innerHTML = matchdata;
    }
    else{
      getFixtures(selectedteam.value,Matches);
    }
  })

