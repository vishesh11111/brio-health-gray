'use client';

import { Button } from '<components>/components/ui/button';
import { CloseWebIcon, CopyIcon, ResizeIcon } from '<components>/components/ui/icons/chat';
import { motion, AnimatePresence } from 'framer-motion';
// import { CloseWebIcon, CopyIcon, ResizeIcon } from '<components>/components/icons/chat';
import { Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type Website = {
  title: string;
  url: string;
  description: string;
};

interface HistoryPanelProps {
  isOpen: boolean;
  onClose: () => void;
  width: number;
  website: Website | null;
}

export function WebsitePanel({
  isOpen,
  onClose,
  width,
  website
}: HistoryPanelProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMiniMode, setIsMiniMode] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // New function to open URL in a new tab
  const openInNewTab = () => {
    if (website?.url) {
      window.open(website.url, '_blank');
    }
  };

  // Updated copy function with icon change
  const copyUrl = async () => {
    if (website?.url) {
      try {
        await navigator.clipboard.writeText(website.url);
        setIsCopied(true);

        // Reset the icon after 2 minutes (120000 ms)
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      } catch (err) {
        console.error('Failed to copy URL', err);
        alert('Failed to copy URL');
      }
    }
  };

  // Handle escape key to exit fullscreen or mini mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else if (isMiniMode) {
          setIsMiniMode(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, isMiniMode]);

  // Clear the copied state when component unmounts
  useEffect(() => {
    return () => {
      setIsCopied(false);
    };
  }, []);

  if (!website) return null;

  // Determine the panel's style based on mode
  const panelStyle = isMiniMode
    ? {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '320px',
      height: '180px',
      zIndex: 100,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      borderRadius: '8px',
      overflow: 'hidden'
    }
    : isFullscreen
      ? {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 100
      }
      : { width: `${width}px` };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={isMiniMode ? { opacity: 0, scale: 0.8 } : { x: '100%' }}
          animate={isMiniMode ? { opacity: 1, scale: 1 } : { x: 0 }}
          exit={isMiniMode ? { opacity: 0, scale: 0.8 } : { x: '100%' }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 200,
            duration: 0.3
          }}
          style={panelStyle as any}
          className={`${'fixed top-[68px] right-0 z-50 flex h-[calc(100vh-90px)] flex-col overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 shadow-lg'}`}
        >
          {/* Fixed header section */}
          <div className='flex items-center justify-between px-4 py-2'>
            <div className='max-w-[200px] truncate text-[14px] font-[400] text-[14x]'>
              {website.url}
            </div>
            <div className='flex items-center gap-1'>
              <Button size={'icon2'} variant='ghost' onClick={copyUrl} className=''>
                {isCopied ? (
                  <Check className='text-primary h-[15.84px] dark:text-slate-200 w-[13.2px]' />
                ) : (
                  <CopyIcon />
                )}
              </Button>
              <Button size={'icon2'} variant='ghost' onClick={openInNewTab}>
                <ResizeIcon />
              </Button>
              <Button size={'icon2'} variant='ghost' onClick={onClose}>
                <CloseWebIcon />
              </Button>
            </div>
          </div>

          {/* Iframe container */}
          <div className="h-full w-full bg-white dark:bg-slate-800">
            <iframe
              ref={iframeRef}
              src={website.url}
              title={website.title}
              className="h-full w-full border-0 dark:bg-slate-800"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
