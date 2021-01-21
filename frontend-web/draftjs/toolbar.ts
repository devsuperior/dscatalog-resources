import Bold from 'core/assets/images/bold-icon.svg';
import Italic from 'core/assets/images/italic-icon.svg';
import Unordered from 'core/assets/images/unordered-icon.svg';
import Ordered from 'core/assets/images/ordered-icon.svg';

export const toolbar = {
  options: ['inline', 'list'],
  inline: {
    bold: { icon: Bold, className: 'custom-icon' },
    italic: { icon: Italic, className: 'custom-icon' },
    options: ['bold', 'italic'],
  },
  list: {
    options: ['unordered', 'ordered'],
    unordered: { icon: Unordered, className: 'custom-icon' },
    ordered: { icon: Ordered, className: 'custom-icon' }
  },
}
