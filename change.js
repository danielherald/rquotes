window.onload =function()
{
    var quotes=[
        "The best preparation for tomorrow is doing your best today.",
        "Keep your face always toward the sunshine - and shadows will fall behind you.",
        "What we think, we become.",
        "Perfection is not attainable, but if we chase perfection we can catch excellence.",
        "Don't cry because it's over, smile because it happened.",
        "You only live once, but if you do it right, once is enough.",
        "To live is the rarest thing in the world. Most people exist, that is all",
        "It is better to be hated for what you are than to be loved for what you are not",
        "It does not do to dwell on dreams and forget to live.",
        "Sometimes the questions are complicated and the answers are simple.",
        "Everything you can imagine is real.",
        "Life isn't about finding yourself. Life is about creating yourself.",
        "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
        "The world breaks everyone, and afterward, some are strong at the broken places.",
        "There are two ways of exerting one’s strength: one is pushing down, the other is pulling up.",
        "A truly strong person does not need the approval of others any more than a lion needs the approval of sheep.",
        "I like criticism. It makes you strong.",
        "There are better starters than me but I’m a strong finisher.",
        "He who believes is strong; he who doubts is weak. Strong convictions precede great actions.",
        "Tough times never last, but tough people do.",
        "Difficulties are meant to rouse, not discourage. The human spirit is to grow strong by conflict.",
        "Nothing is more beautiful than the smile that has struggled through the tears.",
        "That which does not kill us makes us stronger.",
        "Sometimes you dont realize your own strength until you come face to face with your greatest weakness.",
        "Be very strong... be very methodical in your life if you want to be a champion.",
        "Life is very interesting. In the end, some of your greatest pains become your greatest strengths.",
        "I like feeling strong. It keeps my mental floor higher.",
        "Stay strong. Stand up. Have a voice.",
        "If you are a terror to many, then beware of many.",
        "The truth is rarely pure and never simple.",
        "A magician pulls rabbits out of hats. An experimental psychologist pulls habits out of rats.",
        "The computing field is always in need of new cliches.",
        "Like an ability or a muscle, hearing your inner wisdom is strengthened by doing it.",
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        "A friend is someone who knows all about you and still loves you",
        "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.",
        "Much good work is lost for the lack of a little more.",
        "The difference between try and triumph is a little umph.",
        "Many an opportunity is lost because a man is out looking for four-leaf clovers",
        "Nobody ever drowned in his own sweat.",
        "Put your heart, mind, intellect and soul even to your smallest acts. This is the secret of success.",
        "Though the barriers of life seem formidable, we find when we challenge them that they have no will.",
        "Things may come to those who wait, but only the things left by those who hustle. ",
        "Life is 10% what happens to us and 90% how we react to it",
        "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact."
    ];
    
    
    function getRandom(max,min)
    {
        return Math.floor(Math.random()*(max-min)+min);
    };
    var len=quotes.length;
    var val2=getRandom(len,0);
    console.log(val2);
    document.querySelector("#para").innerHTML=quotes[val2];
    var val=getRandom(10,1)+".jpg";
    document.querySelector("#pic").style.backgroundImage="url('"+val+"')";
    console.log(val);
    
}