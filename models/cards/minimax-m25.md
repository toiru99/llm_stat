---
type: Model
title: MiniMax-M2.5
creator: MiniMax
license: Open
intelligence_index: None
price_blended_usd_1m: 0.201
output_speed_tps: 43.41895832807083
context_window: 204800
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.0, z: 0.67, r: 60.1, estimated: false }  # 전문 지식
  reasoning: { s: 38.9, z: 0.17, r: 52.6, estimated: false }  # 추론
  coding: { s: 52.9, z: 0.45, r: 56.7, estimated: false }  # 코딩
  agentic: { s: 74.5, z: 1.04, r: 65.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 82.7, z: 0.87, r: 63.1, estimated: false }  # 긴문맥
  instruction: { s: 83.6, z: 1.25, r: 68.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M2.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# MiniMax-M2.5

MiniMax · Open · Large · 컨텍스트 204k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 코딩, 추론

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.201/1M · 43.41895832807083 t/s · TTFT 3.2293216519908445s · 204k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.1 | +0.67 | 실측 | [[gpqa-diamond]] 84.8484848484848%×0.4, [[humanitys-last-exam]] 20.5282669138091%×0.3 |
| 추론 | 52.6 | +0.17 | 실측 | [[critpt]] 1.1428571428571401%×1.0, [[gpqa-diamond]] 84.8484848484848%×1.0, [[humanitys-last-exam]] 20.5282669138091%×1.0 |
| 코딩 | 56.7 | +0.45 | 실측 | [[terminal-bench]] 34.8484848484849%×0.5 |
| 에이전트 | 65.6 | +1.04 | 실측 | [[tau2-bench]] 95.3216374269006%×1.0, [[terminal-bench]] 34.8484848484849%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.1 | +0.87 | 실측 | [[aa-lcr]] 73.3333333333333%×1.0 |
| 지시 따르기 | 68.8 | +1.25 | 실측 | [[ifbench]] 71.6326530612245%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
