import EditorJS from '@editorjs/editorjs'; 
export default (dom: any,opts: any) => {let old = dom.id; dom.id = 'id-' + Math.random(); let e = new EditorJS(Object.assign({},opts,{holderId: dom.id})); return e.isReady.then(() => {dom.id = old}).then(() => e)}