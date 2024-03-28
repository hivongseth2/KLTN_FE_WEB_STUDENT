import { useMemo } from 'react';

export const configJodit = {
  readonly: false, // Bật/tắt chế độ chỉ đọc
  toolbarButtonSize: 'large', // Kích thước của nút trong thanh công cụ
  toolbarAdaptive: true, // Tự động điều chỉnh thanh công cụ theo kích thước màn hình
  toolbarSticky: false, // Giữ thanh công cụ ở vị trí cố định khi cuộn trang
  showCharsCounter: false, // Hiển thị số ký tự
  showWordsCounter: false, // Hiển thị số từ
  toolbarButtonIcons: { bold: 'B', italic: 'I', underline: 'U' }, // Biểu tượng cho các nút trong thanh công cụ
  toolbarInline: false, // Hiển thị thanh công cụ ở chế độ inline
  defaultMode: '1', // Chế độ mặc định (0: text, 1: wysiwyg)
  height: 700, // Chiều cao của trình soạn thảo
  buttons: [
    'source',
    '|',
    'bold',
    'strikethrough',
    'underline',
    'italic',
    '|',
    'ul',
    'ol',
    '|',
    'outdent',
    'indent',
    '|',
    'font',
    'fontsize',
    'brush',
    'paragraph',
    '|',
    'image',

    'table',
    'link',
    '|',
    'align',
    'undo',
    'redo',
    '|',
    'hr',
    'eraser',
    'copyformat',
    '|',
    'fullsize',
    'preview',

    'print',
  ],

  buttonsXS: [
    'bold',
    'image',
    '|',
    'brush',
    'paragraph',
    '|',
    'align',
    '|',
    'undo',
    'redo',
    '|',
    'eraser',
    'dots',
  ],
  hotkeys: {
    redo: 'ctrl+z',
    undo: 'ctrl+y,ctrl+shift+z',
    indent: 'ctrl+]',
    outdent: 'ctrl+[',
    bold: 'ctrl+b',
    italic: 'ctrl+i',
    removeFormat: 'ctrl+shift+m',
    insertOrderedList: 'ctrl+shift+7',
    insertUnorderedList: 'ctrl+shift+8',
    openSearchDialog: 'ctrl+f',
    openReplaceDialog: 'ctrl+r',
  },
};
