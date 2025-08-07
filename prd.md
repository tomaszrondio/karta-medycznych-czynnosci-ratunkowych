Product Requirements Document (PRD)
1. Project Overview
Product Name: Medical Emergency Form Desktop App
Target Users: Emergency medical technicians, paramedics, hospital staff
Platform: Windows Desktop (Electron + React)
Primary Goal: Recreate paper-based medical emergency form while maintaining exact visual fidelity for printing
2. Core Features
2.1 Form Replication

Exact Visual Match: Pixel-perfect recreation of the Polish medical form
Print Fidelity: Printed output must be indistinguishable from original PDF
Layout Preservation: Maintain all spacing, fonts, borders, and positioning
Section Organization: Replicate all 5 main sections (I-V) with proper grouping

2.2 Interactive Form Fields
Patient Data Section (V)

Text inputs: Name, PESEL, address, document ID, medical assistance
Dropdown for team type (S/P)
Medical facility selection

Medical Assessment Section (II)

Glasgow Coma Scale: Radio buttons with scoring (4-point scales)
Vital Signs: Number inputs with validation ranges
Checkboxes for symptoms and conditions
Body diagram for injury marking
ECG rhythm selection

Procedures Section (IV)

Checklist of medical procedures performed
Medication administration with dosage tracking
Equipment usage logging
Time stamps for each intervention

Diagnosis Section (III)

ICD-10 code input with validation
Description text areas
Severity indicators

2.3 Technical Requirements
Framework Stack

Electron 28+ for desktop app wrapper
React 18+ with TypeScript
CSS Grid/Flexbox for layout precision
We don't need to store data, we just want to have it visualized and printable when filled out.

Data Management

No data storage required

Print System

CSS print media queries matching original dimensions
Page break handling for multi-page forms
Font embedding for consistency
Exact margin and spacing preservation

2.4 User Experience
Medical Professional Workflow
Tab navigation following medical logic


3. Technical Specifications
3.1 Form Layout Structure
Main Container (A4 dimensions: 210mm x 297mm)
├── Header Section
│   ├── Title: "KARTA MEDYCZNYCH CZYNNOŚCI RATUNKOWYCH"
│   ├── Date/time fields
│   └── Team identification
├── Section I - WYWIAD (Medical History)
├── Section II - BADANIE (Examination)
│   ├── Glasgow Coma Scale (3x scoring grids)
│   ├── RTS Scoring table
│   ├── Vital signs monitoring
│   └── Body systems assessment
├── Section III - ROZPOZNANIE (Diagnosis)
├── Section IV - POSTĘPOWANIE (Procedures)
│   ├── Medical interventions checklist
│   ├── Medications administered
│   └── Equipment used
└── Section V - DANE PACJENTA (Patient Data)
    ├── Personal information
    ├── Insurance details
    └── Transfer information
3.3 Print CSS Requirements
css@media print {
  @page {
    size: A4;
    margin: 0;
  }
  
  body {
    font-family: 'Arial', sans-serif;
    font-size: 8pt;
    line-height: 1.1;
  }
  
  .form-container {
    width: 210mm;
    height: 297mm;
    page-break-inside: avoid;
  }
}