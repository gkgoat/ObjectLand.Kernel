export default function runSqueak(opts: any): Promise<any>{
    return new Promise((c,e) => {
let SqueakJS = opts.Squeak || (window as any).SqueakJS;
if(SqueakJS)return SqueakJS.runImage(undefined,opts.component.element,opts,c);

return //e('no Squeak')
    }).then(v => {if(opts.then)return opts.then(v); return v})
}