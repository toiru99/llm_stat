---
type: Model
title: Kimi K2.5 (non-reasoning)
creator: Kimi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.84
output_speed_tps: 39.4964970293538
context_window: 256000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 52.7, z: 0.26, r: 53.9, estimated: false }  # 전문 지식
  reasoning: { s: 32.7, z: -0.14, r: 47.9, estimated: false }  # 추론
  coding: { s: 28.7, z: -0.38, r: 44.3, estimated: false }  # 코딩
  agentic: { s: 55.4, z: 0.36, r: 55.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 78.1, z: 0.34, r: 55.1, estimated: false }  # 멀티모달
  long_context: { s: 75.9, z: 0.66, r: 59.9, estimated: false }  # 긴문맥
  instruction: { s: 44.3, z: -0.4, r: 44.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.5 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# Kimi K2.5 (non-reasoning)

Kimi · Open · Large · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $0.6 · 출력 $3.0 · 혼합 $0.84/1M · 39.4964970293538 t/s · TTFT 3.50009437532003s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.9 | +0.26 | 실측 | [[gpqa-diamond]] 78.8888888888889%×0.4, [[humanitys-last-exam]] 13.1603336422614%×0.3 |
| 추론 | 47.9 | -0.14 | 실측 | [[critpt]] 0.571428571428571%×1.0, [[gpqa-diamond]] 78.8888888888889%×1.0, [[humanitys-last-exam]] 13.1603336422614%×1.0 |
| 코딩 | 44.3 | -0.38 | 실측 | [[terminal-bench]] 18.939393939393902%×0.5 |
| 에이전트 | 55.4 | +0.36 | 실측 | [[tau2-bench]] 81.28654970760229%×1.0, [[terminal-bench]] 18.939393939393902%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.1 | +0.34 | 실측 | [[mmmu-pro]] 73.06358381502889%×1.0 |
| 긴문맥 | 59.9 | +0.66 | 실측 | [[aa-lcr]] 67.3333333333333%×1.0 |
| 지시 따르기 | 44.0 | -0.4 | 실측 | [[ifbench]] 43.6734693877551%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
