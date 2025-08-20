import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './HumanDiagram.css';
import { FormTextarea } from '../ui';

interface PlacedLetter {
  id: string;
  letter: string;
  x: number;
  y: number;
}

const HumanDiagram: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scaleFactor, setScaleFactor] = useState(1);
  const [placedLetters, setPlacedLetters] = useState<PlacedLetter[]>([]);
  const [draggedLetter, setDraggedLetter] = useState<string | null>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const diagramContainerRef = useRef<HTMLDivElement>(null);

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

  const handleDragStart = (letter: string, e: React.DragEvent<HTMLDivElement>) => {
    setDraggedLetter(letter);
    
    // Create a drag image to center the cursor
    const dragElement = e.currentTarget;
    const rect = dragElement.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Set the drag image offset to center the cursor
    e.dataTransfer.setDragImage(dragElement, centerX, centerY);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (!draggedLetter || !diagramContainerRef.current) return;

    const rect = diagramContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Create new placed letter
    const newLetter: PlacedLetter = {
      id: `${draggedLetter}-${Date.now()}-${Math.random()}`,
      letter: draggedLetter,
      x,
      y,
    };

    setPlacedLetters(prev => [...prev, newLetter]);
    setDraggedLetter(null);
  };

  const handleLetterDoubleClick = (letterId: string) => {
    setPlacedLetters(prev => prev.filter(letter => letter.id !== letterId));
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
                ref={diagramContainerRef}
                className="human-diagram-modal-container"
                style={{
                  width: `${originalWidth * scaleFactor}mm`,
                  height: `${originalHeight * scaleFactor}mm`,
                }}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                {/* Placed letters */}
                {placedLetters.map((placedLetter) => (
                  <div
                    key={placedLetter.id}
                    className="placed-letter"
                    style={{
                      left: placedLetter.x,
                      top: placedLetter.y,
                    }}
                    onDoubleClick={() => handleLetterDoubleClick(placedLetter.id)}
                    title="Double-click to remove"
                  >
                    {placedLetter.letter}
                  </div>
                ))}
              </div>
              
              <div className="human-diagram-legend">
                {[
                  { letter: 'O', description: 'Złamanie otwarte' },
                  { letter: 'Z', description: 'Złamanie zamknięte' },
                  { letter: 'W', description: 'Zwichnięcie' },
                  { letter: 'S', description: 'Stłuczenie' },
                  { letter: 'R', description: 'Rana' },
                  { letter: 'K', description: 'Krwotok z rany' },
                  { letter: 'M', description: 'Zmiażdżenie' },
                  { letter: 'A', description: 'Amputacja' },
                  { letter: 'N', description: 'Ból nieurazowy' },
                  { letter: 'P', description: 'Oparzenie' },
                ].map((item) => (
                  <div key={item.letter} className="legend-item">
                    <div 
                      className="legend-letter"
                      draggable
                      onDragStart={(e) => handleDragStart(item.letter, e)}
                      title="Drag to place on diagram"
                    >
                      {item.letter}
                    </div>
                    <div className="legend-description">{item.description}</div>
                  </div>
                ))}
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