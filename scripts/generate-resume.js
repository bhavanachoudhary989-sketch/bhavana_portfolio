const fs = require('fs');
const path = require('path');

// Simple script to ensure a valid PDF document exists at public/resume.pdf
// We will write a valid minimal PDF binary stream with complete Bhavana Choudhary resume content

function createResumePdf() {
  const targetPath = path.join(__dirname, '..', 'public', 'resume.pdf');
  
  const textContent = `
BHAVANA CHOUDHARY
Computer Science Engineer | Bangalore, Karnataka
Email: bhavanachoudhary989@gmail.com | Phone: +91 9591027170
GitHub: https://github.com/bhavanachoudhary989-sketch
LinkedIn: https://www.linkedin.com/in/bhavana-choudhary-92478a373/

================================================================================
PROFESSIONAL SUMMARY
================================================================================
Computer Science Engineering student with strong foundations in software development,
data analysis, artificial intelligence, and cybersecurity. Experienced in building AI-based
systems, predictive machine learning models, and conducting academic research published
in international journals.

================================================================================
EDUCATION
================================================================================
- Sapthagiri NPS University, Bengaluru | B.Tech - Computer Science & Engineering (CSE) | 2024 - Present
- Vidya Soudha PU College | Pre-University Education | 2022 - 2024
- Lourdes High School | Secondary Education | Passed Out: 2022 | Score: 95.84%

================================================================================
TECHNICAL SKILLS
================================================================================
Programming: Python, C++, C, Java, JavaScript, SQL
Core CS: Data Structures, Algorithms, DBMS
Data & AI: Data Analysis, Data Visualization, Machine Learning, Artificial Intelligence, Excel
Tools & Soft Skills: PowerPoint, Problem Solving, Communication, Creative Thinking

================================================================================
KEY PROJECTS
================================================================================
1. AegisAI - AI-Powered Security Operations Center (SOC) Simulator
   - Built threat detection, risk calculation, attack chain correlation, and defensive recommendations.
   - Stack: React.js, Vite, FastAPI, Python, REST APIs.

2. Telecom Customer Churn Prediction
   - Machine learning project analyzing customer churn patterns and retention modeling.

3. Fluenti - Python Language Translation Application
   - Desktop translation tool providing seamless multi-language translation.

4. Stock Market Analysis & Visualization | Sales Data Analysis | Water Turbidity Testing
   - Data-driven analytical platforms focusing on trend identification and visual reporting.

================================================================================
RESEARCH PUBLICATIONS
================================================================================
1. SMART WASTE IMAGE DETECTION
   - Journal: International Journal of Emerging Technologies and Innovative Research (JETIR)
   - ISSN: 2349-5162 | Vol. 12, Issue 12 | December 2025 | Paper ID: JETIR2512457

2. AI STUDENT LIFE PATTERN ANALYZER
   - Journal: TIJER - International Research Journal
   - ISSN: 2349-9249 | Vol. 13, Issue 6 | June 2026 | Paper ID: TIJER2606023

================================================================================
CERTIFICATIONS & ACHIEVEMENTS
================================================================================
- SIH 2026: Selected among Top 100 Teams in SIH Precursor Event 2026 (Project Auryvex)
- Generative AI for All - Infosys Springboard
- Introduction to Microcontrollers & Coding - Infosys Springboard
- Excel Data Analysis & Visualization Certification
  `;

  // Create valid PDF structure
  const pdfHeader = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
`;

  // Escape special chars for PDF literal strings
  const lines = textContent.trim().split('\n');
  let streamContent = 'BT /F1 9 Tf 12 TL 40 750 Td\n';
  
  for (let line of lines) {
    if (line.startsWith('BHAVANA CHOUDHARY')) {
      streamContent += `/F1 16 Tf (BHAVANA CHOUDHARY) Tj T* /F1 9 Tf\n`;
    } else if (line.startsWith('===')) {
      streamContent += `(--------------------------------------------------------------------------------) Tj T*\n`;
    } else {
      const escaped = line.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
      streamContent += `(${escaped}) Tj T*\n`;
    }
  }
  streamContent += 'ET';

  const streamLength = Buffer.byteLength(streamContent, 'utf8');
  
  const pdfBody = `5 0 obj
<< /Length ${streamLength} >>
stream
${streamContent}
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000000315 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
${315 + streamLength + 50}
%%EOF
`;

  const pdfBuffer = Buffer.from(pdfHeader + pdfBody, 'utf8');
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, pdfBuffer);
  console.log('Resume PDF generated successfully at:', targetPath);
}

createResumePdf();
