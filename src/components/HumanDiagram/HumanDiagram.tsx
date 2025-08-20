import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './HumanDiagram.css';
import { FormTextarea } from '../ui';

const HumanDiagram: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scaleFactor, setScaleFactor] = useState(1);
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Original container dimensions in mm
  const originalWidth = 53; // mm
  const originalHeight = 47; // mm

  const calculateScaleFactor = () => {
    if (!modalContentRef.current) return;
    
    const modalContent = modalContentRef.current;
    const availableWidth = modalContent.clientWidth - 40; // Subtract left+right padding (20px each)
    const availableHeight = modalContent.clientHeight - 40 - 40; // Subtract top+bottom padding + margin-top
    
    // Use CSS pixel to mm conversion (1mm = 3.7795px at 96 DPI)
    const mmToPx = 3.7795;
    const originalWidthPx = originalWidth * mmToPx;
    const originalHeightPx = originalHeight * mmToPx;
    
    // Calculate maximum scale factor that fits
    const scaleX = availableWidth / originalWidthPx;
    const scaleY = availableHeight / originalHeightPx;
    const maxScale = Math.min(scaleX, scaleY);
    
    const finalScale = Math.floor(maxScale); // Round down to integer
    
    // Debug logging
    console.log('Modal content size:', modalContent.clientWidth, 'x', modalContent.clientHeight);
    console.log('Available space:', availableWidth, 'x', availableHeight);
    console.log('Original size (px):', originalWidthPx, 'x', originalHeightPx);
    console.log('Scale factors:', scaleX, scaleY);
    console.log('Max scale (float):', maxScale);
    console.log('Final scale (int):', finalScale);
    
    setScaleFactor(finalScale);
  };

  const handleContainerClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      // Calculate after modal is rendered
      const timer = setTimeout(calculateScaleFactor, 100);
      
      // Recalculate on window resize
      const handleResize = () => {
        calculateScaleFactor();
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isModalOpen]);

  return (
    <>
      <div 
        className="human-diagram-container"
        onClick={handleContainerClick}
        title="Click to open diagram editor"
      >
        {/* Original small container content */}
      </div>

      {isModalOpen && createPortal(
        <div className="human-diagram-modal-overlay" onClick={handleModalBackdropClick}>
          <div className="human-diagram-modal-content" ref={modalContentRef}>
            <button className="human-diagram-modal-close" onClick={handleModalClose}>
              ×
            </button>
            <div className="human-diagram-editor">
              <div 
                className="human-diagram-modal-container"
                style={{
                  width: `${originalWidth * scaleFactor}mm`,
                  height: `${originalHeight * scaleFactor}mm`,
                }}
              >
                {/* Dynamically scaled container content */}
              </div>
              
              <div className="human-diagram-legend">
                <div className="legend-item">
                  <div className="legend-letter">O</div>
                  <div className="legend-description">Złamanie otwarte</div>
                </div>
                <div className="legend-item">
                  <div className="legend-letter">Z</div>
                  <div className="legend-description">Złamanie zamknięte</div>
                </div>
                <div className="legend-item">
                  <div className="legend-letter">W</div>
                  <div className="legend-description">Zwichnięcie</div>
                </div>
                <div className="legend-item">
                  <div className="legend-letter">S</div>
                  <div className="legend-description">Stłuczenie</div>
                </div>
                <div className="legend-item">
                  <div className="legend-letter">R</div>
                  <div className="legend-description">Rana</div>
                </div>
                <div className="legend-item">
                  <div className="legend-letter">K</div>
                  <div className="legend-description">Krwotok z rany</div>
                </div>
                <div className="legend-item">
                  <div className="legend-letter">M</div>
                  <div className="legend-description">Zmiażdżenie</div>
                </div>
                <div className="legend-item">
                  <div className="legend-letter">A</div>
                  <div className="legend-description">Amputacja</div>
                </div>
                <div className="legend-item">
                  <div className="legend-letter">N</div>
                  <div className="legend-description">Ból nieurazowy</div>
                </div>
                <div className="legend-item">
                  <div className="legend-letter">P</div>
                  <div className="legend-description">Oparzenie</div>
                </div>
              </div>
            </div>
            <div className="scale-indicator">
              {scaleFactor}x
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default HumanDiagram;