// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Default to light theme
const currentTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', currentTheme);
themeToggle.textContent = currentTheme === 'dark' ? '🌙' : '☀️';

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '🌙' : '☀️';
});

// Typing Animation
const typingText = document.getElementById('typingText');
const lines = [
    "Hi! I'm Raghavan Balanathan, a Computer Science Master's student at Purdue University, West Lafayette, passionate about building intelligent systems."
];

let lineIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
    const currentLine = lines[lineIndex];
    
    if (isDeleting) {
        typingText.innerHTML = currentLine.substring(0, charIndex - 1) + '<span class="cursor"></span>';
        charIndex--;
        typingSpeed = 30;
    } else {
        typingText.innerHTML = currentLine.substring(0, charIndex + 1) + '<span class="cursor"></span>';
        charIndex++;
        typingSpeed = 50;
    }

    if (!isDeleting && charIndex === currentLine.length) {
        typingSpeed = 2000; // Pause at end
        isDeleting = false;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        lineIndex = (lineIndex + 1) % lines.length;
        typingSpeed = 500; // Pause before next line
    }

    setTimeout(type, typingSpeed);
}

// Start typing animation after a short delay
setTimeout(type, 1000);

// Coursework Toggle Functionality
const courseworkToggles = document.querySelectorAll('.coursework-toggle');

courseworkToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        
        // Toggle active class
        this.classList.toggle('active');
        targetContent.classList.toggle('active');
    });
});

// Create neural network nodes
function createNeuralNetwork() {
    const techBg = document.getElementById('techBg');
    const nodeCount = 30;
    
    for (let i = 0; i < nodeCount; i++) {
        const node = document.createElement('div');
        node.className = 'neural-node';
        node.style.left = Math.random() * 100 + '%';
        node.style.top = Math.random() * 100 + '%';
        node.style.animationDelay = Math.random() * 3 + 's';
        techBg.appendChild(node);
    }
}

// Create data flow particles
function createDataParticles() {
    const techBg = document.getElementById('techBg');
    
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'data-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (8 + Math.random() * 4) + 's';
        techBg.appendChild(particle);
    }
}

// Create code symbols
function createCodeSymbols() {
    const techBg = document.getElementById('techBg');
    const symbols = ['{', '}', '<', '>', '[', ']', '(', ')', '//', '==', '!=', '&&', '||', 'fn', 'df', 'ml'];
    
    for (let i = 0; i < 20; i++) {
        const symbol = document.createElement('div');
        symbol.className = 'code-symbol';
        symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        symbol.style.left = Math.random() * 100 + '%';
        symbol.style.top = Math.random() * 100 + '%';
        symbol.style.animationDelay = Math.random() * 20 + 's';
        symbol.style.animationDuration = (15 + Math.random() * 10) + 's';
        techBg.appendChild(symbol);
    }
}

// Initialize all animations
createNeuralNetwork();
createDataParticles();
createCodeSymbols();

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .project-card, .publication-card, .education-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.flexDirection = 'column';
        navLinks.style.padding = '2rem';
        navLinks.style.background = 'rgba(20, 20, 20, 0.95)';
    }
});

// Project Image Modal
document.querySelectorAll('.project-image').forEach(image => {
    image.addEventListener('click', function() {
        const imgSrc = this.querySelector('img')?.src;
        if (imgSrc) {
            showImageModal(imgSrc);
        }
    });
});

function showImageModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.classList.add('active');
    modalImg.src = imageSrc;
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal(this.id);
        }
    });
});

// Publication Abstracts
const abstracts = {
    abstract1: {
        title: "Continual Learning for Robust Video Segmentation of Robot-Assisted Surgical Tool",
        content: "Developed a Domain-Incremental Continual Learning framework for surgical tool segmentation using SAM2 trained with LoRA, enabling privacy-preserving adaptation to challenging surgical scenes. Improved segmentation accuracy by up to 5% using CLIP with K-Means parameter selection, outperforming LwF baselines. This work addresses the critical challenge of adapting vision models to new surgical scenarios while preserving performance on previously learned tasks, essential for real-world clinical deployment."
    },
    abstract2: {
        title: "Forecasting airline passengers' satisfaction based on sentiments and ratings",
        content: "This study presents a comprehensive analysis of airline passenger satisfaction using VADER sentiment analysis combined with machine learning techniques. The research demonstrates how textual reviews and numerical ratings can be integrated to predict customer satisfaction levels. Multiple classification algorithms were evaluated, achieving high accuracy in forecasting passenger sentiment. The findings provide valuable insights for airlines to improve service quality and customer experience through data-driven decision making."
    },
    abstract3: {
        title: "Mitigating Abusive Comment Detection in Tamil Text: A Data Augmentation Approach",
        content: "This paper addresses the challenge of detecting abusive comments in Tamil, a low-resource language, using state-of-the-art transformer models including MuRIL and XLM-RoBERTa. We propose a data augmentation approach utilizing back translation and lexical replacement techniques to enhance model performance. The experimental results demonstrate a 15-unit improvement in macro F1-score, showcasing the effectiveness of our approach. This work contributes to making online spaces safer for Tamil-speaking communities through automated content moderation."
    }
};

function showAbstract(abstractId) {
    const abstract = abstracts[abstractId];
    const modal = document.getElementById('abstractModal');
    const content = document.getElementById('abstractContent');
    if(abstractId === 'abstract1'){
    content.innerHTML = `
        <h3>${abstract.title}</h3>
        <p>Robust segmentation of surgical tools is essential to improve robot-assisted surgery, but is affected by challenging visual scenes such as smoke, bleeding, and low light. Deep learning models cannot be generalized to such diverse domains, typically suffering from catastrophic forgetting and data privacy issues. To overcome this, we present a Domain-Incremental Continual Learning (CL) framework for robust and privacy-preserving segmentation of surgical tools. We construct our solution based on Segment Anything Model 2 (SAM2) and utilize parameter-efficient Low-Rank Adaptation (LoRA) for domain-specific adaptation learning. The foundation of our solution is a K-Means clustering strategy on CLIP embeddings that dynamically selects the appropriate LoRA adapter for the current visual domain, isolating domain knowledge, and avoiding forgetting. We perform a rigorous evaluation on the challenging SegSTRONG-C endoscopic video dataset. Our findings show that our solution is substantially better than CL baselines at segmentation accuracy as well as knowledge retention, presenting a promising path to reliable and adaptive AI for real-world surgical procedures.</p>
    `;}
    else if(abstractId === 'abstract2'){
    content.innerHTML = `
        <h3>${abstract.title}</h3>
        <p>To the best of the authors' knowledge, research predicting airline passengers' satisfaction based on their sentiments and ratings is seldom sighted. Additionally, the literature reveals that most studies have primarily concentrated on specific airlines or routes, neglecting to conduct a comparative analysis of satisfaction levels across numerous airlines and routes. Hence, this research aims to predict passengers' satisfaction by combining the sentiment of their reviews and ratings on various parameters like food, entertainment, seat comfort, ground service, and value for money. Using the "Skytrax Airline Reviews" dataset, which contains data about 81 airlines and 64440 reviews, our research analyzes and predicts airline passengers' satisfaction based on sentiments and ratings using nine popular machine learning techniques. The study found that the LightGBM obtains an accuracy of 97 percent in predicting customer satisfaction. The results further reveal that 'value for money' and 'ground service' are crucial factors in determining the passengers' satisfaction, whereas 'entertainment' had no significant impact. Our study thus provides a valuable tool for predicting airline industry customer satisfaction and gives insight into the factors contributing to passenger satisfaction. These findings can further help airlines better understand their passengers' needs and improve their services accordingly.</p>
    `;}
    else if(abstractId === 'abstract3'){
    content.innerHTML = `
        <h3>${abstract.title}</h3>
        <p>With the increasing number of users on social media platforms, the detection and categorization of abusive comments have become crucial, necessitating effective strategies to mitigate their impact on online discussions. However, the intricate and diverse nature of lowresource Indic languages presents a challenge in developing reliable detection methodologies. This research focuses on the task of classifying YouTube comments written in Tamil language into various categories. To achieve this, our research conducted experiments utilizing various multi-lingual transformer-based models along with data augmentation approaches involving back translation approaches and other pre-processing techniques. Our work provides valuable insights into the effectiveness of various preprocessing methods for this classification task. Our experiments showed that the Multilingual Representations for Indian Languages (MURIL) transformer model, coupled with round-trip translation and lexical replacement, yielded the most promising results, showcasing a significant improvement of over 15 units in macro F1-score compared to existing baselines. This contribution adds to the ongoing research to mitigate the adverse impact of abusive content on online platforms, emphasizing the utilization of diverse preprocessing strategies and state-of-the-art language models.</p>
    `;}
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ESC key to close modals
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal('imageModal');
        closeModal('abstractModal');
    }
});