---
type: Model
title: Gemini 3 Pro Preview (high)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.74
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 80.9, z: 1.4, r: 70.9, estimated: false }  # 전문 지식
  reasoning: { s: 78.8, z: 1.5, r: 72.5, estimated: false }  # 추론
  coding: { s: 63.3, z: 0.86, r: 63.0, estimated: false }  # 코딩
  agentic: { s: 63.3, z: 0.99, r: 64.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.8, z: 0.83, r: 62.4, estimated: false }  # 멀티모달
  long_context: { s: 85.7, z: 0.99, r: 64.8, estimated: false }  # 긴문맥
  instruction: { s: 81.9, z: 1.23, r: 68.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Pro Preview (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Gemini 3 Pro Preview (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.9 | +1.4 | 실측 | [[gpqa-diamond]] 90.8%×0.4, [[humanitys-last-exam]] 39.7%×0.3 |
| 추론 | 72.5 | +1.5 | 실측 | [[gpqa-diamond]] 90.8%×1.0, [[humanitys-last-exam]] 39.7%×1.0 |
| 코딩 | 63.0 | +0.86 | 실측 | [[terminal-bench]] 41.7%×0.5 |
| 에이전트 | 64.9 | +0.99 | 실측 | [[terminal-bench]] 41.7%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.4 | +0.83 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 64.8 | +0.99 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 68.4 | +1.23 | 실측 | [[ifbench]] 70.4%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
