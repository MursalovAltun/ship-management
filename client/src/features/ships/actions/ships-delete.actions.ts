import { createAction } from '@reduxjs/toolkit';

export const openDialog = createAction<{ id: string }>('[Ships Delete] Open Dialog');

export const closeDialog = createAction('[Ships Delete] Close Dialog');
