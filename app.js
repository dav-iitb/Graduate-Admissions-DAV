document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('select');
  let instances = M.FormSelect.init(elems);
})

const coeff = {
  "bias": -1.2717,
  "sop": 0.0015,
  "lor": 0.0168,
  "univ": 0.0060,
  "gre": 0.0018,
  "toefl": 0.0027,
  "cgpa": 0.1186,
  "resex": 0.0245,
};

// let coeff = {
//   "bias": -1.4049839,
//   "gre": 0.0017402,
//   "toefl":0.0033154,
//   "cgpa": 0.1404895,
//   "resex": 0.0280904
// }

let entry = {
  "bias": 1, 
  "sop": 0,
  "lor": 0,
  "univ": 0,
  "gre": 0,
  "toefl": 0,
  "cgpa": 0,
  "resex": 0
};


submit = document.querySelector('.btn');
submit.addEventListener('click', function() {
  let ava = true;
  entry["sop"] = Number(document.querySelector('.selectsop').value);
  if (!entry["sop"]) ava = false;

  entry["lor"] = Number(document.querySelector('.selectlor').value);
  if (!entry.lor) ava = false;

  entry["univ"] = Number(document.querySelector('.selectuniv').value);
  if (!entry["univ"]) ava = false;

  entry["gre"] = Number(document.querySelector('#gre').value);
  if (entry["gre"] > 340) entry["gre"] = 0;
  if (!entry.gre) ava = false;

  entry["toefl"] = Number(document.querySelector('#toefl').value);
  if (entry["toefl"] > 340) entry["toefl"] = 0;
  if (!entry["toefl"]) ava = false;

  entry["cgpa"] = Number(document.querySelector('#cgpa').value);
  if (entry["cgpa"] > 340) entry["cgpa"] = 0;
  if (!entry["cgpa"]) ava = false;
  
  entry["resex"] = -1;
  sel = document.getElementsByName('resex');
  if (sel[0].checked) entry["resex"] = 1;
  else if (sel[1].checked) entry["resex"] = 0;
  if (entry["resex"] == -1) ava = false;

  if (ava) {
    document.querySelector('.incomplete').style.display = 'none';
    document.querySelector('.result').style.display = 'block';
    let val = 0;
    let keys = Object.keys(coeff);
    console.log(keys);
    keys.forEach((k) => {
      console.log(coeff[k]);
      console.log(entry[k]);
      val += coeff[k] * entry[k];
    });
    val = Math.max(0, val);
    console.log(val);
    document.querySelector('.chance').innerHTML = val.toFixed(4)*100 + '%';
  } 
  else {
    document.querySelector('.incomplete').style.display = 'block';
    document.querySelector('.result').style.display = 'none';
  }
});

let doubts = document.getElementsByClassName('doubt');
doubts = Array.from(doubts);
doubts.forEach((doubt) => {
  doubt.addEventListener('click', function() {
    let e = doubt.parentElement.parentElement.parentElement.querySelector('p');
    console.log(e.style.display);
    if (e.style.display === "none") {
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
    console.log(e.style.display);
  });
});