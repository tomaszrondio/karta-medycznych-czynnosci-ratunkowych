import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './HumanDiagram.css';
import { useObrazeniaContext } from '../sections/ObrazeniaWrapper';

interface PlacedLetter {
  id: string;
  letter: string;
  x: number;
  y: number;
}

interface DiagramData {
  letters: Array<{
    letter: string;
    x: number; // relative to container (0-1)
    y: number; // relative to container (0-1)
  }>;
  scale: number;
}

interface HumanDiagramProps {
  onChange?: (data: DiagramData) => void;
  initialData?: DiagramData;
}

const HumanDiagram: React.FC<HumanDiagramProps> = ({ onChange, initialData }) => {
  const { brakObrazen, setHumanDiagramLetters } = useObrazeniaContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scaleFactor, setScaleFactor] = useState(1);
  const [placedLetters, setPlacedLetters] = useState<PlacedLetter[]>([]);
  const [draggedLetter, setDraggedLetter] = useState<string | null>(null);
  const [touchStartPos, setTouchStartPos] = useState<{ x: number; y: number } | null>(null);
  const [diagramData, setDiagramData] = useState<DiagramData>(initialData || { letters: [], scale: 1 });
  const modalContentRef = useRef<HTMLDivElement>(null);
  const diagramContainerRef = useRef<HTMLDivElement>(null);

  // Update setHumanDiagramLetters when diagram has letters
  React.useEffect(() => {
    const hasLetters = diagramData.letters.length > 0;
    setHumanDiagramLetters?.(hasLetters);
  }, [diagramData.letters, setHumanDiagramLetters]);

  // Original container dimensions in mm
  const originalWidth = 53; // mm
  const originalHeight = 47; // mm

  const calculateScaleFactor = useCallback(() => {
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
    
    // Only set scale factor if it has changed
    if (finalScale !== scaleFactor) {
      setScaleFactor(finalScale);
    }
  }, [scaleFactor]);

  const handleContainerClick = () => {
    setIsModalOpen(true);
  };

  const handleModalBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      // Save data before closing
      saveLettersData();
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

  const handleLetterClick = (letterId: string) => {
    setPlacedLetters(prev => prev.filter(letter => letter.id !== letterId));
  };

  const handleTouchStart = (letter: string, e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDraggedLetter(letter);
    const touch = e.touches[0];
    setTouchStartPos({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!draggedLetter || !diagramContainerRef.current || !touchStartPos) return;

    const touch = e.changedTouches[0];
    const rect = diagramContainerRef.current.getBoundingClientRect();
    
    // Check if touch ended within the diagram container
    if (touch.clientX >= rect.left && touch.clientX <= rect.right &&
        touch.clientY >= rect.top && touch.clientY <= rect.bottom) {
      
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      // Create new placed letter
      const newLetter: PlacedLetter = {
        id: `${draggedLetter}-${Date.now()}-${Math.random()}`,
        letter: draggedLetter,
        x,
        y,
      };

      setPlacedLetters(prev => [...prev, newLetter]);
    }

    setDraggedLetter(null);
    setTouchStartPos(null);
  };

  const saveLettersData = () => {
    if (!diagramContainerRef.current) return;

    const containerRect = diagramContainerRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

    const relativeLetters = placedLetters.map(letter => ({
      letter: letter.letter,
      x: letter.x / containerWidth,  // Convert to relative position (0-1)
      y: letter.y / containerHeight, // Convert to relative position (0-1)
    }));

    const data: DiagramData = {
      letters: relativeLetters,
      scale: scaleFactor,
    };

    setDiagramData(data);
    if (onChange) {
      onChange(data);
    }
    console.log('Saved diagram data:', data);
    return data;
  };

  const handleModalClose = () => {
    // Save data before closing
    saveLettersData();
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      // Calculate after modal is rendered
      const timer = setTimeout(() => {
        calculateScaleFactor();
        // Load initial letters if available
        if (diagramData.letters.length > 0 && diagramContainerRef.current) {
          const containerRect = diagramContainerRef.current.getBoundingClientRect();
          const containerWidth = containerRect.width;
          const containerHeight = containerRect.height;
          
          const absoluteLetters = diagramData.letters.map((letter, index) => ({
            id: `initial-${letter.letter}-${index}`,
            letter: letter.letter,
            x: letter.x * containerWidth,
            y: letter.y * containerHeight,
          }));
          
          setPlacedLetters(absoluteLetters);
        }
      }, 100);
      
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
  }, [isModalOpen, diagramData.letters, calculateScaleFactor]);

  // Update placed letters positions when scale changes
  useEffect(() => {
    if (isModalOpen && diagramContainerRef.current && diagramData.letters.length > 0) {
      const containerRect = diagramContainerRef.current.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const containerHeight = containerRect.height;
      
      setPlacedLetters(prev => {
        // Only update if we have initial letters loaded
        if (prev.length > 0 && prev.every(letter => letter.id.startsWith('initial-'))) {
          return diagramData.letters.map((letter, index) => ({
            id: `initial-${letter.letter}-${index}`,
            letter: letter.letter,
            x: letter.x * containerWidth,
            y: letter.y * containerHeight,
          }));
        }
        return prev;
      });
    }
  }, [scaleFactor, isModalOpen, diagramData.letters]);

  return (
    <>
      <div 
        className={`human-diagram-container ${diagramData.letters.length > 0 || brakObrazen ? 'has-letters' : ''}`}
        onClick={handleContainerClick}
        title="Click to open diagram editor"
      >
        {/* Render saved letters on main container */}
        {diagramData.letters.map((savedLetter, index) => (
          <div
            key={`main-${savedLetter.letter}-${index}`}
            className="main-placed-letter"
            style={{
              left: `${savedLetter.x * 100}%`,
              top: `${savedLetter.y * 100}%`,
              width: `${0.66 * diagramData.scale}mm`,
              height: `${0.66 * diagramData.scale}mm`,
              fontSize: `${0.66 * diagramData.scale}mm`,
              textShadow: `${0.13 * diagramData.scale}mm ${0.13 * diagramData.scale}mm 0 white, -${0.13 * diagramData.scale}mm ${0.13 * diagramData.scale}mm 0 white, ${0.13 * diagramData.scale}mm -${0.13 * diagramData.scale}mm 0 white, -${0.13 * diagramData.scale}mm -${0.13 * diagramData.scale}mm 0 white`,
            }}
          >
            {savedLetter.letter}
          </div>
        ))}
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
                  width: `${originalWidth * scaleFactor * 3.7795}px`,
                  height: `${originalHeight * scaleFactor * 3.7795}px`,
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
                    onClick={() => handleLetterClick(placedLetter.id)}
                    title="Click to remove"
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
                      onTouchStart={(e) => handleTouchStart(item.letter, e)}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
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