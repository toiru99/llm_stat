---
type: Model
title: Gemma 3n E2B
creator: Google
license: Open
intelligence_index: 1.0
price_blended_usd_1m: 0
output_speed_tps: None
context_window: 32000
status: past
size_class: Small
params_b: 5.98
is_reasoning: false
radar:
  knowledge: { s: 10.6, z: -1.46, r: 28.1, estimated: false }  # 전문 지식
  reasoning: { s: 6.8, z: -1.36, r: 29.6, estimated: false }  # 추론
  coding: { s: 1.5, z: -1.07, r: 33.9, estimated: false }  # 코딩
  agentic: { s: 0.8, z: -1.41, r: 28.9, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.91, r: 36.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.51, r: 27.3, estimated: false }  # 긴문맥
  instruction: { s: 14.1, z: -1.61, r: 25.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 3n E2B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Gemma 3n E2B

Google · Open · Small(5.98B) · 컨텍스트 32k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 28.1 | -1.46 | 실측 | [[aa-omniscience]] 7.0%×1.0, [[gpqa-diamond]] 23.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 29.6 | -1.36 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 23.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 33.9 | -1.07 | 실측 | [[terminal-bench]] 1.0%×0.5 |
| 에이전트 | 28.9 | -1.41 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 1.0%×1.0 |
| 신뢰성 | 36.3 | -0.91 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.3 | -1.51 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 25.8 | -1.61 | 실측 | [[ifbench]] 22.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
