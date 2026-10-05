// Minimal PDF generation script for Ahmed Hamdy CV
const fs = require('fs');

const pdfContent = `%PDF-1.4
1 0 obj
<< /Title (Ahmed Hamdy - WordPress & Frontend Developer CV)
   /Author (Ahmed Hamdy)
   /Creator (Antigravity Brand Engine) >>
endobj
2 0 obj
<< /Type /Catalog
   /Pages 3 0 R >>
endobj
3 0 obj
<< /Type /Pages
   /Kids [4 0 R]
   /Count 1 >>
endobj
4 0 obj
<< /Type /Page
   /Parent 3 0 R
   /MediaBox [0 0 595 842]
   /Contents 5 0 R
   /Resources << /Font << /F1 6 0 R /F2 7 0 R >> >> >>
endobj
5 0 obj
<< /Length 720 >>
stream
BT
/F1 24 Tf
50 780 Td
(AHMED HAMDY) Tj
0 -24 Td
/F2 12 Tf
(WordPress Developer & Frontend Developer) Tj
0 -20 Td
(Email: ahmedhamdybayoumi2006@gmail.com | Phone: +20 109 893 5058) Tj
0 -16 Td
(Location: Egypt | Portfolio: https://ahmed-hamdy09.vercel.app/) Tj
0 -36 Td
/F1 16 Tf
(PROFESSIONAL SUMMARY) Tj
0 -20 Td
/F2 11 Tf
(Dedicated WordPress and Frontend Developer specializing in high-performance websites,) Tj
0 -16 Td
(custom Elementor Pro architectures, WooCommerce e-commerce engines, and modern UI/UX.) Tj
0 -36 Td
/F1 16 Tf
(CORE EXPERTISE) Tj
0 -20 Td
/F2 11 Tf
(- WordPress & WooCommerce Custom Development) Tj
0 -16 Td
(- Elementor Pro, ACF Pro, Custom Post Types) Tj
0 -16 Td
(- Core Web Vitals Optimization & 95+ PageSpeed) Tj
0 -16 Td
(- Modern Frontend: HTML5, CSS3/Grid/Flexbox, JavaScript ES6+, React.js) Tj
0 -16 Td
(- Technical & On-Page SEO, Schema.org Markup) Tj
0 -16 Td
(- Figma to WordPress Pixel-Perfect Conversion) Tj
ET
endstream
endobj
6 0 obj
<< /Type /Font
   /Subtype /Type1
   /BaseFont /Helvetica-Bold >>
endobj
7 0 obj
<< /Type /Font
   /Subtype /Type1
   /BaseFont /Helvetica >>
endobj
xref
0 8
0000000000 65535 f 
0000000009 00000 n 
0000000130 00000 n 
0000000179 00000 n 
0000000238 00000 n 
0000000371 00000 n 
0000001142 00000 n 
0000001222 00000 n 
trailer
<< /Size 8
   /Root 2 0 R
   /Info 1 0 R >>
startxref
1300
%%EOF`;

fs.writeFileSync('Ahmed_Hamdy_CV.pdf', pdfContent);
console.log('Ahmed_Hamdy_CV.pdf created successfully');
