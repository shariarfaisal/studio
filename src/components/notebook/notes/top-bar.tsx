'use client';

import { Check, LoaderIcon, Plus, Trash2, X } from 'lucide-react';
import { useNotebook } from '../provider';
import { useMutation } from '@tanstack/react-query';
import { notebookService } from '@/services/notebook';
import { Button, Popconfirm } from '@/components/ui';
import { useProjectStore } from '@/store';
import { useState } from 'react';
import { Project, Status, Topic } from '@/types';
import { nanoid } from 'nanoid';

type NotebookTopBarProps = {
  project: Project;
};
const NotebookTopBar = ({ project }: NotebookTopBarProps) => {
  const {
    selectAllNote,
    deselectAllNote,
    isAllNotesSelected,
    notes: { selected },
    addNewNote,
    deleteNotes,
  } = useNotebook();
  const [isPending, setIsLoading] = useState(false);
  const { setProjectStore } = useProjectStore();
  // const { mutate, isPending } = useMutation({
  //   mutationKey: ["addNote"],
  //   mutationFn: notebookService.addNote,
  //   onSuccess: (data) => {
  //     if (data) {
  //       addNewNote(data);
  //     }
  //   },
  // });

  const { mutate: deleteMutate, isPending: deleteIsPending } = useMutation({
    mutationKey: ['deleteNotes'],
    mutationFn: notebookService.deleteNotes,
    onSuccess: data => {
      if (data) {
        deleteNotes(data);
      }
    },
  });

  const addNoteHandler = () => {
    setIsLoading(true);
    const newNote: Topic = {
      id: nanoid(),
      created_at: new Date(),
      data: '',
      name: 'Untitled',
      updated_at: new Date(),
      status: Status.CURRENT, // or any appropriate status value
    };
    setProjectStore(prev => {
      const updatedProjects = prev.projects.map(proj => {
        if (proj.id === project.id) {
          return {
            ...proj,
            topics: [...proj.topics, newNote],
          };
        }
        return proj;
      });

      return {
        ...prev,
        projects: updatedProjects,
      };
    });

    setIsLoading(false);
  };

  const deleteNotesHandler = () => {
    deleteMutate({
      ids: selected,
      notebookId: '',
    });
  };

  return (
    <div className='sticky top-16 left-0 z-10 px-4 py-2 bg-background max-w-full overflow-x-auto no-scrollbar shadow-sm lg:shadow-none'>
      <div className='w-full flex items-center gap-2 '>
        <Button onClick={addNoteHandler} variant='ghost'>
          {isPending ? <LoaderIcon className='animate-spin' /> : <Plus />}
          <span>Add note</span>
        </Button>
        {selected.length !== 0 && (
          <Popconfirm title='Are you sure?' onConfirm={deleteNotesHandler}>
            <Button variant='destructive'>
              {deleteIsPending ? (
                <LoaderIcon className='animate-spin' />
              ) : (
                <Trash2 />
              )}
              <span>Delete notes</span>
            </Button>
          </Popconfirm>
        )}
        {!isAllNotesSelected && (
          <Button onClick={selectAllNote} variant='ghost'>
            <Check />
            <span>Select all</span>
          </Button>
        )}
        {selected.length !== 0 && (
          <Button onClick={deselectAllNote} variant='ghost'>
            <X />
            <span>Deselect all</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default NotebookTopBar;
