const compliments = [`you're not, not fat :[`];


module.exports = {

    getCompliment: (req, res) => {
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortune = [
            'A beautiful, smart, and loving person will be coming into your life.', 'A soft voice may be awfully persuasive.', 
            'An acquaintance of the past will affect you in the near future.', 'Curiosity kills boredom. Nothing can kill curiosity.', 
            "Don't just spend time. Invest it."
        ];
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex]

        res.status(200).send(randomFortune);
    },
    addCompliment: (req,res) => {
        let body = req.body
        console.log(body)
        compliments.push(body.compliment)
    }
}