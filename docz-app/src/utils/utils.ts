export const copyToClipboard = (text: string) => {
  if ((window as any).clipboardData && (window as any).clipboardData.setData) {
    // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
    return (window as any).clipboardData.setData('Text', text);
  } else if (
    document.queryCommandSupported &&
    document.queryCommandSupported('copy')
  ) {
    var textarea = document.createElement('textarea');
    textarea.textContent = text;
    textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in Microsoft Edge.
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand('copy'); // Security exception may be thrown by some browsers.
    } catch (ex) {
      console.warn('Copy to clipboard failed.', ex);
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }
};

export const pickTextColorBasedOnBgColor = (bgColor: string): string => {
  const rgbaColor = getRGB(bgColor);
  const color =
    rgbaColor.charAt(0) === '#' ? rgbaColor.substring(1, 7) : rgbaColor;
  const r = parseInt(color.substring(0, 2), 16); // hexToR
  const g = parseInt(color.substring(2, 4), 16); // hexToG
  const b = parseInt(color.substring(4, 6), 16); // hexToB
  const uicolors = [r / 255, g / 255, b / 255];
  const c = uicolors.map(col => {
    if (col <= 0.03928) {
      return col / 12.92;
    }
    return Math.pow((col + 0.055) / 1.055, 2.4);
  });
  const L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  return L > 0.179 ? 'dark' : 'light';
};

export const getRGB = (color: string): string => {
  const canvas =
    typeof document !== `undefined` ? document.createElement('canvas') : null;
  if (canvas) {
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.fillStyle = color;
    return ctx.fillStyle;
  }
  return '';
};

export const resolveFromObject = (obj: any, keys: string): string | any => {
  return keys.split('.').reduce(function(cur, key) {
    return cur[key];
  }, obj);
};
