export const useSelectedColor = () => useState('selected-color', () => '')
export const useAvailableColor = () => useState('available-color', () => ['red', 'yellow'])

export const useSidebarActive1 = () => useState('active-sidebar', () => [true, false, false, false])

//export const rooSidebarSelected = (inIndexPosisi: int) => useState('roo-sidebar-selected', (inIndexPosisi) => {
//    var vr_array1 = ['', '', '', ''];
//    vr_array1[inIndexPosisi] = 'selected';
//    
//   return vr_array1;
//})