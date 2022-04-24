import { createAction } from '@reduxjs/toolkit';

export const openDialog = createAction<{ id: string }>('[Ships Add/Edit] Open Dialog');

export const closeDialog = createAction('[Ships Add/Edit] Close Dialog');
