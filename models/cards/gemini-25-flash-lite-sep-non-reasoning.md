---
type: Model
title: Gemini 2.5 Flash-Lite (Sep) (non-reasoning)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.067
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 39.4, z: -0.44, r: 43.3, estimated: false }  # 전문 지식
  reasoning: { s: 35.3, z: -0.47, r: 42.9, estimated: false }  # 추론
  coding: { s: 12.1, z: -0.84, r: 37.4, estimated: false }  # 코딩
  agentic: { s: 12.1, z: -0.76, r: 38.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 65.8, z: -0.32, r: 45.3, estimated: false }  # 멀티모달
  long_context: { s: 56.2, z: 0.12, r: 51.8, estimated: false }  # 긴문맥
  instruction: { s: 42.3, z: -0.44, r: 43.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash-Lite (Sep) (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# Gemini 2.5 Flash-Lite (Sep) (non-reasoning)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.067/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.3 | -0.44 | 실측 | [[gpqa-diamond]] 65.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 42.9 | -0.47 | 실측 | [[gpqa-diamond]] 65.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 37.4 | -0.84 | 실측 | [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 38.6 | -0.76 | 실측 | [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 45.3 | -0.32 | 실측 | [[mmmu-pro]] 63.0%×1.0 |
| 긴문맥 | 51.8 | +0.12 | 실측 | [[aa-lcr]] 50.0%×1.0 |
| 지시 따르기 | 43.4 | -0.44 | 실측 | [[ifbench]] 42.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
