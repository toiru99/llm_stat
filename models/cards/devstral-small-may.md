---
type: Model
title: Devstral Small (May)
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 24.1, z: -1.12, r: 33.2, estimated: false }  # 전문 지식
  reasoning: { s: 21.7, z: -1.09, r: 33.7, estimated: false }  # 추론
  coding: { s: 9.1, z: -0.94, r: 35.9, estimated: false }  # 코딩
  agentic: { s: 9.1, z: -0.86, r: 37.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 36.0, z: -0.49, r: 42.7, estimated: false }  # 긴문맥
  instruction: { s: 28.2, z: -1.03, r: 34.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Devstral Small (May)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# Devstral Small (May)

Mistral · Open · Small · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.2 | -1.12 | 실측 | [[gpqa-diamond]] 43.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 33.7 | -1.09 | 실측 | [[gpqa-diamond]] 43.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 35.9 | -0.94 | 실측 | [[terminal-bench]] 6.0%×0.5 |
| 에이전트 | 37.1 | -0.86 | 실측 | [[terminal-bench]] 6.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.7 | -0.49 | 실측 | [[aa-lcr]] 32.0%×1.0 |
| 지시 따르기 | 34.5 | -1.03 | 실측 | [[ifbench]] 32.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
