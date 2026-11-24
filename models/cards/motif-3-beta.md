---
type: Model
title: Motif 3 (Beta)
creator: Motif Technologies
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.9, z: 1.32, r: 69.8, estimated: false }  # 전문 지식
  reasoning: { s: 53.2, z: 0.9, r: 63.4, estimated: false }  # 추론
  coding: { s: null, z: null, r: null, estimated: false }  # 코딩
  agentic: { s: 66.6, z: 0.69, r: 60.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 84.2, z: 0.81, r: 62.2, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Motif 3 (Beta)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Motif 3 (Beta)

Motif Technologies · Proprietary · Large · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 69.8 | +1.32 | 실측 | [[gpqa-diamond]] 86.8687%×0.4, [[humanitys-last-exam]] 40.3614%×0.3 |
| 추론 | 63.4 | +0.9 | 실측 | [[critpt]] 6%×1.0, [[gpqa-diamond]] 86.8687%×1.0, [[humanitys-last-exam]] 40.3614%×1.0 |
| 코딩 | — | — | 측정 안 됨 | — |
| 에이전트 | 60.3 | +0.69 | 실측 | [[gdpval]] 1108.5 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.2 | +0.81 | 실측 | [[aa-lcr]] 74.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
