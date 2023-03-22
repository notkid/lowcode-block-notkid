export * from './type'
export function uuid() {
  return Math.random().toString(36).substring(2)
}

/**
 * 由 ref 代理 targetRef 上的方法
 */
export const defineGetterProperties = (ref, targetRef: any) => {
  if (!targetRef) return

  if (!Array.isArray(targetRef)) {
    targetRef = [targetRef]
  }

  targetRef.filter(Boolean).forEach((r) => {
    Object.defineProperties(
      ref,
      Object.keys(r?.current ?? {}).reduce((out, key) => {
        const property = r.current[key]

        let getter = () => property

        if (typeof property === 'function') {
          getter = () => property.bind(r.current)
        }

        out[key] = { get: getter }

        return out
      }, {})
    )
  })

  return ref
}


export const toExcel = (res) => {
  res.blob().then(blob => {
    const fileName = res.headers.get('Content-Disposition').split('=')[1];
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = decodeURI(fileName);
    document.body.appendChild(a);
    a.click();

    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 1000);
  });
}