---
type: Model
title: o4-mini (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.8525
output_speed_tps: 108.36012958818856
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 54.4, z: 0.34, r: 55.1, estimated: false }  # 전문 지식
  reasoning: { s: 34.0, z: -0.08, r: 48.8, estimated: false }  # 추론
  coding: { s: 23.0, z: -0.58, r: 41.3, estimated: false }  # 코딩
  agentic: { s: 39.5, z: -0.18, r: 47.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 73.0, z: 0.08, r: 51.2, estimated: false }  # 멀티모달
  long_context: { s: 68.8, z: 0.45, r: 56.8, estimated: false }  # 긴문맥
  instruction: { s: 79.5, z: 1.07, r: 66.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o4-mini (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# o4-mini (high)

OpenAI · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $1.1 · 출력 $4.4 · 혼합 $0.8525/1M · 108.36012958818856 t/s · TTFT 14.908729332606415s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.1 | +0.34 | 실측 | [[gpqa-diamond]] 78.3838383838384%×0.4, [[humanitys-last-exam]] 16.5430954587581%×0.3 |
| 추론 | 48.8 | -0.08 | 실측 | [[critpt]] 0.571428571428571%×1.0, [[gpqa-diamond]] 78.3838383838384%×1.0, [[humanitys-last-exam]] 16.5430954587581%×1.0 |
| 코딩 | 41.3 | -0.58 | 실측 | [[terminal-bench]] 15.151515151515198%×0.5 |
| 에이전트 | 47.2 | -0.18 | 실측 | [[tau2-bench]] 55.5555555555556%×1.0, [[terminal-bench]] 15.151515151515198%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.2 | +0.08 | 실측 | [[mmmu-pro]] 69.2485549132948%×1.0 |
| 긴문맥 | 56.8 | +0.45 | 실측 | [[aa-lcr]] 61.0%×1.0 |
| 지시 따르기 | 66.1 | +1.07 | 실측 | [[ifbench]] 68.7074829931973%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
