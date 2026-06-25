# LLM 능력 레이더 · Alan

LLM이 **어떤 영역을 얼마나 잘하는지**를 [Artificial Analysis](https://artificialanalysis.ai) 리더보드 기반으로 8축 레이더·가성비로 보여주는 대시보드. ESTsoft **앨런(Alan)** 검색 서비스의 LLM 탐색용.

## 🔗 라이브 사이트

**https://toiru99.github.io/llm_stat/**

> 레이더(8축: 전문지식·추론·코딩·에이전트·신뢰성·멀티모달·긴문맥·지시따르기) · 가성비 산점도 · 제작사/라이선스/가격 필터 · 모델 상세(가격·속도·TTFT·컨텍스트)

## 자동 갱신

매일 GitHub Actions(`.github/workflows/update.yml`)가 리더보드를 스크래핑→카드 생성→HTML 빌드→GitHub Pages 배포한다. LLM·외부 키 없이 전부 결정론적 파이프라인으로 동작한다.

```
scripts/scrape_aa.mjs  → models/data/latest.json   (Playwright 스크래핑)
scripts/build_cards.py → models/cards/*.md + cards.json  (정규화·z-score·kNN 추정)
scripts/build_artifact.py → artifact/llm-radar.html  (Pages 서빙용)
```

자주 바뀌는 값(제작사 화이트리스트·갱신주기·정규화 등)은 [`config.toml`](config.toml)에서 관리한다.

## 지식베이스

벤치마크가 *실제로 무엇을 측정하는지*(원본 논문 기준)와 축↔벤치마크 매핑은 [`index.md`](index.md)에서 시작 — [benchmarks/](benchmarks/) · [models/radar-spec.md](models/radar-spec.md) · [domains/](domains/).

---

출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
