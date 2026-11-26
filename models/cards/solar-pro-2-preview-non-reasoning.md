---
type: Model
title: Solar Pro 2 (Preview) (non-reasoning)
creator: Upstage
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 64000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 31.0, z: -0.77, r: 38.5, estimated: false }  # 전문 지식
  reasoning: { s: 27.6, z: -0.38, r: 44.4, estimated: false }  # 추론
  coding: { s: null, z: null, r: null, estimated: false }  # 코딩
  agentic: { s: null, z: null, r: null, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: null, z: null, r: null, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Pro 2 (Preview) (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Solar Pro 2 (Preview) (non-reasoning)

Upstage · Proprietary · Small · 컨텍스트 64k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: —

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 64k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 38.5 | -0.77 | 실측 | [[gpqa-diamond]] 54.4444%×0.4, [[humanitys-last-exam]] 3.6608%×0.3 |
| 추론 | 44.4 | -0.38 | 실측 | [[gpqa-diamond]] 54.4444%×1.0, [[humanitys-last-exam]] 3.6608%×1.0 |
| 코딩 | — | — | 측정 안 됨 | — |
| 에이전트 | — | — | 측정 안 됨 | — |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | — | — | 측정 안 됨 | — |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
