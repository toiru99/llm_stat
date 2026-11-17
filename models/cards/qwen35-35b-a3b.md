---
type: Model
title: Qwen3.5 35B A3B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.425
output_speed_tps: 117.0668360028658
context_window: 262144
status: past
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.1, z: 0.68, r: 60.2, estimated: false }  # 전문 지식
  reasoning: { s: 38.7, z: 0.17, r: 52.5, estimated: false }  # 추론
  coding: { s: 40.2, z: 0.02, r: 50.3, estimated: false }  # 코딩
  agentic: { s: 65.1, z: 0.71, r: 60.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 77.8, z: 0.33, r: 55.0, estimated: false }  # 멀티모달
  long_context: { s: 81.2, z: 0.83, r: 62.4, estimated: false }  # 긴문맥
  instruction: { s: 84.8, z: 1.3, r: 69.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 35B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Qwen3.5 35B A3B

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 코딩

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.425/1M · 117.0668360028658 t/s · TTFT 3.622695389172172s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.2 | +0.68 | 실측 | [[gpqa-diamond]] 84.5454545454545%×0.4, [[humanitys-last-exam]] 21.0379981464319%×0.3 |
| 추론 | 52.5 | +0.17 | 실측 | [[critpt]] 0.857142857142857%×1.0, [[gpqa-diamond]] 84.5454545454545%×1.0, [[humanitys-last-exam]] 21.0379981464319%×1.0 |
| 코딩 | 50.3 | +0.02 | 실측 | [[terminal-bench]] 26.5151515151515%×0.5 |
| 에이전트 | 60.7 | +0.71 | 실측 | [[tau2-bench]] 89.1812865497076%×1.0, [[terminal-bench]] 26.5151515151515%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.0 | +0.33 | 실측 | [[mmmu-pro]] 72.6589595375723%×1.0 |
| 긴문맥 | 62.4 | +0.83 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 69.5 | +1.3 | 실측 | [[ifbench]] 72.5170068027211%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
