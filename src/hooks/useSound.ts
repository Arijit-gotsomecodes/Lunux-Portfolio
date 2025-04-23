import { useCallback } from 'react';
import { Howl } from 'howler';

// Define sound URLs
const SOUNDS = {
  KEYPRESS: 'https://assets.codepen.io/274456/keypress.mp3',
  BEEP: 'https://assets.codepen.io/274456/beep.mp3',
  BOOT: 'https://assets.codepen.io/274456/boot.mp3'
};

// Sound instances
let keypressSound: Howl | null = null;
let beepSound: Howl | null = null;
let bootSound: Howl | null = null;

export const useSound = (enabled: boolean) => {
  // Initialize sounds lazily
  const initSounds = useCallback(() => {
    if (enabled) {
      if (!keypressSound) {
        keypressSound = new Howl({
          src: [SOUNDS.KEYPRESS],
          volume: 0.2
        });
      }
      
      if (!beepSound) {
        beepSound = new Howl({
          src: [SOUNDS.BEEP],
          volume: 0.3
        });
      }
      
      if (!bootSound) {
        bootSound = new Howl({
          src: [SOUNDS.BOOT],
          volume: 0.4
        });
      }
    }
  }, [enabled]);
  
  // Play keypress sound
  const playKeyPress = useCallback(() => {
    if (enabled) {
      initSounds();
      keypressSound?.play();
    }
  }, [enabled, initSounds]);
  
  // Play command confirmation beep
  const playBeep = useCallback(() => {
    if (enabled) {
      initSounds();
      beepSound?.play();
    }
  }, [enabled, initSounds]);
  
  // Play boot sequence sound
  const playBoot = useCallback(() => {
    if (enabled) {
      initSounds();
      bootSound?.play();
    }
  }, [enabled, initSounds]);
  
  return { playKeyPress, playBeep, playBoot };
};