import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './Resume.css';
import pdfFile from '../assets/Hicham Arhemt allah cv Final version.pdf';

const Resume = () => {
    return (
        <div className="resume-container">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <div className="pdf-viewer">
                    <Viewer fileUrl={pdfFile} />
                </div>
            </Worker>
        </div>
    );
}

export default Resume;


