// Playwright addInitScript에서 실행되므로 외부 클로저에 의존하지 않는다.
// 초기 HTML에서 빠진 과거 모델은 페이지가 별도 데이터를 해석할 때 확보한다.
export function captureModels() {
  const parse = JSON.parse;
  globalThis.__llmStatModels = [];
  JSON.parse = function (...args) {
    const value = Reflect.apply(parse, this, args);
    if (Array.isArray(value)) {
      const models = value.filter(o => o && typeof o.slug === 'string'
        && typeof o.name === 'string' && typeof o.deprecated === 'boolean');
      if (models.length) globalThis.__llmStatModels.push(...models);
    }
    return value;
  };
}
