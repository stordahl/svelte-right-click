/**
  * @name pageBack
  * @description A generic wrapper around history.back() with error handling */
export function pageBack() {
  if(!history) throw new Error("svelte-context-menu(pageBack): History Object not found.");
  history.back()
}

/**
  * @name pageReload
  * @description A generic wrapper around location.reload() with error handling */
export function pageReload() {
  if(!location) throw new Error("svelte-context-menu(pageReload): Location Object not found.");
  location.reload();
} 

/**
  * @name pagePrint
  * @description A generic wrapper around window.print() with error handling */
export function pagePrint() {
  if(!window || !window.print) throw new Error("svelte-context-menu(pagePrint): window.print Method not found.");
  window.print();
}

/**
  * @name pageSave
  * @description A progressively enhanced pageSave function */
/*export async function pageSave() {
  //await window.showSaveFilePicker()
}*/
