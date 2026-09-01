const questions = [
    {
        question: "Fosil yakıtların (kömür, petrol, gaz) kullanımı iklim krizini tetikliyor. Bu sorunu nasıl çözeriz?",
        keywords: ["güneş", "rüzgar", "yenilenebilir", "elektrikli", "enerji", "temiz"],
        correctAnswer: "Güneş, rüzgar ve jeotermal gibi yenilenebilir enerji kaynaklarına geçerek ve elektrikli ulaşımı yaygınlaştırarak bu sorunu çözebiliriz."
    },
    {
        question: "Ormanların kesilmesi atmosfere salınan karbonun tutulmasını engelliyor. Ormansızlaşmayı yavaşlatmak için ne yapmalıyız?",
        keywords: ["ağaç", "orman", "dikmek", "koruma", "geri dönüşüm", "kağıt"],
        correctAnswer: "Ağaçlandırma projeleri yapmalı, mevcut ormanları kanunlarla korumalı ve kağıt/ahşap ürünlerinde geri dönüşümü artırmalıyız."
    },
    {
        question: "Plastik atıklar ve aşırı tüketim çevre kirliliğini ve emisyonları artırıyor. Bunu nasıl önleriz?",
        keywords: ["geri dönüşüm", "plastik", "atık", "azaltmak", "bez çanta", "matara"],
        correctAnswer: "Tek kullanımlık plastikleri yasaklayarak, sıfır atık yaşam tarzını benimseyerek ve geri dönüşüm altyapısını güçlendirerek önleyebiliriz."
    },
    {
        question: "Şehirlerdeki araç trafiği yüksek miktarda egzoz emisyonuna neden oluyor. Kent içi ulaşımı nasıl sürdürülebilir kılabiliriz?",
        keywords: ["toplu taşıma", "bisiklet", "yürümek", "elektrikli", "otobüs", "metro"],
        correctAnswer: "Toplu taşıma hatlarını artırarak, bisiklet yollarını yaygınlaştırarak ve insanları yürümeye veya elektrikli araçlara teşvik ederek çözebiliriz."
    }
];

let currentQuestion = null;

const nextQuestionBtn = document.getElementById('nextQuestionBtn');
const questionText = document.getElementById('questionText');
const answerSection = document.getElementById('answerSection');
const userAnswer = document.getElementById('userAnswer');
const checkBtn = document.getElementById('checkBtn');
const resultBox = document.getElementById('resultBox');
const feedbackText = document.getElementById('feedbackText');
const correctAnswerText = document.getElementById('correctAnswerText');

nextQuestionBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomIndex];

    questionText.innerText = currentQuestion.question;
    userAnswer.value = "";
    
    answerSection.classList.remove('hidden');
    resultBox.classList.add('hidden');
});

checkBtn.addEventListener('click', () => {
    const text = userAnswer.value.toLowerCase().trim();

    if (text === "") {
        alert("Lütfen önce bir cevap yaz!");
        return;
    }

    let matchedKeywords = 0;
    currentQuestion.keywords.forEach(keyword => {
        if (text.includes(keyword)) {
            matchedKeywords++;
        }
    });

    resultBox.classList.remove('hidden');

    if (matchedKeywords >= 2) {
        feedbackText.innerText = "🎉 Harika! Çok doğru ve mantıklı bir çözüm önerisi verdin.";
        feedbackText.className = "correct";
    } else if (matchedKeywords === 1) {
        feedbackText.innerText = "👍 Güzel bir yaklaşım! Doğru yoldasın ama biraz daha detaylandırılabilir.";
        feedbackText.className = "partial";
    } else {
        feedbackText.innerText = "🤔 Çözümün eksik veya farklı bir noktaya değiniyor olabilir. İdeal cevabı inceleyebilirsin.";
        feedbackText.className = "wrong";
    }

    correctAnswerText.innerText = currentQuestion.correctAnswer;
});