// Global array to hold references to active utterances to prevent GC mid-speech.
let activeUtterances: SpeechSynthesisUtterance[] = [];

export const speak = (text: string) => {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;

  try {
    // 1. Only cancel if currently speaking to avoid putting the engine in a weird state
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
    
    activeUtterances = [];

    // 2. Prepend a comma and a space to the text.
    // Chrome on Windows has a hardware latency bug where the audio device takes ~100-200ms to wake up,
    // cutting off the first syllable (e.g., "abandon" sounds like "bandon").
    // Prepending a comma causes the TTS engine to pause briefly first, waking up the audio card
    // so the entire word is heard clearly.
    const utterance = new SpeechSynthesisUtterance(`, ${text}`);
    utterance.lang = 'en-US';

    // Prevent GC
    activeUtterances.push(utterance);

    const cleanup = () => {
      activeUtterances = activeUtterances.filter(u => u !== utterance);
    };
    utterance.onend = cleanup;
    utterance.onerror = cleanup;

    const selectVoiceAndPlay = () => {
      const voices = window.speechSynthesis.getVoices();
      const enVoices = voices.filter(v => v.lang.toLowerCase().startsWith('en'));
      
      if (enVoices.length > 0) {
        // Prioritize local offline voices (localService: true)
        const localVoice = enVoices.find(v => v.localService === true) || enVoices[0];
        utterance.voice = localVoice;
      }

      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }

      window.speechSynthesis.speak(utterance);
    };

    const currentVoices = window.speechSynthesis.getVoices();
    if (currentVoices.length === 0) {
      window.speechSynthesis.onvoiceschanged = () => {
        selectVoiceAndPlay();
      };
    } else {
      // Workaround for Chrome cancel async timing
      setTimeout(() => {
        selectVoiceAndPlay();
      }, 150);
    }
  } catch (error) {
    console.error('SpeechSynthesis error:', error);
  }
};
