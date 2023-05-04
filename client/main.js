const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const complimentAdd = document.querySelector("input")
const submitBtn = document.querySelector('#submit')

const getCompliment = () => {
    axios.get("http://localhost:5500/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    }).catch(err => console.log(err))
}

const getFortune = () => {
    axios.get('http://localhost:5500/api/fortune/')
        .then(res => {
            const data = res.data;
            alert(data);
        }).catch(err => console.log(err))
    }

const addCompliment = (evt) => {
    evt.preventDefault()
    let body = {
        compliment: complimentAdd.value
    }
    console.log(body.compliment)
    axios.post('http://localhost:5500/api/compliment/', body)
        .then(res => {
            const data = res.data
        }).catch(err => console.log(err))
}



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
submitBtn.addEventListener('click', addCompliment)