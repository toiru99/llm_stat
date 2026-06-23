---
type: Template
title: 모델 카드 스키마 (예시)
description: scripts/build_cards.py 가 모델마다 생성하는 OKF 카드의 표준 형식. 값은 예시.
timestamp: 2026-06-23T00:00:00Z
---

> ⚠️ **스키마 예시.** 실제 카드는 `models/<slug>.md` 로 `build_cards.py`가 자동 생성하며, 매 빌드 시 덮어쓴다. 축 정의는 [radar-spec.md](radar-spec.md).

```yaml
---
type: Model
title: Claude Opus 4.8 (max)
creator: Anthropic
license: Proprietary                 # Open / Proprietary
intelligence_index: 56               # 헤드라인 (레이더 밖)
price_blended_usd_1m: 3.85
output_speed_tps: 63
context_window: 1000000
radar:                               # 8축 raw(원시 %) + norm(0~100 정규화). radar-spec.md 순서 고정.
  knowledge:     { raw: 70, norm: 95 }   # 전문 지식 (AA-Omniscience Accuracy)
  reasoning:     { raw: 53, norm: 90 }   # 추론 (HLE)
  coding:        { raw: 60, norm: 92 }   # 코딩 (SciCode)
  agentic:       { raw: 64, norm: 88 }   # 에이전트 (τ²+Terminal-Bench Hard)
  trust:         { raw: 64, norm: 80 }   # 신뢰성 (AA-Omniscience Non-Hallucination)
  multimodal:    { raw: 80, norm: 96 }   # 멀티모달 (MMMU Pro) — 결측 시 null="측정 안 됨"
  long_context:  { raw: 70, norm: 93 }   # 긴문맥 (AA-LCR)
  instruction:   { raw: 60, norm: 78 }   # 지시 따르기 (IFBench)
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.8 (max)
    url: https://artificialanalysis.ai/leaderboards/models
  - type: official_page              # (선택) 모델 공식 발표글 — models/sources/ 에 .md/pdf 보강 가능
    title: ""
    url: ""
updated: 2026-06-23                  # 마지막 스크래핑 날짜
timestamp: 2026-06-23T00:00:00Z
---
```

# 본문 구조 (자동 생성)

- **한 줄 요약**: 제작사 · 라이선스 · 컨텍스트 · 종합지능
- **강점 / 약점**: 정규화 8축 상위 2 → 강점, 하위 2 → 약점
- **실용 지표**: `$가격/1M · 속도 t/s · 컨텍스트 · 가성비(종합지능÷가격)`
- **레이더 8축 표**: 축별 raw / norm / 연결 벤치마크([[aa-omniscience]] 등)
- **출처**: `출처: artificialanalysis.ai` (의무 표기)
