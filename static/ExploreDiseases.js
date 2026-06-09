// ============================================
// COMPLETE DISEASE DATABASE - 3 DISEASES PER LETTER (A-Z)
// ============================================
const diseasesLibrary = {
    A: [
        { name: "Asthma", info: "Asthma is a chronic lung disease that inflames and narrows the airways, leading to breathing difficulty, coughing, and wheezing.", care: "Avoid smoke, dust, pollen; use prescribed inhalers; create an asthma action plan." },
        { name: "Anemia", info: "Anemia occurs when blood lacks enough healthy red blood cells, causing fatigue, pale skin, and weakness.", care: "Eat iron-rich foods (spinach, red meat), vitamin C for absorption, and follow medical advice." },
        { name: "Arthritis", info: "Arthritis causes joint pain, swelling, and stiffness; osteoarthritis and rheumatoid arthritis are common types.", care: "Exercise regularly, maintain healthy weight, physical therapy, anti-inflammatory diet." }
    ],
    B: [
        { name: "Breast Cancer", info: "Breast cancer develops in breast cells, often forming lumps. Early detection improves outcomes.", care: "Regular mammograms, self-exams, healthy lifestyle, and follow medical treatments." },
        { name: "Bronchitis", info: "Inflammation of bronchial tubes causing mucus buildup, cough, and fatigue. Acute or chronic forms.", care: "Avoid smoking, rest, drink fluids, use humidifier, and seek medication if bacterial." },
        { name: "Bipolar Disorder", info: "Mental health condition with extreme mood swings between depression and mania.", care: "Stick to therapy, mood stabilizers, maintain sleep routine, and avoid triggers." }
    ],
    C: [
        { name: "Cancer", info: "Cancer involves abnormal growth of cells in the body, potentially spreading to other areas.", care: "Avoid smoking, maintain healthy habits, attend regular screenings." },
        { name: "COVID-19", info: "Contagious viral infection causing fever, cough, loss of taste, and breathing issues.", care: "Vaccination, hand hygiene, masking in high-risk settings, rest, and isolation when sick." },
        { name: "Cataract", info: "Clouding of the eye lens leading to blurry vision and glare, common in older adults.", care: "Protect eyes from UV, regular eye exams, surgery if vision is severely affected." }
    ],
    D: [
        { name: "Diabetes", info: "Chronic condition affecting how the body processes blood sugar, leading to high glucose levels.", care: "Balanced diet, regular exercise, monitor blood sugar, medication or insulin as prescribed." },
        { name: "Depression", info: "Mood disorder causing persistent sadness, loss of interest, and low energy.", care: "Therapy (CBT), social support, physical activity, and antidepressants if needed." },
        { name: "Dermatitis", info: "Inflammatory skin condition with redness, itching, and dry patches.", care: "Moisturize daily, avoid harsh soaps, identify triggers, use topical steroids if prescribed." }
    ],
    E: [
        { name: "Eczema", info: "Eczema causes dry, itchy, and irritated skin, common in children and adults.", care: "Use moisturizers, avoid harsh soaps, manage stress." },
        { name: "Epilepsy", info: "Neurological disorder causing recurrent seizures due to abnormal brain activity.", care: "Take anticonvulsant medication, avoid seizure triggers, get enough sleep." },
        { name: "Ear Infection", info: "Middle ear infection causing pain, fluid buildup, and temporary hearing loss.", care: "Pain relief, warm compress, antibiotics for bacterial, keep ears dry." }
    ],
    F: [
        { name: "Fibromyalgia", info: "Fibromyalgia causes widespread musculoskeletal pain and fatigue.", care: "Stress management, gentle exercise, and medication as prescribed." },
        { name: "Fracture", info: "Broken bone from trauma or stress, causing pain, swelling, and loss of function.", care: "Immobilize, seek medical care, follow rehab exercises, calcium-rich diet." },
        { name: "Food Poisoning", info: "Illness from contaminated food causing nausea, vomiting, and diarrhea.", care: "Stay hydrated, rest, avoid dairy, seek care if severe." }
    ],
    G: [
        { name: "Gastritis", info: "Inflammation of stomach lining causing abdominal pain, nausea, and bloating.", care: "Avoid spicy/acidic foods, reduce alcohol, take prescribed antacids." },
        { name: "Glaucoma", info: "Eye condition damaging optic nerve, often from high eye pressure.", care: "Regular eye pressure checks, prescribed drops, surgery if advanced." },
        { name: "Gout", info: "Arthritis form with sudden joint pain due to uric acid crystals.", care: "Hydration, low-purine diet, anti-inflammatory meds." }
    ],
    H: [
        { name: "Hypertension", info: "High blood pressure, often 'silent killer', increases heart disease and stroke risk.", care: "Low-sodium diet, regular exercise, BP monitoring, medication." },
        { name: "Hepatitis B", info: "Viral liver infection causing jaundice, fatigue, and liver damage.", care: "Vaccination, avoid alcohol, safe sex, antiviral therapy." },
        { name: "Hypothyroidism", info: "Underactive thyroid leads to fatigue, weight gain, and cold sensitivity.", care: "Thyroid hormone replacement, regular TSH tests." }
    ],
    I: [
        { name: "Insomnia", info: "Sleep disorder with trouble falling/staying asleep, leading to daytime tiredness.", care: "Regular sleep schedule, limit caffeine, relaxation techniques." },
        { name: "IBS", info: "Functional gut disorder with cramping, bloating, and altered bowel habits.", care: "Low FODMAP diet, stress management, fiber adjustments." },
        { name: "Iron Deficiency", info: "Low iron levels causing fatigue, pale skin, and brittle nails.", care: "Iron supplements, eat iron-rich foods, vitamin C." }
    ],
    J: [
        { name: "Jaundice", info: "Yellowing of skin/eyes from high bilirubin, often due to liver issues.", care: "Treat underlying cause, hydration, avoid alcohol." },
        { name: "Juvenile Arthritis", info: "Autoimmune arthritis in children causing joint pain and stiffness.", care: "Physical therapy, NSAIDs, regular rheumatology care." },
        { name: "TMJ Disorders", info: "Jaw joint dysfunction causing jaw pain, clicking, and headaches.", care: "Soft diet, jaw exercises, dental splint if needed." }
    ],
    K: [
        { name: "Kidney Stones", info: "Hard mineral deposits causing severe flank pain and blood in urine.", care: "Drink 2-3L water daily, limit oxalate-rich foods." },
        { name: "Keratitis", info: "Corneal inflammation causing eye pain, redness, and blurred vision.", care: "Contact lens hygiene, avoid sleeping in lenses." },
        { name: "Keloids", info: "Raised overgrowth of scar tissue after skin injury.", care: "Silicone sheets, steroid injections, laser therapy." }
    ],
    L: [
        { name: "Leukemia", info: "Blood cancer affecting white blood cells, causing infections and fatigue.", care: "Chemotherapy, targeted therapy, regular blood counts." },
        { name: "Lupus", info: "Autoimmune disease causing inflammation in joints, skin, and organs.", care: "Sun protection, anti-inflammatory meds, corticosteroids." },
        { name: "Lyme Disease", info: "Tick-borne illness with bullseye rash, fever, and joint pain.", care: "Doxycycline treatment, tick checks after outdoors." }
    ],
    M: [
        { name: "Malaria", info: "Mosquito-borne parasitic disease causing fever, chills, and anemia.", care: "Mosquito nets, repellents, antimalarial drugs." },
        { name: "Migraine", info: "Intense headache with nausea, light sensitivity, and aura.", care: "Identify triggers, triptans, hydration, dark room rest." },
        { name: "Meningitis", info: "Inflammation of brain/spinal cord membranes; bacterial form is emergency.", care: "Vaccination, prompt antibiotics, hospitalization." }
    ],
    N: [
        { name: "Pneumonia", info: "Lung infection with fever, cough, and difficulty breathing.", care: "Vaccines, antibiotics for bacterial, rest, hydration." },
        { name: "Norovirus", info: "Highly contagious stomach virus causing vomiting and diarrhea.", care: "Handwashing, isolation, hydration, disinfect surfaces." },
        { name: "Neuralgia", info: "Sharp nerve pain along a nerve pathway.", care: "Anticonvulsants, pain management, avoid triggers." }
    ],
    O: [
        { name: "Osteoporosis", info: "Brittle bones from low density, increasing fracture risk.", care: "Calcium/vitamin D, weight-bearing exercises, bisphosphonates." },
        { name: "Obesity", info: "Excess body fat raising risk for diabetes and heart disease.", care: "Balanced diet, physical activity, behavioral changes." },
        { name: "Otitis Media", info: "Middle ear infection common in kids; causes earache and fever.", care: "Pain relief, warm compress, antibiotics if severe." }
    ],
    P: [
        { name: "Parkinson's Disease", info: "Progressive nervous system disorder affecting movement and tremors.", care: "Medication (levodopa), physical therapy, exercise." },
        { name: "Psoriasis", info: "Chronic skin condition with red, scaly plaques.", care: "Topical creams, phototherapy, biologic agents." },
        { name: "Peptic Ulcer", info: "Sore in stomach lining causing burning pain and bloating.", care: "Antibiotics for H. pylori, avoid NSAIDs." }
    ],
    Q: [
        { name: "Q Fever", info: "Bacterial infection from animals causing high fever and pneumonia.", care: "Doxycycline treatment, avoid contact with infected livestock." },
        { name: "Quadriplegia", info: "Paralysis of all limbs due to spinal cord injury.", care: "Rehabilitation, assistive devices, respiratory support." },
        { name: "Quinsy", info: "Complication of tonsillitis with severe throat pain and swelling.", care: "Antibiotics, drainage, hydration." }
    ],
    R: [
        { name: "Rabies", info: "Fatal viral disease from animal bites affecting the nervous system.", care: "Immediate wound cleaning, post-exposure vaccine." },
        { name: "Rheumatoid Arthritis", info: "Autoimmune arthritis causing painful joint swelling and deformity.", care: "DMARDs, physical therapy, anti-inflammatory diet." },
        { name: "Ringworm", info: "Fungal skin infection with ring-shaped rash and itching.", care: "Antifungal cream, keep area dry, avoid sharing towels." }
    ],
    S: [
        { name: "Stroke", info: "Brain damage from interrupted blood flow; causes weakness or speech issues.", care: "Emergency care, blood pressure control, rehabilitation." },
        { name: "Sinusitis", info: "Inflammation of sinuses causing facial pressure and thick mucus.", care: "Nasal irrigation, steam inhalation, decongestants." },
        { name: "Skin Cancer", info: "Serious skin cancer from UV damage; irregular moles.", care: "Sun protection, regular dermatology checks." }
    ],
    T: [
        { name: "Tuberculosis", info: "Bacterial lung infection causing cough, night sweats, and weight loss.", care: "Completion of 6-9 month antibiotic course, vaccination." },
        { name: "Tonsillitis", info: "Inflamed tonsils causing sore throat and fever.", care: "Hydration, warm salt gargles, pain relief." },
        { name: "Tetanus", info: "Bacterial infection causing muscle stiffness and lockjaw.", care: "Vaccination (booster every 10 years), wound cleaning." }
    ],
    U: [
        { name: "UTI", info: "Bladder/kidney infection causing burning urination and frequency.", care: "Antibiotics, drink water, urinate after intercourse." },
        { name: "Urticaria", info: "Itchy, raised welts from allergic reactions or stress.", care: "Antihistamines, avoid known triggers, cool compresses." },
        { name: "Uveitis", info: "Eye inflammation causing redness, pain, and floaters.", care: "Steroid eye drops, treat underlying autoimmune disease." }
    ],
    V: [
        { name: "Chickenpox", info: "Viral illness with itchy vesicles and fever.", care: "Vaccination, calamine lotion, avoid scratching." },
        { name: "Vertigo", info: "Sensation of spinning due to inner ear issues.", care: "Epley maneuver, vestibular rehab, avoid sudden head movements." },
        { name: "Vitiligo", info: "Skin depigmentation patches from melanocyte loss.", care: "Sun protection, cosmetic camouflage, topical steroids." }
    ],
    W: [
        { name: "Whooping Cough", info: "Respiratory infection with severe coughing fits and 'whoop' sound.", care: "Vaccination (DTaP), antibiotics, rest, isolation." },
        { name: "Warts", info: "Skin growths from HPV, often on hands or feet.", care: "Salicylic acid, cryotherapy, avoid picking." },
        { name: "Wilson's Disease", info: "Genetic copper accumulation causing liver and neurological damage.", care: "Chelation therapy, low-copper diet, lifelong monitoring." }
    ],
    X: [
        { name: "Xeroderma Pigmentosum", info: "Extreme UV sensitivity causing skin cancers and eye problems.", care: "Complete sun avoidance, protective clothing." },
        { name: "Xanthoma", info: "Fatty deposits under skin related to high cholesterol.", care: "Lipid-lowering diet, statins if needed." },
        { name: "Xerosis", info: "Abnormally dry, rough, itchy skin due to environment.", care: "Moisturizers, humidifier, gentle cleansers." }
    ],
    Y: [
        { name: "Yellow Fever", info: "Mosquito-borne viral hemorrhagic disease with jaundice.", care: "Vaccination, mosquito repellent, supportive care." },
        { name: "Yeast Infection", info: "Fungal infection causing itching and discharge.", care: "Antifungal creams, keep area dry, reduce sugar." },
        { name: "Yersiniosis", info: "Bacterial infection from pork causing diarrhea.", care: "Hydration, antibiotics, proper food handling." }
    ],
    Z: [
        { name: "Zika Virus", info: "Mosquito-borne virus causing fever, rash, and birth defects.", care: "Mosquito protection, avoid pregnancy during outbreak." },
        { name: "Shingles", info: "Painful rash from reactivated chickenpox virus.", care: "Antiviral within 72h, pain management, vaccine." },
        { name: "Zollinger-Ellison", info: "Tumors cause excess stomach acid, leading to ulcers.", care: "Proton pump inhibitors, tumor removal." }
    ]
};

// Build flat array
let allCards = [];
for (let letter in diseasesLibrary) {
    for (let d of diseasesLibrary[letter]) {
        allCards.push({ letter, name: d.name, info: d.info, care: d.care });
    }
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function renderGrid(search = "") {
    const container = document.getElementById("diseaseGrid");
    if (!container) return;
    
    const lower = search.trim().toLowerCase();
    let filtered = allCards;
    
    if (lower !== "") {
        filtered = allCards.filter(c => c.name.toLowerCase().includes(lower));
    }
    
    if (filtered.length === 0) {
        container.innerHTML = `<div class="no-result">😷 No matching diseases found. Try another keyword (e.g., 'fever', 'headache').</div>`;
        return;
    }
    
    let html = '';
    for (let card of filtered) {
        html += `
            <div class="card">
                <div class="letter-box"><h2>${escapeHtml(card.letter)}</h2></div>
                <h3>${escapeHtml(card.name)}</h3>
                <p class="info">${escapeHtml(card.info)}</p>
                <div class="care-title">🩹 Prevention & Care</div>
                <p class="care">${escapeHtml(card.care)}</p>
            </div>
        `;
    }
    container.innerHTML = html;
}

window.filterDiseases = function() {
    const searchBox = document.getElementById("searchBox");
    if (searchBox) renderGrid(searchBox.value);
};

window.jumpToLetter = function(letterVal) {
    if (!letterVal) return;
    
    const container = document.getElementById("diseaseGrid");
    const cards = container.querySelectorAll(".card");
    let target = null;
    
    for (let card of cards) {
        const h2 = card.querySelector(".letter-box h2");
        if (h2 && h2.innerText === letterVal) {
            target = card;
            break;
        }
    }
    
    if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        target.classList.add("highlight-card");
        setTimeout(() => target.classList.remove("highlight-card"), 1200);
    } else {
        const searchBox = document.getElementById("searchBox");
        if (searchBox) searchBox.value = "";
        renderGrid("");
        setTimeout(() => {
            const newCards = document.querySelectorAll(".card");
            for (let c of newCards) {
                const h2 = c.querySelector(".letter-box h2");
                if (h2 && h2.innerText === letterVal) {
                    c.scrollIntoView({ behavior: "smooth", block: "start" });
                    c.classList.add("highlight-card");
                    setTimeout(() => c.classList.remove("highlight-card"), 1200);
                    break;
                }
            }
        }, 100);
    }
    const jumpSelect = document.getElementById("alphabetJump");
    if (jumpSelect) jumpSelect.value = "";
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderGrid();
    console.log("Page loaded - Disease grid should be visible!");
});