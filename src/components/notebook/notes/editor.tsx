'use client';
import { useDebounce, useEditor } from '@/hooks';
import 'quill/dist/quill.snow.css';
import React, { useEffect, useState } from 'react';

type EditorProps = {
  onChange: (value: string) => void;
  value?: string;
  onBlur: () => void;
};

export const Editor = ({ value, onChange, onBlur }: EditorProps) => {
  const { quillRef, quill } = useEditor();

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        const contentPreview = quill.root.innerHTML;
        onChange(contentPreview);
      });
    }
  }, [quill, onChange]);

  useEffect(() => {
    if (quill && value !== quill.root.innerHTML) {
      quill.clipboard.dangerouslyPasteHTML(value || '');
    }
  }, [quill, value]);

  return (
    <div>
      <div
        className='w-full z-50 border border-default-200 h-[250px]'
        ref={quillRef}
        onBlur={onBlur}
      ></div>
    </div>
  );
};
